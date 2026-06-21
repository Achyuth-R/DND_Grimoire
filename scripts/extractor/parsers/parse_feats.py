import fitz
import json
import os

def extract(book_code, pdf_path):
    print(f"Extracting feats from {book_code}...")
    doc = fitz.open(pdf_path)
    
    # Define page ranges based on the book
    if book_code == 'XGE':
        pages = [73, 74, 75]
    elif book_code == 'TCE':
        pages = [79, 80, 81, 82] # Tasha's starts around 79.
    else:
        print("Unknown book code for feats.")
        return
        
    feats = []
    current_feat = None
    
    ignore_list = ['RACE', 'RELATIONSHIP', 'STATUS', "WHAT'S NEXT?", 'RACIAL FEATS', 'CHAPTER']
    
    for page_num in pages:
        if page_num >= len(doc): break
        page = doc[page_num]
        blocks = page.get_text("blocks")
        
        for b in blocks:
            text = b[4].strip()
            if not text: continue
            if "This PDF has been modified" in text: continue
            if "CHAPTER" in text: continue
            if text in ignore_list: continue
            
            # Check if this block looks like a feat title
            if text.isupper() and len(text) < 40 and '\n' not in text:
                if current_feat:
                    feats.append(current_feat)
                current_feat = {"name": text.title(), "desc": ""}
            elif current_feat:
                # Clean up newlines and hyphens
                clean_text = text.replace('\n', ' ')
                clean_text = clean_text.replace('- ', '')
                # Replace the weird OCR bullet point with a real one
                clean_text = clean_text.replace('\ufffd', '•')
                
                # Double space fix (basic)
                clean_text = ' '.join(clean_text.split())
                
                if clean_text.startswith("Prerequisite:"):
                    current_feat["desc"] += clean_text + "\n\n"
                else:
                    if "•" in clean_text:
                        clean_text = clean_text.replace("• ", "\n• ")
                    current_feat["desc"] += clean_text + "\n\n"
                    
    if current_feat:
        feats.append(current_feat)
        
    for f in feats:
        f["desc"] = f["desc"].strip()

    os.makedirs('scratch', exist_ok=True)
    out_path = f"scratch/feats_scraped_{book_code.lower()}.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(feats, f, indent=2, ensure_ascii=False)
        
    print(f"Extracted {len(feats)} feats to {out_path}.")
