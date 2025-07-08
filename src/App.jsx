import React, { useState, useEffect } from 'react';
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
  ArrowLeft,
  Home,
  DollarSign,
  Menu,
  X,
  User,
  ChevronDown,
  Bell,
  Search,
  LogOut,
  UserCircle,
  HelpCircle,
  AlertTriangle,
  Clock,
  Building,
  Briefcase,
  Quote,
  Target,
  Play,
  Award,
  Brain,
  Lightbulb,
  Code,
  Cpu,
  Layers,
  MessageCircle,
  Shield,
  Rocket,
  Database,
  Activity,
  FileText,
  Download,
  Upload,
  Calendar,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Facebook,
  Instagram
} from 'lucide-react';

const TraceTutorWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('main');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Enhanced Navigation Component
  const EnhancedNavigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10' 
        : 'bg-slate-900/90 backdrop-blur-lg border-b border-cyan-400/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage('main')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              TraceTutor
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '#home', icon: Home },
              { name: 'Problem', href: '#problem', icon: AlertTriangle },
              { name: 'Solution', href: '#solution', icon: Zap },
              { name: 'Features', href: '#features', icon: Star },
              { name: 'Pricing', href: '#pricing', icon: DollarSign },
              { name: 'Financials', href: '#financials', icon: TrendingUp },
              { name: 'Comparison', href: '#comparison', icon: BarChart3 },
              { name: 'About', href: '#about', icon: Users },
              { name: 'Contact', href: '#contact', icon: Mail }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-400/10 group text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.name.toLowerCase());
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button className="hidden lg:block p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Demo and Get Started Buttons */}
            <div className="flex items-center space-x-2">
              <a
                href="https://julsix.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 font-medium text-sm"
              >
                Demo
              </a>
              <button className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 font-medium text-sm">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-400/10 bg-slate-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', href: '#home', icon: Home },
                { name: 'Problem', href: '#problem', icon: AlertTriangle },
                { name: 'Solution', href: '#solution', icon: Zap },
                { name: 'Features', href: '#features', icon: Star },
                { name: 'Pricing', href: '#pricing', icon: DollarSign },
                { name: 'Financials', href: '#financials', icon: TrendingUp },
                { name: 'Comparison', href: '#comparison', icon: BarChart3 },
                { name: 'About', href: '#about', icon: Users },
                { name: 'Contact', href: '#contact', icon: Mail }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.name.toLowerCase());
                    setIsMobileMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              <div className="pt-4 space-y-2">
                <a
                  href="https://julsix.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-medium text-center block"
                >
                  Demo
                </a>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

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

  // Enhanced Feature Card
  const FeatureCard = ({ icon: Icon, title, description, features, color = "cyan" }) => (
    <div className="group bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-t-3xl" />
      <div className={`w-16 h-16 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-slate-400">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Pricing card component
  const PricingCard = ({ title, price, period, features, buttonText, isFeatured = false, badge = null }) => (
    <div className={`
      relative bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 text-center 
      transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20
      ${isFeatured ? 'border-purple-500 scale-105' : ''}
    `}>
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            {badge}
          </span>
        </div>
      )}
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
          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
        }
      `}>
        {buttonText}
      </button>
    </div>
  );

  // Team member card
  const TeamMemberCard = ({ name, role, email, bio, skills }) => (
    <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20">
      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <User className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-cyan-400 font-medium mb-4">{role}</p>
      <p className="text-slate-300 mb-4 leading-relaxed">{bio}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
      <a href={`mailto:${email}`} className="text-purple-400 hover:text-cyan-400 transition-colors">
        {email}
      </a>
    </div>
  );

  // Testimonial component
  const TestimonialCard = ({ quote, author, role, company, rating = 5 }) => (
    <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-slate-300 italic mb-4 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-white font-medium">{author}</p>
          <p className="text-slate-400 text-sm">{role} at {company}</p>
        </div>
      </div>
    </div>
  );

  // Animated Comparison Table Component
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

    const headers = ['Structure', 'Certificates', 'Cost', 'Flexibility', 'Hands-on Practice', 'Community'];

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
          transitionDelay: `${delay}ms`
        }}
        onMouseEnter={() => setHoveredCell(`${platformIndex}-${scoreIndex}`)}
        onMouseLeave={() => setHoveredCell(null)}
      >
        {score}
      </div>
    );

    return (
      <div className="w-full">
        <style jsx>{`
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
        `}</style>
        
        <div className="text-center mb-12">
          <h2 
            className={`
              text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
              bg-clip-text text-transparent mb-4 transform transition-all duration-1000
              ${animationPhase >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}
            `}
          >
            Why TraceTutor Beats the Alternatives
          </h2>
          <p 
            className={`
              text-xl text-slate-400 transform transition-all duration-1000 delay-300
              ${animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            See how we outperform traditional learning platforms
          </p>
        </div>

        <div 
          className={`
            relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl 
            rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10
            transform transition-all duration-1000 delay-500
            ${animationPhase >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
          `}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/20">
                  <th className="p-6 text-left text-cyan-400 font-bold text-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span>Platform</span>
                    </div>
                  </th>
                  {headers.map((header, index) => (
                    <th 
                      key={index} 
                      className={`
                        p-6 text-center text-cyan-400 font-bold text-sm
                        transform transition-all duration-700
                        ${animationPhase >= 2 ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
                      `}
                      style={{transitionDelay: `${index * 100}ms`}}
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
                    <td className="p-6">
                      <div 
                        className={`
                          font-bold text-lg transform transition-all duration-700
                          ${animationPhase >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                          ${platform.isHighlight ? 'text-cyan-400' : 'text-slate-300'}
                        `} 
                        style={{transitionDelay: `${platformIndex * 150}ms`}}
                      >
                        <div className="flex items-center space-x-3">
                          {platform.isHighlight && (
                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                          )}
                          <span className="hover:scale-105 transition-transform duration-300">
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
                      <td key={scoreIndex} className="p-6 text-center">
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
      </div>
    );
  };

  // Demo Page Component
  const DemoPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <EnhancedNavigation />
      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Experience TraceTutor
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See how our AI-powered platform transforms PCB design learning
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 mb-16">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-8">
              <button className="group flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Play Interactive Demo</span>
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Learning</h3>
                <p className="text-slate-400">Personalized curriculum adapts to your skill level</p>
              </div>
              <div className="text-center">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Hands-On Practice</h3>
                <p className="text-slate-400">Real PCB design projects with instant feedback</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Industry Recognition</h3>
                <p className="text-slate-400">Earn certificates valued by employers</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('main')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );

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
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .title-glow {
        animation: titleGlow 3s ease-in-out infinite;
      }
      .float-animation {
        animation: float 6s ease-in-out infinite;
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

          {/* Enhanced Navigation */}
          <EnhancedNavigation />

          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
            {/* Floating Icons */}
            <FloatingIcon icon={Zap} delay={0} position={{ top: '20%', left: '10%' }} />
            <FloatingIcon icon={Plug} delay={2} position={{ top: '30%', right: '15%' }} />
            <FloatingIcon icon={Settings} delay={4} position={{ bottom: '30%', left: '20%' }} />
            <FloatingIcon icon={Monitor} delay={1} position={{ bottom: '20%', right: '10%' }} />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/20 rounded-full px-6 py-3 mb-8">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered PCB Learning Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-600 to-amber-500 bg-clip-text text-transparent title-glow">
                Master PCB Design with AI-Powered Precision
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light max-w-3xl mx-auto">
                No more guesswork. Get your personalized learning path, hands-on projects, and industry-ready skills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30">
                  Start Learning Free
                </button>
                <a
                  href="https://julsix.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>
          </section>

          {/* Problem Section - Crisis Style */}
          <section id="problem" className="py-20 px-6 relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Skills Crisis</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                    The PCB Skills Crisis
                  </span>
                  <br />
                  <span className="text-white">Is Real</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Universities fail to teach PCB design. Industries struggle to find qualified engineers. 
                  <span className="text-red-400 font-bold"> Students are left behind.</span>
                </p>
              </div>

              {/* Crisis Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <Users className="w-8 h-8 mx-auto mb-4 text-red-400" />
                  <div className="text-3xl font-bold text-red-400 mb-2">10,000+</div>
                  <p className="text-slate-300 text-sm">Unfilled PCB Jobs</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <Clock className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                  <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
                  <p className="text-slate-300 text-sm">Weeks Training in University</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <TrendingUp className="w-8 h-8 mx-auto mb-4 text-green-400" />
                  <div className="text-3xl font-bold text-green-400 mb-2">$16B+</div>
                  <p className="text-slate-300 text-sm">Market Size by 2028</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <Building className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                  <div className="text-3xl font-bold text-yellow-400 mb-2">75%</div>
                  <p className="text-slate-300 text-sm">Companies Struggling to Hire</p>
                </div>
              </div>

              {/* Student Testimonials */}
              <div className="bg-gradient-to-r from-red-900/10 to-orange-900/10 rounded-3xl p-8 mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
                    <Quote className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Student Voices</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    "Help! I Need to Learn PCB Design"
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-lg border border-red-400/30 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <Quote className="w-8 h-8 mb-4 text-red-400" />
                    <blockquote className="text-slate-200 mb-4 italic leading-relaxed">
                      "Find out 2 weeks before the boards are needed that the person has no idea how to design a PCB"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-400 font-medium">Reddit</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg border border-red-400/30 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <Quote className="w-8 h-8 mb-4 text-red-400" />
                    <blockquote className="text-slate-200 mb-4 italic leading-relaxed">
                      "Spend 48 sleepless hours learning how to design a PCB to get the boards back just in time"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-400 font-medium">Reddit</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg border border-red-400/30 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <Quote className="w-8 h-8 mb-4 text-red-400" />
                    <blockquote className="text-slate-200 mb-4 italic leading-relaxed">
                      "My university's reasoning for not teaching PCB design was that it was something we could learn on our own"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-400 font-medium">Reddit</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-6">
                  <Target className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold text-sm uppercase tracking-wide">The Solution</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  TraceTutor Changes Everything
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Interactive, hands-on PCB design training that bridges the gap between theory and practice. 
                  Students learn by doing, with instant feedback and real-world projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <FeatureCard
                  icon={Brain}
                  title="AI-Powered Personalization"
                  description="Our intelligent system adapts to your learning style, pace, and goals, creating a unique path tailored just for you."
                  features={[
                    "Personalized curriculum based on your background",
                    "Real-time difficulty adjustment",
                    "Smart progress tracking",
                    "Adaptive feedback system"
                  ]}
                  color="cyan"
                />
                <FeatureCard
                  icon={Code}
                  title="Hands-On Project Learning"
                  description="Learn by building real PCB projects from simple circuits to complex embedded systems."
                  features={[
                    "Interactive PCB design simulator",
                    "Real-world project challenges",
                    "Instant error detection",
                    "Industry-standard tools"
                  ]}
                  color="purple"
                />
                <FeatureCard
                  icon={Shield}
                  title="Industry-Ready Skills"
                  description="Master the exact skills and workflows used by professional PCB designers in top companies."
                  features={[
                    "Professional design workflows",
                    "Industry best practices",
                    "Certification programs",
                    "Job placement assistance"
                  ]}
                  color="green"
                />
                <FeatureCard
                  icon={Users}
                  title="Community & Mentorship"
                  description="Connect with peers, get help from experts, and build your professional network."
                  features={[
                    "Active student community",
                    "Expert mentor support",
                    "Peer code reviews",
                    "Industry networking events"
                  ]}
                  color="yellow"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-6 relative z-10 bg-gradient-to-r from-cyan-900/10 to-purple-900/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Powerful Features for Modern Learning
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Everything you need to go from beginner to professional PCB designer
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Smart Tutorials</h3>
                  <p className="text-slate-400">Interactive lessons that adapt to your learning speed and style</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">PCB Simulator</h3>
                  <p className="text-slate-400">Practice on realistic PCB design tools without expensive software</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Real-Time Feedback</h3>
                  <p className="text-slate-400">Get instant suggestions and corrections as you design</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Progress Tracking</h3>
                  <p className="text-slate-400">Monitor your learning journey with detailed analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                  <p className="text-slate-400">Earn industry-recognized certificates for your achievements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                  <p className="text-slate-400">Get help whenever you need it from our expert team</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Choose Your Learning Path
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Start free and upgrade as you advance your skills
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <PricingCard
                  title="Basic"
                  price="0"
                  period="/month"
                  features={[
                    'AI-generated courses tailored to skill level',
                    'Community support & leaderboards', 
                    'Learning resources (PDFs, slides, projects)',
                    'All courses & quizzes with instant feedback',
                    'Standard playlist generator',
                    'Certifications for completed courses',
                    'Advertisements included'
                  ]}
                  buttonText="Start Free"
                />
                <PricingCard
                  title="Plus"
                  price="8"
                  period="/month"
                  features={[
                    'Everything in Basic',
                    'Super personalized AI playlist generator',
                    'Practice on mobile app',
                    'Personalized practice drills',
                    'EE AI-powered job search engine',
                    'Ad-free experience',
                    '1-month free trial'
                  ]}
                  buttonText="Go Professional"
                  isFeatured={true}
                  badge="Most Popular"
                />
                <PricingCard
                  title="Pro"
                  price="12"
                  period="/month"
                  features={[
                    'Everything in Plus',
                    'Offline downloading',
                    'Custom video generation',
                    'EE specialty career development',
                    'CV/Resume feedback & optimization',
                    'Advanced career tracking',
                    'Priority support'
                  ]}
                  buttonText="Contact Sales"
                />
              </div>

              <div className="text-center mt-12">
                <p className="text-slate-400 mb-4">All plans include a 30-day money-back guarantee</p>
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Cancel anytime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">No setup fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Performance Section */}
          <section id="financials" className="py-20 px-6 relative z-10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Financial Forecast 2025-2027
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Growth projections and key performance metrics
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 border border-cyan-400/20 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Financial Performance Overview</h3>
                  <p className="text-slate-400">Revenue, Profit, and Cash Flow Trends (2025-2027)</p>
                </div>

                {/* Chart Container */}
                <div className="relative flex justify-center mb-8">
                  <svg width="700" height="400" className="overflow-visible">
                    <defs>
                      {/* Gradients for lines */}
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
                    <g className="opacity-20">
                      {Array.from({length: 8}).map((_, i) => (
                        <line key={i} x1="100" y1={50 + i * 40} x2="600" y2={50 + i * 40} stroke="#64748b" strokeWidth="1" strokeDasharray="2,2"/>
                      ))}
                      {Array.from({length: 3}).map((_, i) => (
                        <line key={i} x1={150 + i * 200} y1="50" x2={150 + i * 200} y2="330" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2"/>
                      ))}
                    </g>

                    {/* Y-axis */}
                    <line x1="100" y1="50" x2="100" y2="330" stroke="#64748b" strokeWidth="2"/>
                    
                    {/* X-axis */}
                    <line x1="100" y1="330" x2="600" y2="330" stroke="#64748b" strokeWidth="2"/>

                    {/* Y-axis labels */}
                    <text x="90" y="55" textAnchor="end" className="text-xs fill-slate-400">$11.6k</text>
                    <text x="90" y="95" textAnchor="end" className="text-xs fill-slate-400">$10.0k</text>
                    <text x="90" y="135" textAnchor="end" className="text-xs fill-slate-400">$8.4k</text>
                    <text x="90" y="175" textAnchor="end" className="text-xs fill-slate-400">$6.8k</text>
                    <text x="90" y="215" textAnchor="end" className="text-xs fill-slate-400">$5.2k</text>
                    <text x="90" y="255" textAnchor="end" className="text-xs fill-slate-400">$3.6k</text>
                    <text x="90" y="295" textAnchor="end" className="text-xs fill-slate-400">$2.0k</text>
                    <text x="90" y="335" textAnchor="end" className="text-xs fill-slate-400">$351</text>

                    {/* X-axis labels */}
                    <text x="150" y="350" textAnchor="middle" className="text-sm fill-slate-300 font-medium">2025</text>
                    <text x="350" y="350" textAnchor="middle" className="text-sm fill-slate-300 font-medium">2026</text>
                    <text x="550" y="350" textAnchor="middle" className="text-sm fill-slate-300 font-medium">2027</text>

                    {/* Revenue line (green) */}
                    <path d="M 150 320 L 350 130 L 550 80" fill="none" stroke="url(#revenueGradient)" strokeWidth="4" className="drop-shadow-lg"/>
                    
                    {/* Net Profit line (purple) */}
                    <path d="M 150 320 L 350 175 L 550 150" fill="none" stroke="url(#profitGradient)" strokeWidth="4" className="drop-shadow-lg"/>
                    
                    {/* Cash Flow line (orange) */}
                    <path d="M 150 320 L 350 155 L 550 185" fill="none" stroke="url(#cashGradient)" strokeWidth="4" className="drop-shadow-lg"/>

                    {/* Data points */}
                    {/* 2025 points */}
                    <circle cx="150" cy="320" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    <circle cx="150" cy="320" r="8" fill="#8b5cf6" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    <circle cx="150" cy="320" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    
                    {/* 2026 points */}
                    <circle cx="350" cy="130" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    <circle cx="350" cy="175" r="8" fill="#8b5cf6" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    <circle cx="350" cy="155" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    
                    {/* 2027 points */}
                    <circle cx="550" cy="80" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    <circle cx="550" cy="150" r="8" fill="#8b5cf6" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>
                    <circle cx="550" cy="185" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" className="drop-shadow-md"/>

                    {/* Zero line */}
                    <line x1="100" y1="320" x2="600" y2="320" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" opacity="0.7"/>

                    {/* Axis labels */}
                    <text x="350" y="390" textAnchor="middle" className="text-sm fill-slate-300 font-medium">Year</text>
                    <text x="30" y="190" textAnchor="middle" className="text-sm fill-slate-300 font-medium" transform="rotate(-90, 30, 190)">Amount (USD)</text>
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex justify-center space-x-8 mb-8">
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
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">$10.5k</div>
                    <div className="text-sm text-slate-400">2027 Revenue</div>
                  </div>
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">$5.9k</div>
                    <div className="text-sm text-slate-400">2027 Profit</div>
                  </div>
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2">$4.4k</div>
                    <div className="text-sm text-slate-400">2027 Cash Flow</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section id="comparison" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <ComparisonTable />
            </div>
          </section>

          {/* About/Team Section */}
          <section id="about" className="py-20 px-6 relative z-10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet the Team
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Passionate educators and engineers dedicated to revolutionizing PCB design education
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <TeamMemberCard
                  name="Purva Mhatre"
                  role="Co-Founder & CEO"
                  email="mhatrepu@msu.edu"
                  bio="Electrical Engineering student passionate about bridging the gap between academic theory and industry practice in PCB design."
                  skills={['PCB Design', 'AI/ML', 'Educational Technology', 'Product Strategy']}
                />
                <TeamMemberCard
                  name="Sharvayu Chavan"
                  role="Co-Founder & CTO"
                  email="chavansh@msu.edu"
                  bio="Computer Engineering student focused on developing innovative AI-powered learning platforms for technical education."
                  skills={['Full-Stack Development', 'AI Systems', 'UX Design', 'DevOps']}
                />
              </div>

              <div className="text-center mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  To democratize PCB design education by making it accessible, engaging, and immediately applicable to real-world challenges. 
                  We believe that with the right tools and guidance, anyone can master the art and science of PCB design.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-6 relative z-10 bg-gradient-to-r from-cyan-900/10 to-purple-900/10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Join thousands of students who are already mastering PCB design with TraceTutor
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-12 text-center">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/5 p-8 rounded-2xl border border-cyan-400/20">
                    <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-cyan-400 mb-2">Get in Touch</h4>
                    <p className="text-slate-300 mb-4">Have questions? We'd love to hear from you.</p>
                    <a href="mailto:hello@tracetutor.com" className="text-purple-400 hover:text-cyan-400 transition-colors">
                      hello@tracetutor.com
                    </a>
                  </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-cyan-400/20">
                    <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-cyan-400 mb-2">Live Chat</h4>
                    <p className="text-slate-300 mb-4">Get instant help from our support team.</p>
                    <button className="text-purple-400 hover:text-cyan-400 transition-colors">
                      Start Chat
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300">
                    Start Learning Today
                  </button>
                  <a
                    href="https://julsix.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Try Free Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900/90 text-center py-12 mt-16 border-t border-cyan-400/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    TraceTutor
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy</a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms</a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Support</a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-slate-400">© 2025 TraceTutor. Empowering the next generation of PCB designers.</p>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <DemoPage />
      )}
    </>
  );
};

export default TraceTutorWebsite;