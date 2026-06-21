import json
import re

with open('src/data/monsters.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to parse the monsters array. It's a huge JS array.
# Since it's valid JS but not JSON (it uses backticks and single quotes), we can't just json.loads.
