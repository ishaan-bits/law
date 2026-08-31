"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, BookOpen, Coffee, Anchor } from "lucide-react";

const experiences = [
  {
    period: "September 2022 - present",
    title: "Volunteer Legal Assistant",
    company: "VluchtelingenWerk (Dutch Refugee Council)",
    location: "Netherlands",
    description: "Advising and supporting refugees on legal matters, with a focus on international refugee law.",
    icon: Users,
    current: true,
    color: "from-[var(--accent)]/20 to-transparent",
  },
  {
    period: "May 2023 - September 2023",
    title: "Host / Bartender",
    company: "Flagship",
    location: "Amsterdam",
    description: "Entertaining and serving guests on boat tours through the Amsterdam canals.",
    icon: Anchor,
    current: false,
    color: "from-blue-500/10 to-transparent",
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
    <section id="experience" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-[var(--accent)]/5 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-[var(--accent)]/3 rounded-full blur-[80px] md:blur-[120px]" />

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
            Work Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Professional <span className="font-semibold text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-4 md:space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ x: 8, scale: 1.01 }}
              className="group relative"
            >
              <div className={`glass-light rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 card-glow transition-all duration-500 ${
                exp.current ? "border border-[var(--accent)]/30" : ""
              }`}>
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center ${
                        exp.current
                          ? "bg-[var(--accent)] text-[var(--background)]"
                          : "bg-[var(--accent)]/10 text-[var(--accent)]"
                      }`}
                    >
                      <exp.icon className="w-5 h-5 md:w-7 md:h-7" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1">{exp.title}</h3>
                        <p className="text-[var(--accent)] text-sm md:text-lg">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                        <span className="text-xs md:text-sm text-[var(--muted)]">{exp.location}</span>
                        {exp.current && (
                          <span className="px-3 py-1 md:px-4 md:py-1.5 bg-[var(--accent)] text-[var(--background)] text-[10px] md:text-xs rounded-full font-medium tracking-wider uppercase">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-[var(--accent)]/70 mt-1 md:mt-2 tracking-wider">{exp.period}</p>
                    <p className="text-[var(--muted)] text-xs md:text-base leading-relaxed mt-2 md:mt-4">{exp.description}</p>
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
