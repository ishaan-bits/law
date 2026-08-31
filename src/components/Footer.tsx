"use client";

import { motion } from "framer-motion";
import { Heart, Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-[var(--card-border)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 text-xl font-light tracking-widest uppercase"
            whileHover={{ scale: 1.05 }}
          >
            <Scale className="w-5 h-5 text-[var(--accent)]" />
            <span>
              <span className="font-semibold">S</span>terre{" "}
              <span className="font-semibold">H</span>oving
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-[var(--muted)] text-sm flex items-center gap-2">
            © {currentYear} D. Sterre Hoving. Made with{" "}
            <Heart className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)]" />
          </p>

          {/* Back to Top */}
          <motion.button
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(201, 169, 110, 0.2)" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
