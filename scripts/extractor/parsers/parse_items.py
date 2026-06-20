import fitz
import re
import json

def extract_items(pdf_path, start_page, end_page, item_list):
    pdf = fitz.open(pdf_path)
    text = ""
    for page_num in range(start_page, end_page + 1):
        text += pdf[page_num].get_text() + "\n"
        
    extracted_items = []
    
    for item_name in item_list:
        spaced_name = r'\s*'.join(list(item_name))
        pattern = re.compile(rf"({spaced_name})\s+(Wondrous item|Weapon|Armor|Ring|Wand|Staff|Potion|Rod)", re.I)
        match = pattern.search(text)
        if match:
            start_desc_idx = match.start(2)
            end_desc_idx = start_desc_idx + 600 # Exhaustive pass pulls generous chunk
            
            # Find next item to bound it
            for other_item in item_list:
                if other_item == item_name:
                    continue
                other_spaced = r'\s*'.join(list(other_item))
                other_pattern = re.compile(rf"({other_spaced})\s+(Wondrous item|Weapon|Armor|Ring|Wand|Staff|Potion|Rod)", re.I)
                other_match = other_pattern.search(text[start_desc_idx:])
                if other_match:
                    possible_end = start_desc_idx + other_match.start(1)
                    if possible_end < end_desc_idx:
                        end_desc_idx = possible_end
            
            desc = text[start_desc_idx:end_desc_idx].strip()
            desc = re.sub(r'[\s\-—]+', ' ', desc)
            if len(desc) > 20:
                extracted_items.append({
                    "name": item_name,
                    "desc": desc
                })
        else:
            print(f"Skipped {item_name}: Regex failed.")
            
    return extracted_items

if __name__ == '__main__':
    tce_items = [
        "Absorbing Tattoo", "All-Purpose Tool", "Amulet of the Devout", "Arcane Grimoire",
        "Barrier Tattoo", "Bell Branch", "Bloodwell Vial", "Cauldron of Rebirth",
        "Coiling Grasp Tattoo", "Crook of Rao", "Demon Armor", "Devotee's Censer",
        "Eldritch Claw Tattoo", "Far Realm Shard", "Ghost Step Tattoo", "Heart Weaver's Primer",
        "Libram of Souls and Flesh", "Lyre of Building", "Mighty Servant of Leuk-o", 
        "Outer Essence Shard", "Protective Verses", "Shadowfell Brand Tattoo",
        "Spellwrought Tattoo"
    ]
    
    xge_items = [
        "Armor of Vulnerability", "Charlatan's Die", "Cloak of Billowing", "Cloak of Many Fashions",
        "Clockwork Amulet", "Clothes of Mending", "Dark Shard Amulet", "Dread Helm",
        "Ear Horn of Hearing", "Enduring Spellbook", "Ersatz Eye", "Hat of Vermin",
        "Hat of Wizardry", "Heward's Handy Spice Pouch", "Horn of Silent Alarm",
        "Instrument of Illusions", "Instrument of Scribing", "Lock of Trickery",
        "Moon-Touched Sword", "Orb of Direction", "Orb of Time", "Perfume of Bewitching",
        "Pipe of Smoke Monsters", "Pole of Angling", "Pole of Collapsing",
        "Pot of Awakening", "Rope of Mending", "Ruby of the War Mage", "Shield of Expression"
    ]
    
    print("Extracting full TCE Items...")
    tce_extracted = extract_items('../Tashas_Cauldron_of_Everything.pdf', 118, 135, tce_items)
    
    print("Extracting full XGE Items...")
    xge_extracted = extract_items('../[D&D5e] Xanathar_s Guide to Everything.pdf', 135, 139, xge_items)
    
    all_new_items = tce_extracted + xge_extracted
    print(f"Total exhaustive extracted: {len(all_new_items)}")
    
    with open('../src/data/items.js', 'r', encoding='utf-8') as f:
        existing_js = f.read()
    
    existing_js = existing_js.replace("\n];\n", "")
    
    with open('../src/data/items.js', 'w', encoding='utf-8') as f:
        f.write(existing_js)
        if not existing_js.endswith(",\n"):
             f.write(",\n")
        
        for item in all_new_items:
            name = item['name'].replace("'", "\\'")
            desc = item['desc'].replace("'", "\\'")
            f.write("  {\n")
            f.write(f"    name: '{name}',\n")
            f.write(f"    desc: '{desc}'\n")
            f.write("  },\n")
        f.write("];\n")
        
    print("Done writing exhaustive magic items.")
