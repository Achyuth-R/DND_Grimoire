import urllib.request
import json
import time
import re

def fetch_all_mechanics():
    base_url = "https://www.dnd5eapi.co"
    print("Fetching rules list...")
    
    req = urllib.request.Request(f"{base_url}/api/rule-sections", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        
    rules = []
    total = len(data['results'])
    
    print(f"Found {total} rules. Fetching details...")
    
    for i, rule_ref in enumerate(data['results']):
        url = f"{base_url}{rule_ref['url']}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as response:
                rule_data = json.loads(response.read().decode())
                
                # Format description, stripping markdown
                desc = rule_data.get('desc', '')
                desc = re.sub(r'#+\s', '', desc) # Remove headers
                desc = re.sub(r'\*', '', desc) # Remove bold/italics
                desc = desc.replace("'", "\\'") # Escape single quotes
                
                name = rule_data["name"].replace("'", "\\'")
                
                rules.append({
                    "name": name,
                    "desc": desc
                })
        except Exception as e:
            print(f"Failed to fetch {rule_ref['name']}: {e}")
            
        time.sleep(0.1) # Be nice to the API
        
    print("Writing to src/data/mechanics.js...")
    with open('../src/data/mechanics.js', 'w', encoding='utf-8') as f:
        f.write("export const MECHANICS = [\n")
        for rule in rules:
            name = rule['name'].replace('`', '\\`')
            desc = rule['desc'].replace('`', '\\`')
            f.write("  {\n")
            f.write(f"    name: `{name}`,\n")
            f.write(f"    desc: `{desc}`\n")
            f.write("  },\n")
        f.write("];\n")
        
    print(f"Successfully wrote {len(rules)} exhaustive mechanics to mechanics.js")

if __name__ == '__main__':
    fetch_all_mechanics()
