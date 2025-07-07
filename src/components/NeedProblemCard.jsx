

import React from 'react';
import { ExternalLink } from 'lucide-react';

const NeedProblemCard = ({ icon: Icon, title, description, link }) => (
  <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl shadow-lg text-slate-800">
    <Icon className="w-12 h-12 text-purple-600 mb-6" />
    <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center ml-1"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </p>
  </div>
);

export default NeedProblemCard;