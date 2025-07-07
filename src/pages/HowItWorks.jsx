import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Zap,
  Brain,
  Code,
  Wrench,
  Monitor,
  Cpu,
  Layers,
  Sparkles,
  Play,
  CheckCircle,
  Target,
  Rocket,
  Settings,
  Database,
  Cloud,
  Globe,
  Shield,
  Users,
  BarChart3,
  Lightbulb,
  Cog
} from 'lucide-react';

const TechCard = ({ icon: Icon, title, description, tech, color = "cyan", delay = 0 }) => (
  <div 
    className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-lg border border-${color}-500/20 rounded-2xl p-8 hover:border-${color}-400/40 transition-all duration-500 hover:scale-105`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`absolute inset-0 bg-${color}-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-${color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 text-${color}-400`} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
      {tech && (
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className={`px-3 py-1 bg-${color}-500/20 text-${color}-300 rounded-full text-sm font-medium`}>
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const FeatureHighlight = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <Icon className="w-10 h-10 text-green-400 mb-4" />
    <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{description}</p>
    {stats && (
      <div className="text-2xl font-bold text-green-400">{stats}</div>
    )}
  </div>
);

const ProcessStep = ({ step, title, description, icon: Icon, isActive = false }) => (
  <div className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 ${isActive ? 'bg-purple-500/20 border border-purple-500/30' : 'hover:bg-white/5'}`}>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-purple-500' : 'bg-white/10'}`}>
      {isActive ? <Icon className="w-6 h-6 text-white" /> : <span className="text-white font-bold">{step}</span>}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
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

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    {
      icon: Monitor,
      title: "Custom Lightweight EDA Tool",
      description: "Built from scratch for speed and simplicity. Our in-browser schematic and layout editor makes PCB design as intuitive as drawing. Real-time validation, interactive feedback, and AI-powered suggestions guide every step.",
      tech: ["React Canvas", "WebGL", "SVG Engine", "Real-time Rendering"],
      color: "cyan"
    },
    {
      icon: Brain,
      title: "AI-Powered Learning Engine",
      description: "Personalized learning paths that adapt to your goals. Whether targeting job interviews, embedded systems, or academic mastery, our AI creates the perfect curriculum and provides contextual help throughout your journey.",
      tech: ["Machine Learning", "NLP", "Adaptive Algorithms", "Progress Analytics"],
      color: "purple"
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Lightning-fast performance meets beautiful design. Our cutting-edge technology stack ensures smooth interactions, instant feedback, and seamless collaboration across all devices.",
      tech: ["React + Vite", "TailwindCSS", "TypeScript", "Cloud APIs"],
      color: "amber"
    },
    {
      icon: Wrench,
      title: "Interactive Project System",
      description: "Learn by building real projects. Drag-and-drop components, guided instructions, embedded knowledge checks, and live simulation create the fastest path from beginner to PCB designer.",
      tech: ["Component Library", "Simulation Engine", "Project Templates", "Assessment Tools"],
      color: "green"
    }
  ];

  const buildingProcess = [
    {
      step: 1,
      title: "Research & Design",
      description: "Deep analysis of PCB education gaps, user interviews with students and professionals, and technical architecture planning.",
      icon: Lightbulb
    },
    {
      step: 2,
      title: "Core Engine Development",
      description: "Building the foundational EDA tool, AI learning engine, and interactive project system with focus on performance and user experience.",
      icon: Cog
    },
    {
      step: 3,
      title: "Content Creation & Testing",
      description: "Developing comprehensive learning modules, real-world projects, and conducting beta testing with target users for feedback iteration.",
      icon: Target
    },
    {
      step: 4,
      title: "Platform Launch & Scale",
      description: "Public release with community features, continuous AI improvement, and expansion to advanced PCB design topics and industry partnerships.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg shadow-2xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TraceTutor
            </div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">Under Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                Engineering
              </span>
              <br />
              <span className="text-white">the Future of PCB Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              TraceTutor isn't just a learning platform — it's a complete technical ecosystem 
              <span className="text-cyan-400 font-bold"> engineered for the next generation</span> of hardware designers.
            </p>
          </div>


        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Architecture
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Four core systems working together to revolutionize PCB education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <TechCard key={index} {...tech} delay={index * 200} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Journey
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From concept to reality: the systematic approach to building TraceTutor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {buildingProcess.map((process, index) => (
                <ProcessStep 
                  key={index} 
                  {...process} 
                  isActive={activeStep === index}
                />
              ))}
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Current Focus</h3>
              <div className="space-y-4">
                <FeatureHighlight
                  icon={Database}
                  title="AI Training Data"
                  description="Collecting and processing thousands of PCB design examples"
                  stats="50TB+"
                />
                <FeatureHighlight
                  icon={Shield}
                  title="Performance Optimization"
                  description="Ensuring sub-100ms response times for all interactions"
                  stats="<100ms"
                />
                <FeatureHighlight
                  icon={Users}
                  title="Beta Testing"
                  description="Working with 500+ students and engineers for feedback"
                  stats="500+"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Under the Hood
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The innovative technologies that make TraceTutor possible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8">
              <Cloud className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Scalable microservices architecture</li>
                <li>• Real-time collaboration sync</li>
                <li>• Global CDN for instant loading</li>
                <li>• Auto-scaling based on demand</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8">
              <Brain className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Natural language processing</li>
                <li>• Computer vision for PCB analysis</li>
                <li>• Adaptive learning algorithms</li>
                <li>• Intelligent error detection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8">
              <Globe className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Cross-Platform Support</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Progressive Web App (PWA)</li>
                <li>• Mobile-responsive design</li>
                <li>• Offline capability</li>
                <li>• Native app performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-bold text-sm uppercase tracking-wide">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform PCB Education?
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            TraceTutor represents the future of technical education. Join us in building 
            the platform that will train the next generation of hardware engineers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Play className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Experience TraceTutor
            </button>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Our Progress
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-white/10 text-center py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            TraceTutor
          </div>
          <p className="text-slate-400">© 2025 TraceTutor. Engineering the future of PCB education.</p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;