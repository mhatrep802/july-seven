import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Mail, 
  Youtube, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  CheckCircle,
  Target,
  BarChart3,
  Eye,
  Heart,
  Share2,
  Calendar,
  Clock,
  Award,
  Zap,
  Globe,
  User,
  Star,
  ArrowUp,
  Activity,
  DollarSign,
  Rocket,
  PlayCircle
} from 'lucide-react';

const MarketingStrategyPitch = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  // Projected Marketing Data - Based on ACTUAL Revenue ($75, $9,223, $10,503)
  const marketingProjections = {
    timeline: [
      { 
        phase: "2025 Launch", 
        budget: 0, 
        expectedROI: 0, 
        focus: "Personal Network & Word of Mouth", 
        revenue_target: 75,
        customers: 8,
        signups: 8
      },
      { 
        phase: "2026 Growth", 
        budget: 200, 
        expectedROI: 46.1, 
        focus: "Organic Growth & Community", 
        revenue_target: 9223,
        customers: 589,
        signups: 589
      },
      { 
        phase: "2027 Optimize", 
        budget: 300, 
        expectedROI: 35.0, 
        focus: "Retention & Referrals", 
        revenue_target: 10503,
        customers: 120,
        signups: 120
      }
    ],
    channels: [
      { name: "Reddit & Engineering Communities", allocation: 50, projected_leads: 30, cost_per_lead: 8, focus: "Free community engagement" },
      { name: "Content Marketing (Free)", allocation: 30, projected_leads: 20, cost_per_lead: 8, focus: "Blog posts & tutorials" },
      { name: "Referral Program", allocation: 15, projected_leads: 40, cost_per_lead: 2, focus: "Word-of-mouth" },
      { name: "Social Media (Organic)", allocation: 5, projected_leads: 10, cost_per_lead: 3, focus: "LinkedIn, Twitter" }
    ]
  };

  // Target Market Analysis - Realistic Small Scale
  const targetMarkets = {
    primary: [
      { segment: "EE Students", size: "180k annually", pain: "Lack of practical PCB skills", value_prop: "Job-ready training", target_2027: "300 users" },
      { segment: "Career Switchers", size: "45k annually", pain: "Overwhelmed by resources", value_prop: "Structured learning path", target_2027: "200 users" },
      { segment: "Hobbyist Makers", size: "320k active", pain: "Trial and error learning", value_prop: "Expert guidance", target_2027: "217 users" }
    ],
    acquisition_strategy: {
      year_1_target: 8,
      year_2_target: 589,
      year_3_new: 120,
      total_customers_2027: 717,
      conversion_rate: 12,
      avg_customer_value: 96
    }
  };

  // Competitive Analysis
  const competitiveStrategy = {
    differentiators: [
      { feature: "AI-Powered Learning", us: "✓ Advanced", competitors: "✗ None" },
      { feature: "Real-time Feedback", us: "✓ Instant", competitors: "~ Limited" },
      { feature: "Industry Integration", us: "✓ Direct", competitors: "~ Basic" },
      { feature: "Personalization", us: "✓ Full", competitors: "✗ Minimal" },
      { feature: "Community Support", us: "✓ Active", competitors: "~ Passive" }
    ],
    positioning: "The only AI-driven, personalized PCB learning platform that bridges the gap between academic theory and industry practice"
  };

  // Marketing Funnel Strategy
  const funnelStrategy = {
    awareness: {
      tactics: ["SEO-optimized blog content", "YouTube tutorials", "Reddit community engagement"],
      kpi: "Brand awareness reach: 5k impressions/month"
    },
    consideration: {
      tactics: ["Free PCB design guides", "Webinar series", "Student testimonials"],
      kpi: "Lead generation: 50 qualified leads/month"
    },
    conversion: {
      tactics: ["7-day free trial", "Money-back guarantee", "Student discounts"],
      kpi: "Conversion rate: 12% trial-to-paid"
    },
    retention: {
      tactics: ["Gamified learning", "Career support", "Alumni network"],
      kpi: "Retention rate: 85% monthly"
    }
  };

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-lg'
          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  const StrategyCard = ({ title, description, metrics, investment, timeline, onClick }) => (
    <div 
      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 cursor-pointer hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-slate-500">Investment:</span>
          <span className="text-green-400 font-medium">${investment}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Timeline:</span>
          <span className="text-cyan-400">{timeline}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Expected ROI:</span>
          <span className="text-purple-400 font-medium">{metrics}</span>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border border-cyan-400/30 rounded-lg py-2 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-purple-600/30 transition-all duration-300">
        View Details
      </button>
    </div>
  );

  const PhaseCard = ({ phase, budget, roi, focus, status = "planned" }) => (
    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-white">{phase}</h4>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          status === 'active' ? 'bg-green-500/20 text-green-400' :
          status === 'next' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-blue-500/20 text-blue-400'
        }`}>
          {status}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-slate-400">Budget:</span>
          <span className="text-white font-medium">${budget}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Expected ROI:</span>
          <span className="text-green-400 font-medium">{roi}x</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Focus:</span>
          <span className="text-cyan-400">{focus}</span>
        </div>
      </div>
    </div>
  );

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/20 rounded-3xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Marketing Strategy</h2>
        <p className="text-xl text-slate-300 mb-6">
          Ultra-lean, bootstrap marketing strategy: $75 → $9,223 → $10,503 revenue with minimal investment
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">$500</div>
            <div className="text-slate-400">Total Marketing Investment (3 years)</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">717</div>
            <div className="text-slate-400">Total Customers by 2027</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">$19.8k</div>
            <div className="text-slate-400">Total Revenue (3 years)</div>
          </div>
        </div>
      </div>

      {/* Target Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Target className="w-6 h-6 text-cyan-400" />
            <span>Primary Target Markets</span>
          </h3>
          <div className="space-y-4">
            {targetMarkets.primary.map((market, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-medium">{market.segment}</h4>
                  <span className="text-cyan-400 text-sm">{market.size}</span>
                </div>
                <div className="text-sm text-slate-400 mb-1">Pain: {market.pain}</div>
                <div className="text-sm text-green-400">Solution: {market.value_prop}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <span>Competitive Positioning</span>
          </h3>
          <div className="mb-4">
            <p className="text-slate-300 italic">"{competitiveStrategy.positioning}"</p>
          </div>
          <div className="space-y-3">
            {competitiveStrategy.differentiators.slice(0, 3).map((diff, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-slate-400">{diff.feature}</span>
                <div className="flex space-x-4">
                  <span className="text-green-400 font-medium">Us: {diff.us}</span>
                  <span className="text-red-400">Others: {diff.competitors}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStrategyTab = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Bootstrap Marketing Strategy</h2>
        <p className="text-slate-400">Four low-cost channels designed to maximize organic growth</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StrategyCard
          title="Reddit Community Engagement"
          description="Build authentic relationships in engineering communities where our audience naturally gathers for advice."
          investment="250"
          timeline="3 years"
          metrics="Organic ROI"
          onClick={() => setSelectedStrategy('reddit')}
        />
        
        <StrategyCard
          title="Content Marketing (Free)"
          description="Create valuable blog posts and tutorials that demonstrate PCB concepts and showcase platform value."
          investment="150"
          timeline="Ongoing"
          metrics="SEO Growth"
          onClick={() => setSelectedStrategy('content')}
        />
        
        <StrategyCard
          title="Referral Program"
          description="Incentivize existing users to bring friends through word-of-mouth marketing and referral rewards."
          investment="75"
          timeline="Year 2-3"
          metrics="Viral Growth"
          onClick={() => setSelectedStrategy('referral')}
        />
        
        <StrategyCard
          title="Social Media (Organic)"
          description="Build presence on LinkedIn and Twitter through consistent, valuable content sharing and community engagement."
          investment="25"
          timeline="Ongoing"
          metrics="Brand Awareness"
          onClick={() => setSelectedStrategy('social')}
        />
      </div>
    </div>
  );

  const renderTimelineTab = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">3-Year Bootstrap Timeline</h2>
        <p className="text-slate-400">Phased approach to build momentum with minimal investment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketingProjections.timeline.map((phase, index) => (
          <PhaseCard
            key={index}
            phase={phase.phase}
            budget={phase.budget}
            roi={phase.expectedROI}
            focus={phase.focus}
            status={index === 0 ? 'next' : 'planned'}
          />
        ))}
      </div>

      {/* Channel Allocation */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <BarChart3 className="w-6 h-6 text-cyan-400" />
          <span>Budget Allocation by Channel</span>
        </h3>
        <div className="space-y-4">
          {marketingProjections.channels.map((channel, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div className="flex-1">
                <h4 className="text-white font-medium">{channel.name}</h4>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-slate-400">{channel.allocation}% allocation</span>
                  <span className="text-sm text-green-400">${channel.cost_per_lead} cost/lead</span>
                  <span className="text-sm text-cyan-400">{channel.projected_leads} projected leads</span>
                  <span className="text-sm text-purple-400">{channel.focus}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">
                  ${Math.round((500 * channel.allocation) / 100)}
                </div>
                <div className="text-sm text-slate-400">3-year budget</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Funnel */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-purple-400" />
          <span>Customer Acquisition Funnel</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(funnelStrategy).map(([stage, data], index) => (
            <div key={stage} className="text-center">
              <div className="bg-gradient-to-b from-cyan-400 to-purple-600 rounded-lg p-4 mb-3">
                <h4 className="text-white font-semibold capitalize mb-2">{stage}</h4>
                <div className="text-sm text-white/80">{data.kpi}</div>
              </div>
              <div className="text-xs text-slate-400">
                {data.tactics.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMetricsTab = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Projected Performance Metrics</h2>
        <p className="text-slate-400">Conservative estimates based on bootstrap growth and organic marketing</p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 text-center">
          <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-white">717</div>
          <div className="text-slate-400">Total Customers by 2027</div>
          <div className="text-sm text-green-400 mt-2">$19.8k total revenue</div>
        </div>
        
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 text-center">
          <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-white">85%</div>
          <div className="text-slate-400">Organic Growth</div>
          <div className="text-sm text-green-400 mt-2">Mostly word-of-mouth</div>
        </div>
        
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 text-center">
          <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-white">$0.70</div>
          <div className="text-slate-400">Cost Per Customer</div>
          <div className="text-sm text-green-400 mt-2">Ultra-lean acquisition</div>
        </div>
        
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 text-center">
          <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-white">123x</div>
          <div className="text-slate-400">Revenue Growth</div>
          <div className="text-sm text-green-400 mt-2">$75 → $9,223</div>
        </div>
      </div>

      {/* Growth Projections */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-6">3-Year Growth Trajectory</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2025</div>
            <div className="text-slate-300">8 customers</div>
            <div className="text-sm text-slate-400">Bootstrap validation</div>
            <div className="text-xs text-green-400">$75 revenue</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">2026</div>
            <div className="text-slate-300">589 customers</div>
            <div className="text-sm text-slate-400">Organic viral growth</div>
            <div className="text-xs text-green-400">$9,223 revenue</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">2027</div>
            <div className="text-slate-300">717 total customers</div>
            <div className="text-sm text-slate-400">Sustainable growth</div>
            <div className="text-xs text-green-400">$10,503 revenue</div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Leading Indicators</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Organic Traffic Growth</span>
              <span className="text-green-400">15% monthly</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Reddit Engagement</span>
              <span className="text-green-400">50 interactions/week</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Content Shares</span>
              <span className="text-green-400">25 shares/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Referral Rate</span>
              <span className="text-green-400">20%</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Lagging Indicators</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Customer Acquisition Cost</span>
              <span className="text-cyan-400">$0.70</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Customer Lifetime Value</span>
              <span className="text-cyan-400">$96</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Payback Period</span>
              <span className="text-cyan-400">1 week</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Churn Rate</span>
              <span className="text-cyan-400">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded hover:bg-slate-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
            TraceTutor Marketing Strategy
          </h1>
          <p className="text-2xl text-slate-400 mb-8">
            Bootstrap Growth: $75 → $10,503 Revenue
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$500</div>
              <div className="text-slate-400">Marketing Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">123x</div>
              <div className="text-slate-400">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">717</div>
              <div className="text-slate-400">Total Customers</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton id="overview" label="Market Overview" icon={Globe} isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="strategy" label="Channel Strategy" icon={Target} isActive={activeTab === 'strategy'} onClick={setActiveTab} />
          <TabButton id="timeline" label="Implementation" icon={Calendar} isActive={activeTab === 'timeline'} onClick={setActiveTab} />
          <TabButton id="metrics" label="Projections" icon={BarChart3} isActive={activeTab === 'metrics'} onClick={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'strategy' && renderStrategyTab()}
          {activeTab === 'timeline' && renderTimelineTab()}
          {activeTab === 'metrics' && renderMetricsTab()}
        </div>

        {/* Call to Action */}
      </div>

      {/* Strategy Detail Modal */}
      {selectedStrategy && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Strategy Deep Dive</h3>
              <button 
                onClick={() => setSelectedStrategy(null)}
                className="text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Strategy Details</h4>
                <p className="text-slate-300">
                  Each marketing channel focuses on organic, low-cost growth tactics that maximize 
                  word-of-mouth and community engagement for bootstrap success.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingStrategyPitch;