

import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingCard = ({ title, price, period, features, buttonText, isFeatured = false }) => (
  <div className={`
    bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 text-center 
    transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20
    ${isFeatured ? 'border-purple-500 scale-105' : ''}
  `}>
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-t-3xl" />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="text-4xl font-bold text-cyan-400 mb-2">
      ${price}<span className="text-base text-slate-400">{period}</span>
    </div>
    <ul className="text-left space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <span className="text-slate-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`
      w-full py-3 px-6 rounded-full font-semibold transition-all duration-300
      ${isFeatured 
        ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25' 
        : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
      }
    `}>
      {buttonText}
    </button>
  </div>
);

export default PricingCard;