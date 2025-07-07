import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, MessageCircle, Play, Pause, RotateCcw, ChevronRight, Zap, CircuitBoard, Layers, Award, TrendingUp, Eye, Settings, Download, Share2, Target, Activity } from 'lucide-react';

const projects = [
  {
    title: 'Smart LED Matrix Controller',
    description: 'Design a 32x32 RGB LED matrix controller with ESP32 and level shifters.',
    components: 'ESP32, 74HCT245, WS2812B Matrix',
    difficulty: 'Advanced',
    progress: 75,
    layers: 4,
    estimatedTime: '8-12 hours',
    image: '🎨'
  },
  {
    title: 'High-Fidelity Audio DAC',
    description: 'Route a professional-grade stereo DAC with balanced outputs and low noise design.',
    components: 'ES9038Q2M, LM4562, XLR Outputs',
    difficulty: 'Expert',
    progress: 30,
    layers: 6,
    estimatedTime: '15-20 hours',
    image: '🎵'
  },
  {
    title: 'IoT Sensor Hub',
    description: 'Multi-sensor breakout board with wireless connectivity and power management.',
    components: 'STM32, BME280, LoRa Module',
    difficulty: 'Intermediate',
    progress: 90,
    layers: 2,
    estimatedTime: '4-6 hours',
    image: '📡'
  },
];

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTrace, setSelectedTrace] = useState('power');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [realTimeData, setRealTimeData] = useState({
    temperature: 23.5,
    current: 1.24,
    voltage: 4.97
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
      setRealTimeData(prev => ({
        temperature: 23.5 + Math.sin(Date.now() / 1000) * 2,
        current: 1.24 + Math.sin(Date.now() / 1500) * 0.1,
        voltage: 4.97 + Math.sin(Date.now() / 2000) * 0.03
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const designSteps = [
    { step: 1, description: "Component placement with thermal analysis", action: "Smart Placement", icon: "🎯", color: "blue" },
    { step: 2, description: "Auto-route power with current density optimization", action: "Power Distribution", icon: "⚡", color: "red" },
    { step: 3, description: "Generate adaptive ground planes with via optimization", action: "Ground Strategy", icon: "🌐", color: "green" },
    { step: 4, description: "Route differential pairs with length matching", action: "Signal Integrity", icon: "📡", color: "purple" },
    { step: 5, description: "Apply 3D modeling and thermal simulation", action: "3D Validation", icon: "🔬", color: "cyan" },
    { step: 6, description: "Generate manufacturing files with AI verification", action: "Production Ready", icon: "🏭", color: "orange" }
  ];

  const traceAnalysis = {
    power: {
      width: "24 mils",
      current: "1.24A",
      voltage: "4.97V",
      resistance: "0.65 mΩ",
      tempRise: "8.2°C",
      status: "✅ Optimal",
      recommendation: "Excellent thermal performance - within design margins",
      efficiency: 98.2,
      reliability: 99.1
    },
    signal: {
      width: "8 mils",
      impedance: "50.2Ω ±2%",
      length: "1.247 inches",
      crosstalk: "-42dB",
      riseTime: "285ps",
      status: "✅ Excellent",
      recommendation: "Perfect impedance control and signal integrity",
      efficiency: 96.8,
      reliability: 97.5
    },
    ground: {
      coverage: "92%",
      vias: "47 stitching vias",
      planes: "6 layers",
      noise: "<5mV",
      inductance: "0.8nH",
      status: "✅ Premium",
      recommendation: "Outstanding ground plane design with minimal noise",
      efficiency: 99.5,
      reliability: 99.8
    }
  };

  const getColorClass = (color) => {
    const colors = {
      blue: "border-blue-500 bg-blue-500/10",
      red: "border-red-500 bg-red-500/10",
      green: "border-green-500 bg-green-500/10",
      purple: "border-purple-500 bg-purple-500/10",
      cyan: "border-cyan-500 bg-cyan-500/10",
      orange: "border-orange-500 bg-orange-500/10"
    };
    return colors[color] || colors.blue;
  };

  const nextStep = () => {
    if (currentStep < designSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetDesign = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 px-8 pt-8">
        <button
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-white bg-cyan-600 rounded hover:bg-cyan-700 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="relative z-10 p-8 space-y-12">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
              <CircuitBoard className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                TraceTutor Studio
              </h1>
              <p className="text-slate-400">Professional PCB Design Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Pro Designer</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">15 Boards</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold">98% Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium PCB Design Studio */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mr-3"></div>
              AI-Powered Design Studio
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/50 transition-all">
                <Settings className="w-5 h-5 text-slate-400" />
              </button>
              <button className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/50 transition-all">
                <Download className="w-5 h-5 text-slate-400" />
              </button>
              <button className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/50 transition-all">
                <Share2 className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Enhanced PCB Visualization */}
              <div className="xl:col-span-2 space-y-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-cyan-400" />
                      ESP32-S3 Development Board
                    </h3>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Activity className="w-4 h-4" />
                        Real-time
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced PCB Layout */}
                  <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 rounded-xl p-6 border border-green-500/20 h-96 relative overflow-hidden">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Power traces with glow effect */}
                    <div className={`absolute top-8 left-8 w-40 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg ${selectedTrace === 'power' ? 'shadow-red-500/50 animate-pulse' : ''}`} style={{opacity: selectedTrace === 'power' ? 1 : 0.4}}></div>
                    <div className={`absolute top-12 left-8 w-40 h-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg ${selectedTrace === 'power' ? 'shadow-red-600/50 animate-pulse' : ''}`} style={{opacity: selectedTrace === 'power' ? 1 : 0.4}}></div>
                    
                    {/* Signal traces with animation */}
                    {[0,1,2,3,4].map((i) => (
                      <div key={i} 
                        className={`absolute top-${20 + i*4} left-12 w-32 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm ${selectedTrace === 'signal' ? 'shadow-yellow-400/30' : ''}`}
                        style={{
                          opacity: selectedTrace === 'signal' ? 1 : 0.3,
                          animationDelay: `${i * 0.2}s`,
                          animation: selectedTrace === 'signal' ? 'pulse 2s infinite' : 'none'
                        }}
                      ></div>
                    ))}
                    
                    {/* Ground plane with via pattern */}
                    <div className={`absolute bottom-8 left-8 right-8 h-20 bg-gradient-to-br from-slate-600/60 to-slate-700/60 rounded-lg ${selectedTrace === 'ground' ? 'shadow-lg shadow-slate-500/30' : ''}`} style={{opacity: selectedTrace === 'ground' ? 1 : 0.2}}>
                      {/* Via grid */}
                      {Array.from({length: 24}).map((_, i) => (
                        <div key={i} 
                          className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full shadow-sm"
                          style={{
                            left: `${(i % 8) * 12 + 8}%`,
                            top: `${Math.floor(i / 8) * 25 + 15}%`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Components with realistic styling */}
                    <div className="absolute top-12 right-12 w-12 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-500 shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-slate-600/50 to-transparent rounded-lg"></div>
                    </div>
                    <div className="absolute top-32 right-16 w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full border border-slate-500 shadow-lg"></div>
                    <div className="absolute bottom-12 left-12 w-16 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-500 shadow-lg"></div>
                    
                    {/* Layer indicator */}
                    <div className="absolute top-4 right-4 flex space-x-1">
                      {['Top', 'L2', 'L3', 'Bot'].map((layer, i) => (
                        <button key={layer} className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${i === 0 ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50'}`}>
                          {layer}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Trace Selection */}
                  <div className="mt-6 flex space-x-3">
                    <button 
                      onClick={() => setSelectedTrace('power')}
                      className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${selectedTrace === 'power' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'}`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>Power Distribution</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => setSelectedTrace('signal')}
                      className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${selectedTrace === 'signal' ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg shadow-yellow-600/30' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'}`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Activity className="w-4 h-4" />
                        <span>Signal Integrity</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => setSelectedTrace('ground')}
                      className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${selectedTrace === 'ground' ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-600/30' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'}`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Layers className="w-4 h-4" />
                        <span>Ground Strategy</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Analysis Panel */}
              <div className="space-y-6">
                {/* Real-time Metrics */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Live Metrics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Temperature</span>
                      <span className="text-xl font-mono text-green-400">{realTimeData.temperature.toFixed(1)}°C</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Current</span>
                      <span className="text-xl font-mono text-blue-400">{realTimeData.current.toFixed(2)}A</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Voltage</span>
                      <span className="text-xl font-mono text-purple-400">{realTimeData.voltage.toFixed(2)}V</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Design Process */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">AI Design Flow</h3>
                  <div className="space-y-3">
                    {designSteps.map((step, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border transition-all ${
                        idx === currentStep 
                          ? `${getColorClass(step.color)} border-opacity-100 shadow-lg` 
                          : idx < currentStep 
                            ? 'bg-green-500/10 border-green-500/30' 
                            : 'bg-slate-800/30 border-slate-700/30'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`text-2xl ${idx <= currentStep ? 'grayscale-0' : 'grayscale'}`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">{step.description}</div>
                            <div className="text-xs text-slate-400 mt-1">{step.action}</div>
                          </div>
                          {idx < currentStep && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 text-white">✓</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-3">
                    <button 
                      onClick={prevStep} 
                      disabled={currentStep === 0}
                      className="p-3 bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-30 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button 
                      onClick={nextStep}
                      disabled={currentStep === designSteps.length - 1}
                      className="p-3 bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-30 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={resetDesign}
                      className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl transition-all"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <div className="ml-auto flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-24 bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
                          style={{width: `${((currentStep + 1) / designSteps.length) * 100}%`}}
                        ></div>
                      </div>
                      <span>{currentStep + 1}/{designSteps.length}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Trace Analysis */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-600/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Advanced Analysis</h3>
                  {selectedTrace && traceAnalysis[selectedTrace] && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {Object.entries(traceAnalysis[selectedTrace]).slice(0, -3).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                            <div className="font-mono text-white bg-slate-800/50 px-2 py-1 rounded">{value}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Performance indicators */}
                      <div className="space-y-3 pt-4 border-t border-slate-700/50">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Efficiency</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                                style={{width: `${traceAnalysis[selectedTrace].efficiency}%`}}
                              ></div>
                            </div>
                            <span className="text-green-400 font-mono text-sm">{traceAnalysis[selectedTrace].efficiency}%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Reliability</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full"
                                style={{width: `${traceAnalysis[selectedTrace].reliability}%`}}
                              ></div>
                            </div>
                            <span className="text-blue-400 font-mono text-sm">{traceAnalysis[selectedTrace].reliability}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-lg border border-slate-600/30">
                        <div className="flex items-start space-x-2">
                          <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5" />
                          <div className="text-sm text-slate-300">{traceAnalysis[selectedTrace].recommendation}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Projects Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
              Featured Design Projects
            </h2>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-600/30 transition-all">
              Browse All Projects
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                      project.difficulty === 'Expert' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                      'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs bg-slate-700/50 text-slate-400 px-2 py-1 rounded-full">
                      {project.layers} layers
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="text-xs text-slate-400">
                    <CircuitBoard className="inline-block w-3 h-3 mr-1" />
                    {project.components}
                  </div>
                  <div className="text-xs text-slate-400">
                    ⏱️ {project.estimatedTime}
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center text-green-400 text-sm group-hover:text-green-300 transition-colors">
                  <Play className="w-4 h-4 mr-2" />
                  <span className="font-medium">Continue Design</span>
                  <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Quiz Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
              Knowledge Challenge
            </h2>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-slate-400">Streak: 7 days</div>
              <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                Expert Level
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/30">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  Q1
                </div>
                <div className="text-sm text-slate-400">High-Speed Digital Design</div>
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed">
                For a 2.5A power trace on a 2oz copper PCB with a maximum temperature rise of 10°C, what is the minimum recommended trace width?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { option: 'A', text: '15 mils', correct: false },
                { option: 'B', text: '25 mils', correct: false },
                { option: 'C', text: '35 mils', correct: true },
                { option: 'D', text: '50 mils', correct: false }
              ].map((choice) => (
                <button key={choice.option} className="group p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl text-left transition-all border border-slate-600/30 hover:border-slate-500/50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${choice.correct ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-300 group-hover:bg-slate-600'}`}>
                      {choice.option}
                    </div>
                    <span className={`${choice.correct ? 'text-green-400' : 'text-white group-hover:text-slate-200'}`}>
                      {choice.text}
                      {choice.correct && ' ✓'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <div>Question 1 of 5</div>
                <div className="w-32 bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-600/30 transition-all">
                Next Question
              </button>
            </div>
          </div>
        </section>

        {/* Premium DRC Feedback */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-3"></div>
              AI Design Verification
            </h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-400">Live Analysis</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/30 backdrop-blur-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-yellow-300">Thermal Warning</div>
                    <div className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">Medium</div>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed mb-3">
                    Power trace (Net: +3V3) may exceed thermal limits under full load. Consider widening to 30 mils or adding thermal vias.
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg transition-colors">
                      Auto-Fix
                    </button>
                    <button className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30 backdrop-blur-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-green-300">Signal Integrity ✓</div>
                    <div className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Excellent</div>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed mb-3">
                    All differential pairs properly matched within 0.1mm. Impedance control targets achieved across all layers.
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-green-400">✓ Validated</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl p-6 border border-red-500/30 backdrop-blur-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <CircuitBoard className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-red-300">Manufacturing Error</div>
                    <div className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">Critical</div>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed mb-3">
                    Via drill diameter (4 mils) below manufacturer capability. Minimum supported size is 6 mils for this stackup.
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition-colors">
                      Fix Now
                    </button>
                    <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium AI Assistant */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
              AI Design Mentor
            </h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-400">Neural Engine Active</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
            <div className="mb-6">
              <p className="text-slate-300 mb-4 text-lg">Ask about advanced PCB design, signal integrity, or manufacturing optimization:</p>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="e.g. How do I minimize crosstalk in high-speed differential pairs?"
                  className="flex-1 p-4 rounded-xl bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-600/30 transition-all">
                  Ask AI
                </button>
              </div>
            </div>
            
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-600/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-purple-300 font-bold mb-2 flex items-center">
                    AI Design Expert
                    <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-slate-300 leading-relaxed">
                    "For high-current power delivery, I recommend implementing a multi-layer power distribution network. Use 2oz copper with 35-mil traces for your main power rails, and add thermal vias every 5mm to improve heat dissipation. Consider using polygon pours with via stitching to reduce inductance and improve current density distribution."
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">👍 Helpful</button>
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">💡 More Details</button>
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">📋 Apply Suggestion</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick suggestions */}
            <div className="mt-6">
              <div className="text-sm text-slate-400 mb-3">Popular Questions:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Impedance matching for USB 3.0",
                  "Via stitching best practices",
                  "EMI shielding techniques",
                  "Thermal management strategies"
                ].map((suggestion) => (
                  <button key={suggestion} className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm text-slate-300 hover:text-white transition-all border border-slate-600/30 hover:border-slate-500/50">
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoPage;