import React, { useEffect } from 'react';
import './VisitorMap.css';

const VisitorMap = () => {
  useEffect(() => {
    const container = document.getElementById('clustrmaps-widget');
    if (!container) return;

    container.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'clstr_globe';
    script.src =
      'https://clustrmaps.com/globe.js?d=1-apcJaW_PAd_0Sw4pQw2NOQ05EYEunPmJO7dTTtkn0';
    container.appendChild(script);
  }, []);

  return (
    <div className="visitor-map">
      <div id="clustrmaps-widget" />
    </div>
  );
};

export default VisitorMap;
