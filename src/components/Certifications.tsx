import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  skillsHighlighted: string[];
}

const certificatesData: Certificate[] = [
  {
    title: "Introduction to Generative AI Course",
    issuer: "Google Cloud",
    date: "Dec 2024",
    credentialId: "GCLOUD-GENAI-7782",
    verificationUrl: "https://cloud.google.com",
    skillsHighlighted: ["Generative AI", "LLM Concepts", "Prompt Engineering"]
  },
  {
    title: "React & TypeScript Frontend Foundations",
    issuer: "Meta / Coursera",
    date: "Aug 2024",
    credentialId: "META-FRONTEND-981",
    verificationUrl: "https://coursera.org",
    skillsHighlighted: ["React State", "TypeScript Interfaces", "Component Architecture"]
  },
  {
    title: "Data Structures & Algorithms in Python",
    issuer: "NPTEL",
    date: "Oct 2023",
    credentialId: "NPTEL-CS-2819",
    verificationUrl: "https://nptel.ac.in",
    skillsHighlighted: ["Data Structures", "Algorithm Design", "Big-O Analysis"]
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
          >
            Verifications
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Licenses &amp; Certifications
          </motion.h3>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl glass-card flex flex-col justify-between relative glow-border"
            >
              <div>
                {/* Header Icon & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">{cert.date}</span>
                </div>

                {/* Title & Issuer */}
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-blue-400 font-semibold mb-4">{cert.issuer}</p>

                {/* Skills highlighted */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsHighlighted.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[9px] sm:text-[10px] font-semibold text-slate-400 bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ID & Verification Button */}
              <div className="border-t border-white/[0.04] pt-4 mt-auto flex items-center justify-between">
                <div className="text-[10px] font-mono text-slate-500">
                  ID: <span className="text-slate-400">{cert.credentialId}</span>
                </div>
                
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Verify
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
