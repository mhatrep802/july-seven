

import React from 'react';

const Testimonial = ({ quote, source }) => (
  <div className="bg-white/5 backdrop-blur-lg border-l-4 border-cyan-400 rounded-lg p-6 mb-6">
    <p className="text-slate-300 italic mb-4">"{quote}"</p>
    <div className="text-slate-400 text-sm">— {source}</div>
  </div>
);

export default Testimonial;