import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, BookOpen } from 'lucide-react';

interface Activity {
  title: string;
  role: string;
  desc: string;
  icon: React.ReactNode;
  highlights: string[];
}

const leadershipActivities: Activity[] = [
  {
    title: "µLearn Campus Orchestration",
    role: "Campus Coordinator & Mentor",
    desc: "Spearheaded peer-to-peer technical learning campaigns to expand practical software development skillsets.",
    icon: <Users className="w-5 h-5 text-blue-400" />,
    highlights: [
      "Guided 150+ students in starting their web development and AI journeys.",
      "Initiated coding groups focusing on web fundamentals and version control.",
      "Recognized by µLearn for high campus engagement metrics."
    ]
  },
  {
    title: "Hackathons & Ideathons",
    role: "Participant & Mentor",
    desc: "Collaborated in regional design-and-code challenges, designing system architectures and guiding juniors.",
    icon: <Award className="w-5 h-5 text-purple-400" />,
    highlights: [
      "Participated in regional engineering hackathons building web prototypes.",
      "Helped juniors with repository structures and frontend design templates.",
      "Won best conceptual design award at a local Web3 ideathon."
    ]
  },
  {
    title: "Tech Event Coordination",
    role: "Event Coordinator",
    desc: "Managed logistical tracking, schedules, and promotional content for department-wide technical activities.",
    icon: <Calendar className="w-5 h-5 text-indigo-400" />,
    highlights: [
      "Coordinated coding competitions and web design workshops for 100+ attendees.",
      "Maintained budget plans, feedback audits, and speaker schedules.",
      "Crafted promotional copy and announcements for social media."
    ]
  },
  {
    title: "Community Technical Writing",
    role: "Content & Documentation Lead",
    desc: "Drafted learning paths and guides to simplify code deployment steps for beginner programmers.",
    icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
    highlights: [
      "Created setup guides for Git, GitHub, and local VS Code configurations.",
      "Wrote introductory guides on integrating OpenAI API inside web apps.",
      "Managed discord community announcements and resource channels."
    ]
  }
];

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
          >
            Contributions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Leadership &amp; Activities
          </motion.h3>
        </div>

        {/* Grid of activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadershipActivities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card relative overflow-hidden glow-border flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon, Title & Role */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.03] border border-card-border shrink-0">
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white tracking-wide">{act.title}</h4>
                    <span className="text-xs font-semibold text-stone-500 dark:text-slate-400">{act.role}</span>
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-stone-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {act.desc}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6">
                  {act.highlights.map((item, hiIdx) => (
                    <li key={hiIdx} className="flex gap-2.5 items-start text-xs text-stone-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
