

import React from 'react';

const ComparisonTable = () => {
  const platforms = [
    { name: 'TraceTutor', scores: [5, 5, 5, 4, 5, 5, 5] },
    { name: 'Coursera', scores: [3, 2, 2, 4, 3, 1, 1] },
    { name: 'edX', scores: [3, 2, 2, 4, 3, 1, 2] },
    { name: 'Udemy', scores: [3, 3, 2, 4, 4, 3, 2] },
    { name: 'Altium Education', scores: [4, 3, 3, 4, 3, 4, 3] },
    { name: 'YouTube', scores: [3, 2, 1, 5, 4, 2, 2] }
  ];

  const headers = ['Content Quality', 'Structure', 'Certificates', 'Cost', 'Flexibility', 'Hands-on Practice', 'Community'];

  const getColorClass = (score) => {
    const colors = [
      'bg-yellow-100 text-yellow-800',
      'bg-lime-200 text-lime-800', 
      'bg-teal-300 text-teal-800',
      'bg-green-500 text-white',
      'bg-green-700 text-white'
    ];
    return colors[score - 1] || colors[0];
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-cyan-400/10">
              <th className="p-4 text-left text-cyan-400 font-semibold">Platform</th>
              {headers.map((header, index) => (
                <th key={index} className="p-4 text-center text-cyan-400 font-semibold text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform, platformIndex) => (
              <tr key={platformIndex} className="border-b border-cyan-400/10">
                <td className="p-4 font-medium text-slate-200">{platform.name}</td>
                {platform.scores.map((score, scoreIndex) => (
                  <td key={scoreIndex} className="p-4 text-center">
                    <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getColorClass(score)}`}>
                      {score}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;