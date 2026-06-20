import argparse
import sys
import importlib

AVAILABLE_SECTIONS = [
    'feats', 'items', 'conditions', 'deities', 'mechanics', 'hazards', 'spells',
    'classes', 'subclasses', 'monsters'
]

def main():
    parser = argparse.ArgumentParser(description="Unified D&D 5e Compendium Extractor")
    parser.add_argument("--book", required=True, help="Source book code (e.g. PHB, DMG, XGE, TCE)")
    parser.add_argument("--pdf", required=True, help="Path to the PDF file")
    parser.add_argument("--section", required=True, choices=AVAILABLE_SECTIONS, help="Section to extract")
    
    args = parser.parse_args()
    
    print(f"Starting extraction for {args.book} -> {args.section}...")
    
    try:
        # Dynamically load the correct parser
        module = importlib.import_module(f"parsers.parse_{args.section}")
        extractor_func = getattr(module, "extract")
        extractor_func(args.book, args.pdf)
        print(f"Successfully extracted {args.section} from {args.book}.")
    except ModuleNotFoundError:
        print(f"Error: The parser for '{args.section}' has not been implemented yet.", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Extraction failed: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
