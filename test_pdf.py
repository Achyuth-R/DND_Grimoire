import fitz

def test_parse(pdf_path, page_num):
    doc = fitz.open(pdf_path)
    page = doc[page_num]
    blocks = page.get_text("blocks")
    for b in blocks:
        text = b[4].strip()
        if "This PDF has been modified" in text: continue
        print(f"BLOCK: {repr(text)}")

test_parse("source_pdfs/[D&D5e] Xanathar_s Guide to Everything.pdf", 73)
