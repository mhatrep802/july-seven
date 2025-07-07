

import React from 'react';

const QuoteButton = ({ quote, link, type = 'reddit' }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      block p-6 rounded-2xl text-white font-medium leading-relaxed
      transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl
      shadow-lg
      ${type === 'reddit' 
        ? 'bg-gradient-to-br from-orange-500 to-red-600 hover:shadow-orange-500/30' 
        : 'bg-gradient-to-br from-blue-600 to-blue-800 hover:shadow-blue-500/30'
      }
    `}
  >
    "{quote}"
  </a>
);

export default QuoteButton;