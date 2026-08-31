"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookMarked } from "lucide-react";
import Image from "next/image";

const education = [
  {
    period: "2023 - present",
    title: "LL.B. International and European Law",
    institution: "University of Groningen",
    location: "Groningen",
    description: "Bachelor of Laws with a focus on international and European law.",
    icon: GraduationCap,
    current: true,
  },
  {
    period: "2019 - 2021",
    title: "PreUniversity Program",
    institution: "Leiden University",
    location: "Leiden",
    description: "Preparatory program for university studies.",
    icon: BookMarked,
  },
  {
    period: "2015 - 2021",
    title: "VWO Culture & Society",
    institution: "Rijnlands Lyceum Wassenaar",
    location: "Wassenaar",
    description: "Subjects: Dutch (7), English (9), French (7), German (6), History (6), Geography (7), Art (7)",
    icon: GraduationCap,
  },
  {
    period: "2015 - 2018",
    title: "Bilingual Education (TTO)",
    institution: "Rijnlands Lyceum Wassenaar",
    location: "Wassenaar",
    description: "Dutch-English bilingual education program.",
    icon: BookMarked,
  },
  {
    period: "2015 - 2021",
    title: "Art Program",
    institution: "Royal Academy of Art",
    location: "The Hague",
    description: "Artistic development alongside regular education.",
    icon: Award,
  },
];

const certificates = [
  {
    period: "2018 - 2021",
    title: "International Baccalaureate (IB)",
    institution: "Rijnlands Lyceum Wassenaar",
  },
  {
    period: "2018",
    title: "DELF French Diploma",
    institution: "Gymnasium Haganum, The Hague",
    level: "B2",
  },
  {
    period: "2019",
    title: "Deutsch Sprachdiplom (DSD)",
    institution: "Rijnlands Lyceum Wassenaar",
    level: "B1",
  },
  {
    period: "2022 - 2023",
    title: "Human Rights",
    institution: "Leiden University",
  },
  {
    period: "July 2023",
    title: "International Humanitarian Law",
    institution: "Grotius Centre, Leiden University",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/education-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/95 to-[var(--background)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-[var(--accent)] tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs mb-3 md:mb-4">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Academic <span className="font-semibold text-gradient">Background</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent" />
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent" />

          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative mb-10 md:mb-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`w-3 h-3 md:w-5 md:h-5 rounded-full border-2 ${
                    item.current
                      ? "bg-[var(--accent)] border-[var(--accent)] animate-glow"
                      : "bg-[var(--background)] border-[var(--accent)]/50"
                  }`}
                />
              </div>

              {/* Content Card - Mobile: full width, Desktop: alternating */}
              <div className="ml-10 md:ml-0 md:w-5/12 md:even:ml-auto md:odd:pr-20 md:even:pl-20">
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.1)" }}
                  className={`glass-light rounded-xl md:rounded-2xl p-5 md:p-8 card-glow transition-all duration-500 ${
                    item.current ? "border border-[var(--accent)]/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center ${
                      item.current ? "bg-[var(--accent)]" : "bg-[var(--accent)]/10"
                    }`}>
                      <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.current ? "text-[var(--background)]" : "text-[var(--accent)]"}`} />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-[var(--accent)] tracking-wider">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="ml-2 md:ml-3 px-2 md:px-3 py-0.5 md:py-1 bg-[var(--accent)] text-[var(--background)] text-[10px] md:text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-base md:text-xl font-medium mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-[var(--accent)] text-xs md:text-sm mb-1">{item.institution}</p>
                  <p className="text-[var(--muted)] text-xs md:text-sm mb-2 md:mb-3">{item.location}</p>
                  <p className="text-[var(--muted)] text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 md:mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-light text-center mb-10 md:mb-16">
            <span className="font-semibold text-gradient">Certificates</span> & Diplomas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.1)" }}
                className="glass-light rounded-xl p-4 md:p-6 card-glow transition-all duration-500"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-[var(--accent)]" />
                  </div>
                  <span className="text-[10px] md:text-xs text-[var(--accent)] tracking-wider">{cert.period}</span>
                  {cert.level && (
                    <span className="ml-auto px-2 md:px-3 py-0.5 md:py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] md:text-xs rounded-full">
                      Level {cert.level}
                    </span>
                  )}
                </div>
                <h4 className="font-medium text-sm md:text-base mb-1">{cert.title}</h4>
                <p className="text-[var(--muted)] text-xs md:text-sm">{cert.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
