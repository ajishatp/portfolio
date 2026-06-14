import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface AcademicEntry {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  details: string[];
}

const educationTimeline: AcademicEntry[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "APJ Abdul Kalam Technological University (KTU)",
    duration: "2023 – 2027",
    grade: "CGPA: 8.2 (Pursuing)",
    details: [
      "Specializing in Software Development, Artificial Intelligence, and Modern Web Technologies.",
      "Strong foundation in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
      "Passionate about building innovative software solutions and AI-powered applications.",
      "Actively involved in technical communities, hackathons, and collaborative learning initiatives."
    ]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Kerala State Higher Secondary Education Board",
    duration: "2020 – 2022",
    grade: "Percentage: 94%",
    details: [
      "Specialized in Biology, Physics, Chemistry, and Mathematics.",
      "Developed strong analytical, problem-solving, and scientific reasoning skills.",
      "Maintained excellent academic performance throughout higher secondary education.",
      "Built a solid foundation for pursuing engineering and technology-focused studies."
    ]
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
          >
            Academic Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Education &amp; Credentials
          </motion.h3>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-white/[0.08] ml-4 md:ml-12 pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto">
          {educationTimeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline dot icon */}
              <div className="absolute -left-[39px] md:-left-[55px] top-1.5 p-2 rounded-full bg-slate-950 border border-blue-500/40 text-blue-400 shadow-md">
                <GraduationCap className="w-4 h-4 md:w-5 h-5" />
              </div>

              {/* Card content */}
              <div className="p-6 rounded-2xl glass-card relative glow-border">
                {/* Timeline metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-wide">{item.degree}</h4>
                    <span className="text-sm font-semibold text-slate-400">{item.institution}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <div className="inline-flex items-center gap-1.5 text-xs text-purple-400 font-semibold bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </div>
                    {item.grade && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                        {item.grade}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets details */}
                <ul className="space-y-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed list-none">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{detail}</span>
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
