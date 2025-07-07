

import React from 'react';

const FloatingIcon = ({ icon: Icon, delay = 0, position }) => (
  <div 
    className="absolute text-4xl opacity-10 animate-bounce"
    style={{
      ...position,
      animationDelay: `${delay}s`,
      animationDuration: '6s'
    }}
  >
    <Icon />
  </div>
);

export default FloatingIcon;