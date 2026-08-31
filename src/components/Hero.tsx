"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Scale } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Legal scales of justice"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Scale Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="mb-10"
        >
          <div className="w-24 h-24 rounded-full border border-[var(--accent)]/30 flex items-center justify-center animate-glow">
            <Scale className="w-10 h-10 text-[var(--accent)]" />
          </div>
        </motion.div>

        {/* Name */}
        <div className="text-center max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[var(--accent)] tracking-[0.5em] uppercase text-xs md:text-sm mb-6"
          >
            International & European Law
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8"
          >
            <span className="font-semibold">D.</span> Sterre{" "}
            <span className="font-semibold">H</span>oving
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[var(--accent)]" />
            <p className="text-[var(--muted)] tracking-[0.2em] uppercase text-sm">
              Law Student · University of Groningen
            </p>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[var(--accent)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-14"
          >
            Passionate about international law, human rights, and the power of law 
            to make a difference in the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 169, 110, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 bg-[var(--accent)] text-[var(--background)] rounded-full text-sm tracking-widest uppercase font-medium hover:bg-[var(--accent-dark)] transition-all duration-300"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(201, 169, 110, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 border border-[var(--accent)]/30 rounded-full text-sm tracking-widest uppercase text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
