import json

def merge():
    with open('scratch/feats_scraped_tce.json', 'r', encoding='utf-8') as f:
        tce = json.load(f)
    
    unique_tce = []
    seen = set()
    for feat in tce:
        if feat['name'] == 'Feats': continue
        if feat['name'] not in seen:
            seen.add(feat['name'])
            # Fix TCE hyphen issues
            feat['desc'] = feat['desc'].replace('A- ', '')
            unique_tce.append(feat)

    with open('scratch/feats_scraped_xge.json', 'r', encoding='utf-8') as f:
        xge = json.load(f)

    with open('src/data/feats.js', 'r', encoding='utf-8') as f:
        current_js = f.read()

    new_feats = unique_tce + xge
    
    # Format the JS
    new_feats_str = ""
    for feat in new_feats:
        # JSON stringify name and desc to safely escape quotes and newlines
        name_str = json.dumps(feat['name'])
        desc_str = json.dumps(feat['desc'])
        new_feats_str += f"  {{\n    name: {name_str},\n    desc: {desc_str}\n  }},\n"

    new_js = current_js.replace("];", ",\n" + new_feats_str.rstrip(',\n') + "\n];")

    with open('src/data/feats.js', 'w', encoding='utf-8') as f:
        f.write(new_js)

    print(f"Appended {len(new_feats)} feats!")

if __name__ == "__main__":
    merge()
