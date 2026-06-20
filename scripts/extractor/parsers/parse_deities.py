import fitz
import re

def extract_deities():
    pdf = fitz.open('../DnD 5e Players Handbook.pdf')
    # Deities are on pages 269-273
    text = ""
    for page_num in range(269, 274):
        text += pdf[page_num].get_text() + "\n"
        
    # Find lines that match Deity formatting (Name, Alignment, Domains)
    # Usually in a table, so the alignment (LG, NG, CG, etc.) is a good anchor
    lines = text.split('\n')
    
    deities = []
    current_deity = None
    
    alignments = ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]
    
    # Very basic line-by-line heuristic parser for the weird PDF table output
    for i in range(len(lines)):
        line = lines[i].strip()
        if not line: continue
        
        # Check if the next line is an alignment, which means this line is likely a deity name
        if i + 1 < len(lines):
            next_line = lines[i+1].strip()
            if next_line in alignments and len(line) < 30 and " " in line:
                # We found a deity!
                name = line
                alignment = next_line
                
                # The next few lines are probably domains and symbol
                domains = lines[i+2].strip() if i+2 < len(lines) else ""
                symbol = lines[i+3].strip() if i+3 < len(lines) else ""
                
                desc = f"Alignment: {alignment}. Domains: {domains}. Symbol: {symbol}."
                deities.append({
                    "name": name.title(),
                    "desc": desc.replace("'", "\\'")
                })
                
    # Deduplicate
    unique_deities = {d['name']: d for d in deities}.values()
    
    with open('../src/data/deities.js', 'r', encoding='utf-8') as f:
        existing = f.read()
        
    existing = existing.replace("\n];\n", "")
    
    with open('../src/data/deities.js', 'w', encoding='utf-8') as f:
        f.write(existing)
        if not existing.endswith(",\n"):
             f.write(",\n")
        
        for e in unique_deities:
            f.write("  {\n")
            f.write(f"    name: '{e['name']}',\n")
            f.write(f"    desc: '{e['desc']}'\n")
            f.write("  },\n")
        f.write("];\n")
        
    print(f"Extracted {len(unique_deities)} deities from PHB Appendix B.")

if __name__ == '__main__':
    extract_deities()
