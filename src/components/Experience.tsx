"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, BookOpen, Coffee, Scale } from "lucide-react";

const experiences = [
  {
    period: "September 2025 - Present",
    title: "Legal Advisor",
    company: "Groninger Studentenbond",
    location: "Groningen, Netherlands",
    description: "Providing legal advice on contract review, Dutch public and private law matters to students.",
    icon: Scale,
    current: true,
    color: "from-[var(--accent)]/20 to-transparent",
    skills: ["Legal Contract Review", "Dutch Public Law", "Dutch Private Law", "Legal Advice"],
  },
  {
    period: "August 2025 - February 2026",
    title: "Legal Intern - Family Reunification Department",
    company: "VluchtelingenWerk Nederland",
    location: "Groningen, Netherlands",
    description: "Handling family reunification cases, providing legal support and administration for refugees.",
    icon: Users,
    current: false,
    color: "from-blue-500/10 to-transparent",
    skills: ["Legal Writing", "Legal Administration", "Human Rights Law", "Dutch Public Law", "European Law", "Legal Advice", "Immigration Law"],
  },
  {
    period: "September 2022 - November 2022",
    title: "Front Desk Staff",
    company: "Sushipoint",
    location: "Leiden",
    description: "Taking orders, managing deliveries, handling cash flow, greeting customers, checking protocols, and assisting management.",
    icon: Coffee,
    current: false,
    color: "from-rose-500/10 to-transparent",
  },
  {
    period: "March 2022 - August 2022",
    title: "Homework Tutor",
    company: "After's Cool",
    location: "Wassenaar",
    description: "Guiding and supporting students with schoolwork and exams, providing individualized and personalized tutoring.",
    icon: BookOpen,
    current: false,
    color: "from-green-500/10 to-transparent",
  },
  {
    period: "December 2021 - February 2022",
    title: "Sales Promoter",
    company: "Sales Unit",
    location: "Leiden",
    description: "Daily door-to-door customer acquisition for well-known organizations and NGOs.",
    icon: Briefcase,
    current: false,
    color: "from-purple-500/10 to-transparent",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[var(--accent)]/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[var(--accent)] tracking-[0.5em] uppercase text-xs mb-4">
            Work Experience
          </p>
          <h2 className="text-5xl md:text-6xl font-light">
            Professional <span className="font-semibold text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ x: 15, scale: 1.01 }}
              className="group relative"
            >
              <div className={`glass-light rounded-2xl p-8 md:p-10 card-glow transition-all duration-500 ${
                exp.current ? "border border-[var(--accent)]/30" : ""
              }`}>
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        exp.current
                          ? "bg-[var(--accent)] text-[var(--background)]"
                          : "bg-[var(--accent)]/10 text-[var(--accent)]"
                      }`}
                    >
                      <exp.icon className="w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-medium mb-1">{exp.title}</h3>
                        <p className="text-[var(--accent)] text-lg">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-[var(--muted)]">{exp.location}</span>
                        {exp.current && (
                          <span className="px-4 py-1.5 bg-[var(--accent)] text-[var(--background)] text-xs rounded-full font-medium tracking-wider uppercase">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-[var(--accent)]/70 mt-2 tracking-wider">{exp.period}</p>
                    <p className="text-[var(--muted)] leading-relaxed mt-4">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
