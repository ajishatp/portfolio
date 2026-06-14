import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  skillsLearned: string[];
}

const experiences: Job[] = [
  {
    role: "µLearn Project Coordinator Intern",
    company: "GTech µLearn",
    location: "Kerala (Hybrid)",
    duration: "Oct 2024 - June 2026",
    bullets: [
      "Coordinate student communities across multiple technical chapters, aligning academic interest with industry skills.",
      "Plan and execute student events, hackathons, and bootcamp schedules, facilitating hands-on coding environments for 500+ students.",
      "Manage project documentation, metric reporting, and student performance dashboards for internal reviews.",
      "Facilitate direct channels of mentorship and developer resources between student chapters and industry experts."
    ],
    skillsLearned: []
  },
  {
    role: "Cybersecurity Virtual Intern",
    company: "C-DAC Noida",
    location: "Virtual",
    duration: "July 2025 - August 2025",
    bullets: [
      "Completed a 2-month virtual internship program focusing on cybersecurity and defensive operations.",
      "Developed a ransomware simulator to study threat propagation, encryption algorithms, and mock security response workflows.",
      "Explored methodologies to identify vulnerabilities and secure host environments."
    ],
    skillsLearned: []
  },
  {
    role: "Digital Systems Engineering Intern",
    company: "Southern Railway",
    location: "Palakkad, Kerala",
    duration: "July 2024 - Aug 2024",
    bullets: [
      "Studied digital workflow systems, exploring optimizations for manual process structures across railway database modules.",
      "Formulated concepts for workflow automation and data tracking portals to replace paper-based inventory structures.",
      "Analyzed local networks and server cabinets, outlining steps for secure, high-throughput digital data routing and storage architectures."
    ],
    skillsLearned: []
  },
  {
    role: "IoT Intern",
    company: "Pacelab",
    location: "Kerala",
    duration: "Dec 2024 (1 Week)",
    bullets: [
      "Gained practical exposure to IoT (Internet of Things) concepts, hardware architectures, and sensor communications.",
      "Tinkered with microcontroller boards and explored smart automation interfaces."
    ],
    skillsLearned: []
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
          >
            Professional Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Work Experience
          </motion.h3>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experiences.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden glow-border"
            >
              {/* Background gradient flare */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl rounded-full pointer-events-none" />

              {/* Title & Metadata */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white tracking-wide">{job.role}</h4>
                    <span className="text-sm font-semibold text-stone-500 dark:text-slate-400">{job.company} — <span className="text-xs">{job.location}</span></span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  {job.duration}
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul className="space-y-3 mb-6 text-stone-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed relative z-10">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>


            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
