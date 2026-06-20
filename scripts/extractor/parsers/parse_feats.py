import fitz
import re
import json
import validate_data

def extract_feats(pdf_path, start_page, end_page):
    pdf = fitz.open(pdf_path)
    text = ""
    for page_num in range(start_page, end_page + 1):
        text += pdf[page_num].get_text() + "\n"
        
    text = validate_data.clean_pdf_text(text)
    
    # In the PDF, feat names are capitalized or we can just find known feats.
    # We will use a known list of PHB feats and extract everything between them.
    phb_feats = [
        "Actor", "Alert", "Athlete", "Charger", "Crossbow Expert", "Defensive Duelist", 
        "Dual Wielder", "Dungeon Delver", "Durable", "Elemental Adept", "Grappler", 
        "Great Weapon Master", "Healer", "Heavily Armored", "Heavy Armor Master", 
        "Inspiring Leader", "Keen Mind", "Lightly Armored", "Linguist", "Lucky", 
        "Mage Slayer", "Magic Initiate", "Martial Adept", "Medium Armor Master", 
        "Mobile", "Moderately Armored", "Mounted Combatant", "Observant", "Polearm Master", 
        "Resilient", "Ritual Caster", "Savage Attacker", "Sentinel", "Sharpshooter", 
        "Shield Master", "Skilled", "Skulker", "Spell Sniper", "Tavern Brawler", 
        "Tough", "War Caster", "Weapon Master"
    ]
    
    extracted_feats = []
    
    for i, feat_name in enumerate(phb_feats):
        spaced_name = r'\s*'.join(list(feat_name))
        pattern = re.compile(rf"({spaced_name})\s+(Prerequisite:|\w)", re.I)
        match = pattern.search(text)
        if match:
            start_desc_idx = match.start(2)
            
            end_desc_idx = len(text)
            
            # Find the earliest occurrence of ANY other feat after this one
            for other_feat in phb_feats:
                if other_feat == feat_name:
                    continue
                other_spaced = r'\s*'.join(list(other_feat))
                other_pattern = re.compile(rf"({other_spaced})\s+(Prerequisite:|\w)", re.I)
                other_match = other_pattern.search(text[start_desc_idx:])
                if other_match:
                    possible_end = start_desc_idx + other_match.start(1)
                    if possible_end < end_desc_idx:
                        end_desc_idx = possible_end
            
            desc = text[start_desc_idx:end_desc_idx].strip()
            desc = re.sub(r'[\s\-—]+', ' ', desc)
            extracted_feats.append({
                "name": feat_name,
                "desc": desc
            })
            
    with open('../src/data/feats.js', 'w', encoding='utf-8') as f:
        f.write("export const FEATS = [\n")
        for item in extracted_feats:
            name = item['name'].replace("'", "\\'")
            desc = item['desc'].replace("'", "\\'")
            f.write("  {\n")
            f.write(f"    name: '{name}',\n")
            f.write(f"    desc: '{desc}'\n")
            f.write("  },\n")
        f.write("];\n")
        
    print(f"Extracted {len(extracted_feats)} feats.")

if __name__ == '__main__':
    extract_feats('../DnD 5e Players Handbook.pdf', 153, 158)
