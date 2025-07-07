

import React from 'react';

const CircuitLine = ({ delay = 0, top = '20%' }) => (
  <div 
    className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full opacity-30"
    style={{
      top,
      animation: `circuitFlow 8s linear infinite`,
      animationDelay: `${delay}s`
    }}
  />
);

export default CircuitLine;