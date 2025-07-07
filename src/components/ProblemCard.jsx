

import React from 'react';

const ProblemCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/50">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-t-3xl" />
    <Icon className="w-12 h-12 text-cyan-400 mb-6" />
    <h3 className="text-xl font-semibold text-cyan-400 mb-4">{title}</h3>
    <p className="text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default ProblemCard;