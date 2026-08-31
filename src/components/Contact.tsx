"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, ExternalLink, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 md:top-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-[var(--accent)]/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-36 h-36 md:w-72 md:h-72 bg-[var(--accent)]/3 rounded-full blur-[60px] md:blur-[100px]" />
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
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Get in <span className="font-semibold text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-light mb-6 md:mb-8">
              Let&apos;s <span className="font-semibold">connect</span>
            </h3>
            
            <p className="text-[var(--muted)] leading-relaxed mb-8 md:mb-10 text-sm md:text-lg">
              Do you have questions about my experience, would you like to collaborate, 
              or do you have any other inquiry? I&apos;d love to hear from you.
            </p>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-xl md:rounded-2xl hover:bg-[var(--accent)]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-[var(--muted)] tracking-wider uppercase">Location</p>
                  <p className="text-sm md:text-lg font-medium">Groningen, Netherlands</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-xl md:rounded-2xl hover:bg-[var(--accent)]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-[var(--muted)] tracking-wider uppercase">Email</p>
                  <p className="text-sm md:text-lg font-medium break-all md:break-normal">sterre.hoving@email.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-xl md:rounded-2xl hover:bg-[var(--accent)]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-[var(--muted)] tracking-wider uppercase">LinkedIn</p>
                  <p className="text-sm md:text-lg font-medium">linkedin.com/in/sterrehoving</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-light rounded-2xl md:rounded-3xl p-6 md:p-10 card-glow">
              <div className="space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] md:text-sm mb-2 md:mb-3 text-[var(--muted)] tracking-wider uppercase">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" }}
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-all duration-300 text-sm md:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] md:text-sm mb-2 md:mb-3 text-[var(--muted)] tracking-wider uppercase">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" }}
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-all duration-300 text-sm md:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] md:text-sm mb-2 md:mb-3 text-[var(--muted)] tracking-wider uppercase">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" }}
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-all duration-300 min-h-[120px] md:min-h-[160px] resize-none text-sm md:text-base"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201, 169, 110, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 md:py-5 bg-[var(--accent)] text-[var(--background)] rounded-lg md:rounded-xl font-medium flex items-center justify-center gap-2 md:gap-3 hover:bg-[var(--accent-dark)] transition-all duration-300 disabled:opacity-50 tracking-wider uppercase text-xs md:text-sm"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 md:w-5 md:h-5 border-2 border-[var(--background)]/30 border-t-[var(--background)] rounded-full"
                    />
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
