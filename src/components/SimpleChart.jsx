import React from 'react';

const DetailedLineChart = () => {
  const data = [
    { year: '2025', revenue: 75, profit: -183, cash: -183 },
    { year: '2026', revenue: 9223, profit: 5140, cash: 7032 },
    { year: '2027', revenue: 10503, profit: 5907, cash: 4418 }
  ];

  // Calculate chart dimensions and scales
  const chartWidth = 600;
  const chartHeight = 300;
  const padding = { top: 40, right: 60, bottom: 60, left: 80 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

  // Find min and max values for proper scaling
  const allValues = data.flatMap(d => [d.revenue, d.profit, d.cash]);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const valueRange = maxValue - minValue;
  
  // Add padding to the range for better visualization
  const yMin = minValue - valueRange * 0.1;
  const yMax = maxValue + valueRange * 0.1;
  const yRange = yMax - yMin;

  // Scale functions
  const xScale = (index) => (index / (data.length - 1)) * plotWidth;
  const yScale = (value) => plotHeight - ((value - yMin) / yRange) * plotHeight;

  // Generate y-axis ticks
  const yTicks = [];
  const tickCount = 8;
  for (let i = 0; i <= tickCount; i++) {
    const value = yMin + (yRange * i) / tickCount;
    yTicks.push(value);
  }

  // Create path strings for each line
  const createPath = (field) => {
    return data.map((d, i) => 
      `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d[field])}`
    ).join(' ');
  };

  const revenuePath = createPath('revenue');
  const profitPath = createPath('profit');
  const cashPath = createPath('cash');

  // Format currency values
  const formatCurrency = (value) => {
    if (Math.abs(value) >= 1000) {
      return `$${(value / 1000).toFixed(1)}k`;
    }
    return `$${value.toFixed(0)}`;
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Financial Performance Overview</h2>
        <p className="text-slate-400">Revenue, Profit, and Cash Flow Trends (2025-2027)</p>
      </div>

      <div className="relative">
        <svg width={chartWidth} height={chartHeight} className="overflow-visible">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="50" height="30" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 30" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.9"/>
            </linearGradient>
            <linearGradient id="profitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9"/>
            </linearGradient>
            <linearGradient id="cashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9"/>
            </linearGradient>
          </defs>

          {/* Grid background */}
          <rect 
            x={padding.left} 
            y={padding.top} 
            width={plotWidth} 
            height={plotHeight} 
            fill="url(#grid)"
          />

          {/* Y-axis */}
          <line 
            x1={padding.left} 
            y1={padding.top} 
            x2={padding.left} 
            y2={padding.top + plotHeight} 
            stroke="#64748b" 
            strokeWidth="2"
          />

          {/* X-axis */}
          <line 
            x1={padding.left} 
            y1={padding.top + plotHeight} 
            x2={padding.left + plotWidth} 
            y2={padding.top + plotHeight} 
            stroke="#64748b" 
            strokeWidth="2"
          />

          {/* Y-axis ticks and labels */}
          {yTicks.map((tick, i) => (
            <g key={i}>
              <line 
                x1={padding.left - 5} 
                y1={padding.top + yScale(tick)} 
                x2={padding.left + plotWidth} 
                y2={padding.top + yScale(tick)} 
                stroke="#334155" 
                strokeWidth="1" 
                strokeDasharray="2,2"
                opacity="0.5"
              />
              <text 
                x={padding.left - 10} 
                y={padding.top + yScale(tick) + 4} 
                textAnchor="end" 
                className="text-xs fill-slate-400"
              >
                {formatCurrency(tick)}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((d, i) => (
            <g key={i}>
              <line 
                x1={padding.left + xScale(i)} 
                y1={padding.top + plotHeight} 
                x2={padding.left + xScale(i)} 
                y2={padding.top + plotHeight + 5} 
                stroke="#64748b" 
                strokeWidth="1"
              />
              <text 
                x={padding.left + xScale(i)} 
                y={padding.top + plotHeight + 20} 
                textAnchor="middle" 
                className="text-sm fill-slate-300 font-medium"
              >
                {d.year}
              </text>
            </g>
          ))}

          {/* Zero line if needed */}
          {yMin < 0 && yMax > 0 && (
            <line 
              x1={padding.left} 
              y1={padding.top + yScale(0)} 
              x2={padding.left + plotWidth} 
              y2={padding.top + yScale(0)} 
              stroke="#ef4444" 
              strokeWidth="1" 
              strokeDasharray="4,4"
              opacity="0.7"
            />
          )}

          {/* Revenue line */}
          <path 
            d={revenuePath} 
            fill="none" 
            stroke="url(#revenueGradient)" 
            strokeWidth="3" 
            transform={`translate(${padding.left}, ${padding.top})`}
            className="drop-shadow-lg"
          />

          {/* Profit line */}
          <path 
            d={profitPath} 
            fill="none" 
            stroke="url(#profitGradient)" 
            strokeWidth="3" 
            transform={`translate(${padding.left}, ${padding.top})`}
            className="drop-shadow-lg"
          />

          {/* Cash flow line */}
          <path 
            d={cashPath} 
            fill="none" 
            stroke="url(#cashGradient)" 
            strokeWidth="3" 
            transform={`translate(${padding.left}, ${padding.top})`}
            className="drop-shadow-lg"
          />

          {/* Data points */}
          {data.map((d, i) => (
            <g key={i}>
              {/* Revenue point */}
              <circle 
                cx={padding.left + xScale(i)} 
                cy={padding.top + yScale(d.revenue)} 
                r="6" 
                fill="#10b981" 
                stroke="#ffffff" 
                strokeWidth="2"
                className="drop-shadow-md hover:r-8 transition-all cursor-pointer"
              />
              {/* Profit point */}
              <circle 
                cx={padding.left + xScale(i)} 
                cy={padding.top + yScale(d.profit)} 
                r="6" 
                fill="#8b5cf6" 
                stroke="#ffffff" 
                strokeWidth="2"
                className="drop-shadow-md hover:r-8 transition-all cursor-pointer"
              />
              {/* Cash flow point */}
              <circle 
                cx={padding.left + xScale(i)} 
                cy={padding.top + yScale(d.cash)} 
                r="6" 
                fill="#f59e0b" 
                stroke="#ffffff" 
                strokeWidth="2"
                className="drop-shadow-md hover:r-8 transition-all cursor-pointer"
              />
            </g>
          ))}

          {/* Axis labels */}
          <text 
            x={padding.left + plotWidth / 2} 
            y={chartHeight - 10} 
            textAnchor="middle" 
            className="text-sm fill-slate-300 font-medium"
          >
            Year
          </text>
          <text 
            x={20} 
            y={padding.top + plotHeight / 2} 
            textAnchor="middle" 
            className="text-sm fill-slate-300 font-medium"
            transform={`rotate(-90, 20, ${padding.top + plotHeight / 2})`}
          >
            Amount (USD)
          </text>
        </svg>
      </div>

      {/* Enhanced Legend */}
      <div className="flex justify-center space-x-8 mt-6">
        <div className="flex items-center space-x-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-md" />
          <span className="text-sm text-slate-300 font-medium">Revenue</span>
        </div>
        <div className="flex items-center space-x-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
          <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full shadow-md" />
          <span className="text-sm text-slate-300 font-medium">Net Profit</span>
        </div>
        <div className="flex items-center space-x-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
          <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full shadow-md" />
          <span className="text-sm text-slate-300 font-medium">Cash Flow</span>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{formatCurrency(data[data.length - 1].revenue)}</div>
          <div className="text-xs text-slate-400 mt-1">2027 Revenue</div>
        </div>
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{formatCurrency(data[data.length - 1].profit)}</div>
          <div className="text-xs text-slate-400 mt-1">2027 Profit</div>
        </div>
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">{formatCurrency(data[data.length - 1].cash)}</div>
          <div className="text-xs text-slate-400 mt-1">2027 Cash Flow</div>
        </div>
      </div>
    </div>
  );
};

export default DetailedLineChart;