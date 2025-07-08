import HowItWorks from './pages/HowItWorks';
import NeedPage from './pages/NeedPage';
import DemoPage from './pages/DemoPage';
import { Link } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import React, { useState, useEffect } from 'react';
import TraceTutorLogo from './assets/ttlogo.png';
import { 
  Zap, 
  Plug, 
  Settings, 
  Monitor, 
  GraduationCap, 
  Users, 
  Wrench,
  CheckCircle,
  Star,
  BarChart3,
  TrendingUp,
  Mail,
  ExternalLink,
  School,
  BookOpen,
  Cog,
  Globe,
  ArrowLeft
} from 'lucide-react';

const TraceTutorWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('main'); // 'main', 'need', or 'demo'

  // Animated background circuit lines
  const CircuitLine = ({ delay = 0, top = '20%' }) => (
    <div 
      className={`absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full opacity-30`}
      style={{
        top,
        animation: `circuitFlow 8s linear infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );

  // Floating icons component
  const FloatingIcon = ({ icon: Icon, delay = 0, position }) => (
    <div 
      className={`absolute text-4xl opacity-10 animate-bounce`}
      style={{
        ...position,
        animationDelay: `${delay}s`,
        animationDuration: '6s'
      }}
    >
      <Icon />
    </div>
  );

  // Pricing card component
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

  // Problem card component
  const ProblemCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/50">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-t-3xl" />
      <Icon className="w-12 h-12 text-cyan-400 mb-6" />
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );

  // Testimonial component
  const Testimonial = ({ quote, source }) => (
    <div className="bg-white/5 backdrop-blur-lg border-l-4 border-cyan-400 rounded-lg p-6 mb-6">
      <p className="text-slate-300 italic mb-4">"{quote}"</p>
      <div className="text-slate-400 text-sm">— {source}</div>
    </div>
  );

  // NEW: Detailed Financial Chart Component
  const DetailedFinancialChart = () => {
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
          <h3 className="text-2xl font-bold text-white mb-2">Financial Performance Overview</h3>
          <p className="text-slate-400">Revenue, Profit, and Cash Flow Trends (2025-2027)</p>
        </div>

        <div className="relative flex justify-center">
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

  // Comparison table component
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

  useEffect(() => {
    // Add custom animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes circuitFlow {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      @keyframes titleGlow {
        0%, 100% { filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.3)); }
        50% { filter: drop-shadow(0 0 30px rgba(147, 51, 234, 0.5)); }
      }
      .title-glow {
        animation: titleGlow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      {currentPage === 'main' ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CircuitLine delay={0} top="20%" />
        <CircuitLine delay={2} top="40%" />
        <CircuitLine delay={4} top="60%" />
        <CircuitLine delay={6} top="80%" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-cyan-400/10 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <button
              onClick={() => setCurrentPage('main')}
              className="flex items-center space-x-2 group"
            >
              <img
                src={TraceTutorLogo}
                alt="TraceTutor Logo"
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                TraceTutor
              </span>
            </button>
            {['Home', 'Problem', 'Solution', 'Pricing', 'Financials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-green-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-400/10"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setCurrentPage('need')}
              className="text-slate-300 hover:text-green-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-400/10"
            >
              Need
            </button>
            <button
              onClick={() => setCurrentPage('demo')}
              className="text-slate-300 hover:text-green-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-400/10"
            >
              Demo
            </button>
            <button
              onClick={() => setCurrentPage('marketing')}
              className="text-slate-300 hover:text-green-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-400/10"
            >
              Marketing
            </button>
            <Link
              to="/how-it-works"
              className="whitespace-nowrap text-slate-300 hover:text-green-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-400/10"
            >
              How It Works
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
        {/* Floating Icons */}
        <FloatingIcon icon={Zap} delay={0} position={{ top: '20%', left: '10%' }} />
        <FloatingIcon icon={Plug} delay={2} position={{ top: '30%', right: '15%' }} />
        <FloatingIcon icon={Settings} delay={4} position={{ bottom: '30%', left: '20%' }} />
        <FloatingIcon icon={Monitor} delay={1} position={{ bottom: '20%', right: '10%' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-600 to-amber-500 bg-clip-text text-transparent title-glow">
            Master PCB Design with AI Powered Precision
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
            No more Guesswork, here is your personalized learning path.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30">
              Start Learning
            </button>
            <button className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-green-400 hover:text-slate-900 hover:transform hover:-translate-y-1">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-600/10 border border-red-500/20 rounded-3xl p-12 text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-6">
              The Current PCB Education System is Broken
            </h2>
            <p className="text-xl text-slate-400">
              Students and engineers waste countless hours navigating scattered tutorials. There's no clear path to mastering PCB design, just confusion and wasted time.
            </p>
          </div>
        </div>
      </section>

      {/* Market Need Section */}
      <section id="market" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Market Need & Target Audience
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            Why TraceTutor exists and who it's built for
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              icon={GraduationCap}
              title="Students & Beginners"
              description="Electrical Engineering and Computer Engineering students who want to gain hands on PCB skills beyond theory heavy university courses."
            />
            <ProblemCard
              icon={Users}
              title="Career Switchers"
              description="Professionals from adjacent tech fields who want to break into embedded systems or hardware design but feel overwhelmed by fragmented resources."
            />
            <ProblemCard
              icon={Wrench}
              title="Hobbyists & Makers"
              description="Passionate tinkerers and open source contributors looking for a guided, project based platform to turn ideas into hardware reality faster."
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-16">
            TraceTutor: Your Smart Path to PCB Mastery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProblemCard
              icon={TrendingUp}
              title="Personalized Learning Paths"
              description="Describe what you want to build, and our AI maps a custom learning journey tailored to your background and goals."
            />
            <ProblemCard
              icon={Monitor}
              title="Interactive Projects with Instant Feedback"
              description="Learn by building. Our smart platform gives real time tips and error detection as you work through real PCB tasks."
            />
            <ProblemCard
              icon={BarChart3}
              title="AI-Powered Design Reviews"
              description="Upload your schematic or layout and get AI driven reviews that mimic industry engineers spotting common issues."
            />
            <ProblemCard
              icon={Star}
              title="Industry-Ready Skills"
              description="We simulate professional workflows and standards. You won't just learn, you'll become job ready for real hardware teams."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            Choose a plan that fits your learning goals
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="0"
              period="/month"
              features={[
                'AI-made courses',
                'Community support',
                'PDFs, projects, tutorials',
                'Quizzes & certifications',
                'Ads included'
              ]}
              buttonText="Get Started"
            />
            <PricingCard
              title="Plus"
              price="8"
              period="/month"
              features={[
                'Everything in Basic',
                'Personalized AI courses',
                'Practice on mobile app',
                'Personalized drills',
                'AI job search engine',
                '1-month free trial'
              ]}
              buttonText="Most Popular"
              isFeatured={true}
            />
            <PricingCard
              title="Pro"
              price="12"
              period="/month"
              features={[
                'Everything in Plus',
                'Offline downloads',
                'Custom video generation',
                'EE specialty career tracking',
                'Resume/CV feedback'
              ]}
              buttonText="Go Pro"
            />
          </div>
        </div>
      </section>

      {/* Financials Section - UPDATED WITH NEW CHART */}
      <section id="financials" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Financial Forecast 2025-2027
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            Growth projections and key performance metrics
          </p>
          <DetailedFinancialChart />
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Why TraceTutor Beats the Alternatives
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            See how we outperform traditional learning platforms
          </p>
          <ComparisonTable />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-16">
            Industry Voices
          </h2>
          <Testimonial
            quote="Despite the importance of PCBs in virtually every electronic product released to market today, you'd be surprised at how little the university system has focused on fostering educational programs focusing on printed circuit design and manufacturing."
            source="Altium Blog"
          />
          <Testimonial
            quote="The demand for competent PCB designers is expected to increase in the coming decades as the current workforce retires."
            source="IPC"
          />
          <Testimonial
            quote="PCB design is often an afterthought in academia, leaving students unprepared for real-world hardware challenges."
            source="IEEE Spectrum"
          />
          <Testimonial
            quote="Most graduates don't know how to design for manufacturability — that's a skill they pick up painfully on the job."
            source="Reddit /r/EE"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Whether you're interested in collaborating, investing, or just have questions, we'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-cyan-400/20">
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Purva Mhatre</h4>
                <a href="mailto:mhatrepu@msu.edu" className="text-purple-400 hover:text-cyan-400 transition-colors">
                  mhatrepu@msu.edu
                </a>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-cyan-400/20">
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Sharvayu Chavan</h4>
                <a href="mailto:chavansh@msu.edu" className="text-purple-400 hover:text-cyan-400 transition-colors">
                  chavansh@msu.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 text-center py-8 mt-16 border-t border-cyan-400/10">
        <p className="text-slate-400">© 2025 TraceTutor. Empowering future engineers.</p>
      </footer>
    </div>
      ) : currentPage === 'demo' ? (
        <DemoPage />
      ) : currentPage === 'marketing' ? (
        <MarketingPage />
      ) : (
        <NeedPage setCurrentPage={setCurrentPage} />
      )}
    </>
  );
};

export default TraceTutorWebsite;