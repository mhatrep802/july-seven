import React from 'react';

const NeedPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-cyan-400/10 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            TraceTutor
          </div>
          <button
            onClick={() => setCurrentPage('main')}
            className="text-slate-300 hover:text-green-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-400/10"
          >
            Back to Home
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 max-w-6xl mx-auto px-6">
        <section className="mb-16 bg-slate-800/80 border border-cyan-400/20 rounded-3xl p-12 text-center">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
            Need Analysis & Custom Paths
          </h1>
          <p className="text-xl text-slate-400 font-light">
            Discover personalized learning paths tailored to your unique goals and background.
          </p>
        </section>

        <section className="mb-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
              For Students
            </h2>
            <p className="text-slate-400">
              Tailored content to bridge the gap between theory and practical PCB design skills.
            </p>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
              For Professionals
            </h2>
            <p className="text-slate-400">
              Customized drills and projects to enhance your embedded systems expertise.
            </p>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
              For Hobbyists
            </h2>
            <p className="text-slate-400">
              Guided project-based learning to bring your hardware ideas to life efficiently.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-slate-800/80 border border-cyan-400/20 rounded-3xl p-12">
          <blockquote className="text-xl text-slate-400 italic border-l-4 border-cyan-400 pl-6">
            "TraceTutor's personalized paths helped me focus on what matters and accelerated my PCB learning journey."
          </blockquote>
          <cite className="block mt-4 text-slate-300 font-semibold text-right">- Satisfied Learner</cite>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/90 text-center py-8 mt-16 border-t border-cyan-400/10">
        <p className="text-slate-400">© 2025 TraceTutor. Empowering future engineers.</p>
      </footer>
    </div>
  );
};

export default NeedPage;