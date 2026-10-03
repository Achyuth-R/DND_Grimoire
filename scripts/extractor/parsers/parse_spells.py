import fitz
import json
import re

doc = fitz.open("source_pdfs/DnD 5e Players Handbook.pdf")

spell_classes = {}
current_class = None

# PASS 1: Spell Lists
for i in range(187, 192):
    page = doc.load_page(i)
    text = page.get_text('text')
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line: continue
        
        clean_line = line.replace(' ', '')
        if clean_line.endswith('Spells') and clean_line != 'Spells':
            c = clean_line.replace('Spells', '').lower()
            if c in ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard']:
                current_class = c
            continue
            
        if 'Level' in line or 'Cantrips' in line or '1st' in line or '2nd' in line or '3rd' in line or '4th' in line or '5th' in line or '6th' in line or '7th' in line or '8th' in line or '9th' in line or 'PART' in line or line.isdigit():
            continue
            
        if current_class and line and len(line) > 2 and line[0].isupper():
            key = re.sub(r'[^a-z0-9]+', '', line.lower())
            if key not in spell_classes:
                spell_classes[key] = set()
            spell_classes[key].add(current_class)

print(f"Extracted mappings for {len(spell_classes)} spells.")

# PASS 2: Spell Descriptions
spells = []
current_spell = None
desc_buffer = []

level_school_pattern = re.compile(r'(\d)(?:st|nd|rd|th)-level\s+([a-zA-Z]+)|([a-zA-Z]+)\s+cantrip', re.IGNORECASE)

def clean_name(name):
    name = name.strip()
    if re.search(r'[a-zA-Z] [a-zA-Z]', name):
        name = re.sub(r'(?<=[a-zA-Z]) (?=[a-zA-Z])', '', name)
    return name.title()

def finalize_spell():
    global current_spell, desc_buffer
    if current_spell:
        current_spell['desc'] = "\n\n".join((" ".join(desc_buffer).split("\n"))).strip()
        spells.append(current_spell)
        current_spell = None
        desc_buffer = []

prev_block_text = ""

for page_num in range(191, 270):
    page = doc.load_page(page_num)
    blocks = page.get_text("blocks")
    for b in blocks:
        text = b[4].strip()
        if not text: continue
        
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
            key = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
            
            match_key = key.replace('-', '')
            classes = list(spell_classes.get(match_key, ["wizard"])) # default to wizard if missing
            
            current_spell = {
                "source": "PHB",
                "key": key,
                "name": name,
                "level": level,
                "school": school,
                "classes": classes,
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
            else:
                desc_buffer.append(text.replace("\n", " "))
        
        prev_block_text = text

finalize_spell()

with open("scratch/extracted_spells.json", "w", encoding="utf-8") as f:
    json.dump(spells, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(spells)} spells.")
