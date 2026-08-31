"use client";

import { motion } from "framer-motion";
import { Heart, Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-16 px-4 md:px-6 border-t border-[var(--card-border)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-light tracking-widest uppercase"
            whileHover={{ scale: 1.05 }}
          >
            <Scale className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent)]" />
            <span>
              <span className="font-semibold">S</span>terre{" "}
              <span className="font-semibold">H</span>oving
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-[var(--muted)] text-xs md:text-sm flex items-center gap-1 md:gap-2">
            © {currentYear} D. Sterre Hoving. Made with{" "}
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-[var(--accent)] fill-[var(--accent)]" />
          </p>

          {/* Back to Top */}
          <motion.button
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(201, 169, 110, 0.2)" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-light flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
