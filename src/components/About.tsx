"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Heart } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Globe,
    title: "International Law",
    description: "Specialization in international and European law with a focus on human rights.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "VWO Culture & Society with outstanding academic results and bilingual education.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description: "Active volunteer at VluchtelingenWerk, helping refugees navigate legal systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 hidden md:block">
        <Image src="/images/scales.jpg" alt="" fill sizes="50vw" className="object-cover" />
      </div>

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
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Who am <span className="font-semibold text-gradient">I</span>?
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Portrait - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-2 max-w-xs mx-auto lg:max-w-none"
          >
            <div className="relative">
              {/* Portrait Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/portrait.png"
                  alt="D. Sterre Hoving"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                {/* Gold Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-[var(--accent)]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-[var(--accent)]" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 glass-light rounded-2xl p-4 md:p-6 animate-float"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-4xl font-light text-[var(--accent)]">3+</p>
                  <p className="text-[8px] md:text-xs text-[var(--muted)] tracking-wider uppercase mt-1">Languages</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-3 space-y-5 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl leading-relaxed text-[var(--foreground)]">
                I am a driven law student at the <span className="text-[var(--accent)]">University of Groningen</span>, 
                with a deep passion for international and European law. My interest in justice and human rights 
                has shaped who I am today.
              </p>
              <p className="text-sm md:text-lg leading-relaxed text-[var(--muted)]">
                During high school, I studied VWO Culture & Society at the Rijnlands Lyceum Wassenaar, 
                where I developed a broad academic foundation. My bilingual education and international 
                certificates strengthened my passion for languages and cultures.
              </p>
              <p className="text-sm md:text-lg leading-relaxed text-[var(--muted)]">
                Alongside my studies, I actively volunteer at <span className="text-[var(--accent)]">VluchtelingenWerk</span> 
                {" "}(Dutch Refugee Council), where I apply my legal knowledge to help refugees. This experience 
                reinforces my conviction that law can be a powerful tool for social change.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.1)" }}
                  className="glass-light rounded-2xl p-4 md:p-6 card-glow transition-all duration-500"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-3 md:mb-4">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
