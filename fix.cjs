const fs = require('fs');

async function run() {
  const m = await import('./src/data/monsters.js');
  const valid = m.MONSTERS.filter(x => x);
  const unique = [];
  const seen = new Set();
  for(const x of valid){
    if(!seen.has(x.key)){
      seen.add(x.key);
      unique.push(x);
    }
  }

  let out = `// D&D 5e SRD monsters (open license). Concise stat blocks.
// scores use lowercase ability keys; cr is a number (0.125, 0.25, 0.5, then integers).

export const MONSTERS = ${JSON.stringify(unique, null, 2)};

export const getMonster = (key) => MONSTERS.find((m) => m.key === key)
export const crLabel = ${m.crLabel.toString()}
export const abilityModStr = ${m.abilityModStr.toString()}
`;

  fs.writeFileSync('src/data/monsters.js', out);
  console.log('Fixed! Unique monsters count:', unique.length);
}

run().catch(console.error);
