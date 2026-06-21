import { useState, useEffect } from 'react';
import { CLASSES } from '../data/classes.js';
import { RACES } from '../data/races.js';

export default function ClassRaceVisualizer() {
  const [raceKey, setRaceKey] = useState(RACES[0].key);
  const [classKey, setClassKey] = useState(CLASSES[0].key);
  
  const expectedSrc = `/images/visualizer/${raceKey}_${classKey}.png`;
  const fallbackSrc = `/images/visualizer/${classKey}_class.png`;
  
  const [imgSrc, setImgSrc] = useState(expectedSrc);
  
  useEffect(() => {
    setImgSrc(expectedSrc);
  }, [expectedSrc]);

  return (
    <div className="panel" style={{ marginBottom: 24 }}>
      <h2 style={{ marginTop: 0 }}>Visualizer</h2>
      <p className="sub">Mix and match races and classes to see what your hero might look like.</p>
      
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <select 
          className="search-input" 
          style={{ flex: 1, cursor: 'pointer' }}
          value={raceKey} 
          onChange={(e) => setRaceKey(e.target.value)}
        >
          {RACES.map(r => <option key={r.key} value={r.key}>{r.name}</option>)}
        </select>
        <span style={{ alignSelf: 'center', fontWeight: 'bold' }}>+</span>
        <select 
          className="search-input" 
          style={{ flex: 1, cursor: 'pointer' }}
          value={classKey} 
          onChange={(e) => setClassKey(e.target.value)}
        >
          {CLASSES.map(c => <option key={c.key} value={c.key}>{c.name}</option>)}
        </select>
      </div>
      
      <div style={{ background: '#1a1a1a', borderRadius: 8, overflow: 'hidden', minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={imgSrc} 
          onError={(e) => {
            if (imgSrc !== fallbackSrc) {
              setImgSrc(fallbackSrc);
            }
          }} 
          alt={`${raceKey} ${classKey}`} 
          style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
        />
      </div>
    </div>
  )
}
