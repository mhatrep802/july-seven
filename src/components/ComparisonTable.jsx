import React, { useState, useEffect } from 'react';

const ComparisonTable = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredCell, setHoveredCell] = useState(null);

  const platforms = [
    { name: 'TraceTutor', scores: [5, 5, 4, 5, 5, 4], isHighlight: true },
    { name: 'Coursera', scores: [2, 2, 4, 3, 1, 1], isHighlight: false },
    { name: 'edX', scores: [2, 2, 4, 3, 1, 2], isHighlight: false },
    { name: 'Udemy', scores: [3, 2, 4, 4, 3, 2], isHighlight: false },
    { name: 'Altium Education', scores: [3, 3, 4, 3, 4, 3], isHighlight: false },
    { name: 'YouTube', scores: [2, 1, 5, 4, 2, 2], isHighlight: false }
  ];

  const headers = ['Structure', 'Certificates', 'Cost', 'Flexibility', 'Practice', 'Community'];

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 300);
    const timer2 = setTimeout(() => setAnimationPhase(2), 800);
    const timer3 = setTimeout(() => setAnimationPhase(3), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const getColorClass = (score) => {
    const colors = [
      'bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg shadow-red-500/25',
      'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/25',
      'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg shadow-yellow-500/25',
      'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/25',
      'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25'
    ];
    return colors[score - 1] || colors[0];
  };

  const getHoverColorClass = (score) => {
    const colors = [
      'hover:from-red-300 hover:to-red-500 hover:shadow-xl hover:shadow-red-500/40',
      'hover:from-orange-300 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/40',
      'hover:from-yellow-300 hover:to-yellow-500 hover:shadow-xl hover:shadow-yellow-500/40',
      'hover:from-green-300 hover:to-green-500 hover:shadow-xl hover:shadow-green-500/40',
      'hover:from-emerald-300 hover:to-emerald-500 hover:shadow-xl hover:shadow-emerald-500/40'
    ];
    return colors[score - 1] || colors[0];
  };

  const ScoreCircle = ({ score, delay, platformIndex, scoreIndex }) => (
    <div
      className={`
        inline-flex w-12 h-12 rounded-full items-center justify-center text-sm font-bold
        transform transition-all duration-700 ease-out cursor-pointer
        ${getColorClass(score)} ${getHoverColorClass(score)}
        ${animationPhase >= 3 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-75'}
        ${hoveredCell === `${platformIndex}-${scoreIndex}` ? 'scale-110 rotate-12' : ''}
        hover:scale-110 hover:-translate-y-1 hover:rotate-6
      `}
      style={{
        transitionDelay: `${delay}ms`,
        animation: animationPhase >= 3 ? `pulse-glow 2s ease-in-out ${delay}ms infinite alternate` : 'none'
      }}
      onMouseEnter={() => setHoveredCell(`${platformIndex}-${scoreIndex}`)}
      onMouseLeave={() => setHoveredCell(null)}
    >
      {score}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <style jsx>{`
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      {/* Animated Header */}
      <div className="text-center mb-12">
        <h1 
          className={`
            text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
            bg-clip-text text-transparent mb-4 transform transition-all duration-1000
            ${animationPhase >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}
          `}
        >
          Why TraceTutor Beats the Alternatives
        </h1>
        <p 
          className={`
            text-xl text-slate-400 transform transition-all duration-1000 delay-300
            ${animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
        >
          See how we outperform traditional learning platforms
        </p>
      </div>

      {/* Main Table Container */}
      <div 
        className={`
          relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl 
          rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10
          transform transition-all duration-1000 delay-500
          ${animationPhase >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
        `}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl floating" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/20">
                <th className="p-4 text-center text-cyan-400 font-semibold text-sm truncate">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Platform</span>
                  </div>
                </th>
                {headers.map((header, index) => (
                  <th 
                    key={index} 
                    className="p-4 text-center text-cyan-400 font-semibold text-sm truncate"
                  >
                    <div className="hover:scale-105 transition-transform duration-300">
                      {header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform, platformIndex) => (
                <tr 
                  key={platformIndex} 
                  className={`
                    border-b border-slate-700/50 hover:bg-slate-700/20 
                    transition-all duration-500 group
                    ${platform.isHighlight ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5' : ''}
                  `}
                >
                  <td className="p-4 text-center">
                    <div className={`
                      font-bold text-lg transform transition-all duration-700
                      ${animationPhase >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                      ${platform.isHighlight ? 'text-cyan-400' : 'text-slate-300'}
                    `} style={{transitionDelay: `${platformIndex * 150}ms`}}>
                      <div className="flex items-center space-x-3">
                        {platform.isHighlight && (
                          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                        )}
                        <span className="hover:scale-105 transition-transform duration-300 truncate">
                          {platform.name}
                        </span>
                        {platform.isHighlight && (
                          <div className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs text-white font-semibold shimmer">
                            BEST
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  {platform.scores.map((score, scoreIndex) => (
                    <td key={scoreIndex} className="p-4 text-center">
                      <ScoreCircle 
                        score={score} 
                        delay={platformIndex * 100 + scoreIndex * 50} 
                        platformIndex={platformIndex}
                        scoreIndex={scoreIndex}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Animated Legend */}
        <div 
          className={`
            mt-8 px-6 pb-6 text-sm text-slate-400 transform transition-all duration-1000 delay-1000
            ${animationPhase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}
        >
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Legend:</span>
            </div>
            <div className="flex space-x-4">
              {[
                { score: 5, label: 'Excellent' },
                { score: 4, label: 'Very Good' },
                { score: 3, label: 'Fair' },
                { score: 2, label: 'Poor' },
                { score: 1, label: 'Very Poor' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${getColorClass(item.score)}`}>
                    {item.score}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25 floating">
          <span className="text-white font-bold text-2xl">↗</span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;