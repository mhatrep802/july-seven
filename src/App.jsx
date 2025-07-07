import NeedPage from './pages/NeedPage';
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
  ArrowLeft
} from 'lucide-react';

const TraceTutorWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('main'); // 'main' or 'need'

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

  // Chart component (simplified)
  const SimpleChart = () => (
    <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 h-96">
      <div className="flex items-end justify-around h-full space-x-4">
        {[
          { year: '2025', revenue: 75, profit: -183, cash: -183 },
          { year: '2026', revenue: 9223, profit: 5140, cash: 7032 },
          { year: '2027', revenue: 10503, profit: 5907, cash: 4418 }
        ].map((data, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex space-x-1 items-end h-40">
              <div 
                className="bg-green-400 w-6 rounded-t"
                style={{ height: `${Math.max(data.revenue / 100, 5)}%` }}
                title={`Revenue: $${data.revenue}k`}
              />
              <div 
                className="bg-purple-500 w-6 rounded-t"
                style={{ height: `${Math.max(data.profit / 100, 5)}%` }}
                title={`Profit: $${data.profit}k`}
              />
              <div 
                className="bg-amber-500 w-6 rounded-t"
                style={{ height: `${Math.max(data.cash / 100, 5)}%` }}
                title={`Cash Flow: $${data.cash}k`}
              />
            </div>
            <span className="text-slate-400 text-sm">{data.year}</span>
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
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              TraceTutor
            </div>
            <div className="hidden md:flex space-x-8">
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
            </div>
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
              title="Skills That Get You Hired"
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
              price="6"
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

      {/* Financials Section */}
      <section id="financials" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Financial Forecast 2025-2027
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            Growth projections and key performance metrics
          </p>
          <SimpleChart />
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
      ) : (
        <NeedPage setCurrentPage={setCurrentPage} />
      )}
    </>
  );
};

export default NeedPage;