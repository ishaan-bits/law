"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main ref={containerRef} className="relative">
      <Navigation />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Languages />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
