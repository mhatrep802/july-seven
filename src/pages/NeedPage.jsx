import React from 'react';
import {
  School,
  BookOpen,
  Cog,
  Settings,
  Globe,
  ArrowLeft,
} from 'lucide-react';
import { NeedProblemCard, QuoteButton } from '../components';

const NeedPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">TraceTutor</div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('main')}
              className="text-slate-400 hover:text-green-400 font-medium transition-colors"
            >
              Home
            </button>
            <span className="text-green-400 font-medium">Need</span>
          </div>
        </div>
      </div>
    </nav>

    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Why the World Needs TraceTutor
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A global skills gap, outdated curriculum, and demand for practical PCB design training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <NeedProblemCard
            icon={School}
            title="Universities Offer Minimal PCB Training"
            description={`"We found that college education devoted only about six weeks to PCB layout and design, leaving students underprepared." — iConnect007`}
            link="https://iconnect007.com/article/136689/elementary-mr-watson-where-have-all-the-pcb-designers-gone/136692/pcb"
          />
          <NeedProblemCard
            icon={BookOpen}
            title="Outdated & Theoretical Curriculum"
            description={`"There's little to no training for printed circuit board design. Students get a lot of theory—very little hands-on design experience." — RigidFlexPCB.org`}
            link="https://rigidflexpcb.org/the-state-of-pcb-design-education-challenges-innovations-and-future-directions/"
          />
          <NeedProblemCard
            icon={Cog}
            title="Industry Experience Gaps"
            description={`"Many new grads require time-consuming training to get up to speed with even the basics of PCB design." — PCD&F`}
            link="https://www.pcdandf.com/pcdesign/index.php/current-issue/289-best-practices/18476-addressing-the-global-talent-shortage"
          />
          <NeedProblemCard
            icon={Settings}
            title="Fragmented Tools & Learning"
            description={`"Students are left to piece together knowledge from YouTube videos, tool documentation, and forums, with no structured path or feedback." — Altium`}
            link="https://resources.altium.com/p/big-challenges-driving-todays-workforce-skills-gaps"
          />
          <NeedProblemCard
            icon={Globe}
            title="The World Needs Practical Training"
            description={`"What they quickly learned was that many of these engineers didn't have the training necessary to do even basic PCB designs." — ProtoExpress`}
            link="https://www.protoexpress.com/blog/how-to-become-a-pcb-designer/"
          />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 text-center mb-12 drop-shadow-lg">
            Market Need for TraceTutor – Quotes & Source Links
          </h2>

          <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
              🔴 Reddit Quotes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <QuoteButton
                quote="Find out 2 weeks before the boards are needed… that the person… has no idea how to design a PCB..."
                link="https://www.reddit.com/r/AskElectronics/comments/1iqph7q/my_university_doesnt_teach_pcb_design_so_i/"
                type="reddit"
              />
              <QuoteButton
                quote="Spend 48 sleepless hours… learning how to design a PCB… to get the boards back just in time."
                link="https://www.reddit.com/r/PrintedCircuitBoard/comments/ici8hk/how_does_one_get_started_with_pcb_design/"
                type="reddit"
              />
              <QuoteButton
                quote="My university's reasoning for not teaching PCB design was that it was something we could learn on our own."
                link="https://www.reddit.com/r/ElectricalEngineering/comments/mktxja/things_that_should_be_taught_at_the_undergrad/"
                type="reddit"
              />
              <QuoteButton
                quote="My uni doesn't teach PCB design so I thought I would teach myself... started with youtube videos…"
                link="https://www.reddit.com/r/AskElectronics/comments/7dd9mh/can_i_make_a_pcb_in_25_weeks_with_no_experience/"
                type="reddit"
              />
              <QuoteButton
                quote="My uni doesn't teach PCB design so I thought I would teach myself... started with youtube videos…"
                link="https://www.reddit.com/r/ElectricalEngineering/comments/1ilcx4l/my_university_doesnt_teach_pcb_design_so_im/"
                type="reddit"
              />
            </div>
          </div>

          <div className="bg-slate-800/80 border border-cyan-400/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              🔗 LinkedIn Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <QuoteButton
                quote="Beginner to hardware job interview in 30–90 days after PCB learning"
                link="https://www.linkedin.com/posts/knmackey_%F0%9D%97%AA%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%81-activity-7299107205805416449-b-Mc"
                type="linkedin"
              />
              <QuoteButton
                quote="EMI, SI, and PCB complexity quotes from Dario Fresu (Post 1)"
                link="https://www.linkedin.com/posts/dario-fresu_fresuelectronics-pcbdesign-emc-activity-7263171057019228160-Xa2-"
                type="linkedin"
              />
              <QuoteButton
                quote="EMI, SI, and PCB complexity quotes from Dario Fresu (Post 2)"
                link="https://www.linkedin.com/posts/dario-fresu_fresuelectronics-pcbdesign-electronics-activity-7259464262492766208-oLAg"
                type="linkedin"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => setCurrentPage('main')}
            className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-lg border border-cyan-400/20 text-slate-100 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Main Page
          </button>
        </div>
      </div>
    </section>

    <footer className="bg-slate-800/80 text-center py-8 border-t border-cyan-400/20">
      <p className="text-slate-400">© 2025 TraceTutor. All rights reserved.</p>
    </footer>
  </div>
);

export default NeedPage;