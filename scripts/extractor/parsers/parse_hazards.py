import fitz
import re

def extract_hazards(pdf_path, start_page, end_page, hazard_list):
    pdf = fitz.open(pdf_path)
    text = ""
    for page_num in range(start_page, end_page + 1):
        text += pdf[page_num].get_text() + "\n"
        
    extracted = []
    
    for item in hazard_list:
        spaced = r'\s*'.join(list(item))
        # Look for the exact name as a bold header/subheader
        pat = re.compile(rf"({spaced})\s*\n([\s\S]{{50,600}}?)(?=\n[A-Z][a-z]+|\Z)", re.I)
        
        match = pat.search(text)
        if match:
            desc = match.group(2)
            desc = re.sub(r'[\s\-—]+', ' ', desc).strip()
            desc = desc[:400] + "..." # Truncate for formatting
            extracted.append({
                "name": item,
                "desc": desc.replace("'", "\\'")
            })
        else:
            print(f"Skipped {item}")
            
    return extracted

if __name__ == '__main__':
    dmg_hazards = [
        "Brown Mold", "Green Slime", "Webs", "Yellow Musk Creeper", "Collapsing Roof",
        "Falling Net", "Fire-Breathing Statue", "Pit Trap", "Poison Darts", "Poison Needle",
        "Rolling Sphere", "Sphere of Annihilation Trap"
    ]
    
    xge_traps = [
        "Bear Trap", "Crossbow Trap", "Falling Portcullis", "Fiery Blast", "Net Trap",
        "Path of Blades", "Poison Dart", "Scything Blade", "Sleep Gas", "Spear Trap"
    ]
    
    print("Extracting DMG Hazards & Traps...")
    dmg_extracted = extract_hazards('../Dungeon_s Master Guide 5e.pdf', 105, 123, dmg_hazards)
    
    print("Extracting XGE Traps...")
    xge_extracted = extract_hazards('../[D&D5e] Xanathar_s Guide to Everything.pdf', 113, 118, xge_traps)
    
    all_hazards = dmg_extracted + xge_extracted
    print(f"Total extracted: {len(all_hazards)}")
    
    with open('../src/data/hazards.js', 'r', encoding='utf-8') as f:
        existing = f.read()
        
    existing = existing.replace("\n];\n", "")
    
    with open('../src/data/hazards.js', 'w', encoding='utf-8') as f:
        f.write(existing)
        if not existing.endswith(",\n"):
             f.write(",\n")
        
        for e in all_hazards:
            f.write("  {\n")
            f.write(f"    name: '{e['name']}',\n")
            f.write(f"    desc: '{e['desc']}'\n")
            f.write("  },\n")
        f.write("];\n")
        
    print("Appended hazards to hazards.js")
