

import React from 'react';

const SimpleChart = () => {
  const data = [
    { year: '2025', revenue: 75, profit: -183, cash: -183 },
    { year: '2026', revenue: 9223, profit: 5140, cash: 7032 },
    { year: '2027', revenue: 10503, profit: 5907, cash: 4418 }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 h-96">
      <div className="flex items-end justify-around h-full space-x-4">
        {data.map((entry, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex space-x-1 items-end h-40">
              <div 
                className="bg-green-400 w-6 rounded-t"
                style={{ height: `${Math.max(entry.revenue / 100, 5)}%` }}
                title={`Revenue: $${entry.revenue}k`}
              />
              <div 
                className="bg-purple-500 w-6 rounded-t"
                style={{ height: `${Math.max(entry.profit / 100, 5)}%` }}
                title={`Profit: $${entry.profit}k`}
              />
              <div 
                className="bg-amber-500 w-6 rounded-t"
                style={{ height: `${Math.max(entry.cash / 100, 5)}%` }}
                title={`Cash Flow: $${entry.cash}k`}
              />
            </div>
            <span className="text-slate-400 text-sm">{entry.year}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full" />
          <span className="text-sm text-slate-400">Revenue</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
          <span className="text-sm text-slate-400">Net Profit</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-amber-500 rounded-full" />
          <span className="text-sm text-slate-400">Cash Flow</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleChart;