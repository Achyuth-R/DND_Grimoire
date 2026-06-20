import fitz
import json
import re

doc = fitz.open("DnD 5e Players Handbook.pdf")

spells = []
current_spell = None
desc_buffer = []

level_school_pattern = re.compile(r'(\d)(?:st|nd|rd|th)-level\s+([a-zA-Z]+)|([a-zA-Z]+)\s+cantrip', re.IGNORECASE)

def clean_name(name):
    # D e m i p l a n e -> Demiplane
    # D i m e n s i o n  D o o r -> Dimension Door
    name = name.strip()
    if re.search(r'[a-zA-Z] [a-zA-Z]', name):
        name = re.sub(r'(?<=[a-zA-Z]) (?=[a-zA-Z])', '', name)
    return name.title()

def finalize_spell():
    global current_spell, desc_buffer
    if current_spell:
        current_spell['desc'] = "\n".join(desc_buffer).strip()
        spells.append(current_spell)
        current_spell = None
        desc_buffer = []

prev_block_text = ""

# PHB Spells roughly 211 to 289
for page_num in range(211, 289):
    page = doc.load_page(page_num)
    blocks = page.get_text("blocks")
    for b in blocks:
        text = b[4].strip()
        if not text: continue
        
        # skip headers/footers
        if text.startswith("PART 3 | SPELLS") or text.isdigit():
            continue

        match = level_school_pattern.search(text)
        if match and "Casting Time" not in text:
            finalize_spell()
            
            level = 0
            school = ""
            if match.group(1):
                level = int(match.group(1))
                school = match.group(2).capitalize()
            else:
                level = 0
                school = match.group(3).capitalize()
            
            name = clean_name(prev_block_text.replace('\n', ' '))
            
            # create new spell
            key = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
            current_spell = {
                "key": key,
                "name": name,
                "level": level,
                "school": school,
                "classes": ["wizard"], # Placeholder, PHB doesn't list classes in description
                "time": "",
                "range": "",
                "components": "",
                "duration": "",
                "desc": ""
            }
        elif current_spell:
            if text.startswith("Casting Time:"):
                current_spell['time'] = text.replace("Casting Time:", "").strip()
            elif text.startswith("Range:"):
                current_spell['range'] = text.replace("Range:", "").strip()
            elif text.startswith("Components:"):
                current_spell['components'] = text.replace("Components:", "").strip()
            elif text.startswith("Duration:"):
                current_spell['duration'] = text.replace("Duration:", "").strip()
            elif "At Higher Levels." in text:
                desc_buffer.append(text.replace("\n", " "))
            else:
                desc_buffer.append(text.replace("\n", " "))
        else:
            # We are not in a spell yet. Just track previous block.
            pass
            
        prev_block_text = text

finalize_spell()

with open("scratch/extracted_spells.json", "w", encoding="utf-8") as f:
    json.dump(spells, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(spells)} spells.")
