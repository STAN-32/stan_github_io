import React from 'react';
import './VisitorMap.css';

const VisitorMap = () => {
  return (
    <div className="visitor-map">
      {/* ClustrMaps rebranded to MapMyVisitors; the old clustrmaps.com domain no longer resolves.
          Use the static map.png endpoint with the static-map data hash (the globe.js hash is rejected here). */}
      <a href="https://mapmyvisitors.com/web/1c1sl" title="Visit tracker">
        <img
          src="https://mapmyvisitors.com/map.png?cl=ffffff&w=500&t=n&d=VeqnpzLlKW-Ot5DN3F-Amu4pFn2pWHIYPqjUluz5gTI"
          alt="Visitor Map"
        />
      </a>
    </div>
  );
};

export default VisitorMap;
