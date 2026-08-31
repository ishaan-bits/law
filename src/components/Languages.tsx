"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Globe, Zap } from "lucide-react";

const languages = [
  {
    name: "Dutch",
    level: "Native",
    proficiency: 10,
    flag: "🇳🇱",
    color: "bg-orange-500",
  },
  {
    name: "English",
    level: "Fluent (C1+)",
    proficiency: 10,
    flag: "🇬🇧",
    color: "bg-blue-500",
  },
  {
    name: "French",
    level: "B2 (DELF)",
    proficiency: 6,
    flag: "🇫🇷",
    color: "bg-indigo-500",
  },
  {
    name: "German",
    level: "B1 (DSD)",
    proficiency: 7,
    flag: "🇩🇪",
    color: "bg-yellow-500",
  },
];

const skills = [
  { name: "International Law", level: 90 },
  { name: "European Law", level: 85 },
  { name: "Human Rights", level: 95 },
  { name: "Refugee Law", level: 88 },
  { name: "International Humanitarian Law", level: 82 },
  { name: "Legal Research", level: 92 },
  { name: "Academic Writing", level: 90 },
  { name: "Analytical Thinking", level: 95 },
];

export default function Languages() {
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

  return (
    <section id="languages" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[var(--accent)]/3 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-[var(--accent)] tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs mb-3 md:mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Languages & <span className="font-semibold text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light">
                <span className="font-semibold">Languages</span>
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredLanguage(lang.name)}
                  onMouseLeave={() => setHoveredLanguage(null)}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl">{lang.flag}</span>
                      <span className="text-base md:text-lg font-medium">{lang.name}</span>
                    </div>
                    <span className="text-xs md:text-sm text-[var(--muted)] tracking-wider">{lang.level}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 md:h-3 bg-[var(--foreground)]/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 ${lang.color} rounded-full`}
                    />
                    {hoveredLanguage === lang.name && (
                      <div className="absolute inset-0 animate-shimmer rounded-full" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light">
                <span className="font-semibold">Legal</span> Expertise
              </h3>
            </div>

            <div className="space-y-4 md:space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-1.5 md:mb-2">
                    <span className="text-xs md:text-sm font-medium">{skill.name}</span>
                    <span className="text-[10px] md:text-xs text-[var(--accent)]">{skill.level}%</span>
                  </div>
                  <div className="relative h-1.5 md:h-2 bg-[var(--foreground)]/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 md:mt-12 glass-light rounded-xl md:rounded-2xl p-6 md:p-8 card-glow"
            >
              <h4 className="font-medium mb-3 md:mb-4 flex items-center gap-2 md:gap-3 text-base md:text-lg">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[var(--accent)]" />
                Bilingual Education
              </h4>
              <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                In addition to regular education, I attended bilingual education (TTO), 
                which significantly improved my language skills. This program offers 
                lessons in both Dutch and English, providing a strong foundation for 
                international studies and career.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
