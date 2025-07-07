import React, { useState, useEffect } from 'react';
import {
  School,
  BookOpen,
  Cog,
  Settings,
  Globe,
  ArrowLeft,
  TrendingUp,
  Users,
  Clock,
  AlertTriangle,
  Target,
  CheckCircle,
  ExternalLink,
  Quote,
  Zap,
  Building,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const CountUpNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatCard = ({ icon: Icon, number, suffix, label, color = "green" }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <Icon className={`w-8 h-8 mx-auto mb-4 text-${color}-400`} />
    <div className={`text-3xl font-bold text-${color}-400 mb-2`}>
      <CountUpNumber end={number} suffix={suffix} />
    </div>
    <p className="text-slate-300 text-sm">{label}</p>
  </div>
);

const ProblemCard = ({ icon: Icon, title, description, stat, color = "red" }) => (
  <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-lg border border-red-500/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
    <div className="absolute inset-0 bg-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <Icon className={`w-12 h-12 text-${color}-400 mb-4`} />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
      {stat && (
        <div className={`text-2xl font-bold text-${color}-400`}>{stat}</div>
      )}
    </div>
  </div>
);

const TestimonialCard = ({ quote, source, platform, link, urgent = false }) => (
  <div className={`bg-white/5 backdrop-blur-lg border ${urgent ? 'border-red-400/30' : 'border-white/10'} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105`}>
    <Quote className={`w-8 h-8 mb-4 ${urgent ? 'text-red-400' : 'text-blue-400'}`} />
    <blockquote className="text-slate-200 mb-4 italic leading-relaxed">
      "{quote}"
    </blockquote>
    <div className="flex items-center justify-between">
      <span className={`text-sm ${urgent ? 'text-red-400' : 'text-blue-400'} font-medium`}>
        {platform}
      </span>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  </div>
);

const NeedPage = ({ setCurrentPage }) => {
  const [currentPage, setCurrentPageState] = useState('main');

  const problems = [
    {
      icon: School,
      title: "Universities Failing Students",
      description: "Only 6 weeks of PCB training in 4-year programs. Students graduate without essential industry skills, creating a massive gap between education and employment.",
      stat: "6 weeks",
      color: "red"
    },
    {
      icon: BookOpen,
      title: "Outdated Theory-Heavy Curriculum",
      description: "Academic programs focus on theoretical concepts while ignoring hands-on PCB design. Students learn formulas but can't design a simple circuit board.",
      stat: "90% theory",
      color: "orange"
    },
    {
      icon: Briefcase,
      title: "Industry Training Bottleneck",
      description: "Companies spend 6-12 months training new hires on basic PCB skills. This delays projects and increases costs significantly.",
      stat: "6-12 months",
      color: "yellow"
    },
    {
      icon: Cog,
      title: "Fragmented Learning Resources",
      description: "Students cobble together knowledge from YouTube videos, forums, and documentation. No structured path means inefficient learning and knowledge gaps.",
      stat: "No structure",
      color: "purple"
    }
  ];

  const urgentTestimonials = [
    {
      quote: "Find out 2 weeks before the boards are needed that the person has no idea how to design a PCB",
      source: "Engineering Manager",
      platform: "Reddit",
      link: "https://www.reddit.com/r/AskElectronics/comments/1iqph7q/",
      urgent: true
    },
    {
      quote: "Spend 48 sleepless hours learning how to design a PCB to get the boards back just in time",
      source: "Engineering Student",
      platform: "Reddit",
      link: "https://www.reddit.com/r/PrintedCircuitBoard/comments/ici8hk/",
      urgent: true
    },
    {
      quote: "My university's reasoning for not teaching PCB design was that it was something we could learn on our own",
      source: "EE Graduate",
      platform: "Reddit",
      link: "https://www.reddit.com/r/ElectricalEngineering/comments/mktxja/",
      urgent: true
    }
  ];

  const industryTestimonials = [
    {
      quote: "Companies are now prioritizing PCB fluency in job listings — it's no longer a 'nice to have'",
      source: "Industry Expert",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/posts/hardware-job-posting-pcb-required"
    },
    {
      quote: "The PCB design market is projected to grow to $16B+ by 2028 — talent shortage is a bottleneck",
      source: "Market Research",
      platform: "Industry Report",
      link: "https://www.globenewswire.com/en/news-release/2023/07/12/2703098/"
    },
    {
      quote: "There are over 10,000+ unfilled roles globally demanding PCB design skills. Training must catch up",
      source: "Job Market Data",
      platform: "Indeed",
      link: "https://www.indeed.com/q-PCB-Design-jobs.html"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg shadow-2xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              TraceTutor
            </div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('main')}
                className="text-slate-300 hover:text-green-400 font-medium transition-colors duration-200"
              >
                Home
              </button>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-bold">Crisis</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Urgency */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Skills Crisis</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                The PCB Skills Crisis
              </span>
              <br />
              <span className="text-white">Is Real</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Universities fail to teach PCB design. Industries struggle to find qualified engineers. 
              <span className="text-red-400 font-bold"> Students are left behind.</span>
            </p>
          </div>

          {/* Crisis Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <StatCard icon={Users} number={10000} suffix="+" label="Unfilled PCB Jobs" color="red" />
            <StatCard icon={Clock} number={6} label="Weeks Training in University" color="orange" />
            <StatCard icon={TrendingUp} number={16} suffix="B+" label="Market Size by 2028" color="green" />
            <StatCard icon={Building} number={75} suffix="%" label="Companies Struggling to Hire" color="yellow" />
          </div>
        </div>
      </section>

      {/* Problem Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Four-Front Crisis
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A systematic breakdown in PCB design education creates cascading problems across the industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {problems.map((problem, index) => (
              <ProblemCard key={index} {...problem} />
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Student Voices */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Student Voices</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              "Help! I Need to Learn PCB Design"
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real stories from students and engineers facing the PCB skills gap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {urgentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Consequences
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The skills gap is costing companies time, money, and competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {industryTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Tease */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-bold text-sm uppercase tracking-wide">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            TraceTutor Changes Everything
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Interactive, hands-on PCB design training that bridges the gap between theory and practice. 
            Students learn by doing, with instant feedback and real-world projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCurrentPage('main')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CheckCircle className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              See How TraceTutor Solves This
            </button>
            
            <button
              onClick={() => setCurrentPage('main')}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Main Page
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-white/10 text-center py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            TraceTutor
          </div>
          <p className="text-slate-400">© 2025 TraceTutor. Bridging the PCB skills gap, one student at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default NeedPage;
