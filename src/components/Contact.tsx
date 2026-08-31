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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[var(--accent)]/3 rounded-full blur-[100px]" />
      </div>

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
            Contact
          </p>
          <h2 className="text-5xl md:text-6xl font-light">
            Get in <span className="font-semibold text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-3xl font-light mb-8">
              Let&apos;s <span className="font-semibold">connect</span>
            </h3>
            
            <p className="text-[var(--muted)] leading-relaxed mb-10 text-lg">
              Do you have questions about my experience, would you like to collaborate, 
              or do you have any other inquiry? I&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10, backgroundColor: "rgba(201, 169, 110, 0.05)" }}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)] tracking-wider uppercase">Location</p>
                  <p className="text-lg font-medium">Groningen, Netherlands</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, backgroundColor: "rgba(201, 169, 110, 0.05)" }}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)] tracking-wider uppercase">Email</p>
                  <p className="text-lg font-medium">sterre.hoving@email.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, backgroundColor: "rgba(201, 169, 110, 0.05)" }}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)] tracking-wider uppercase">LinkedIn</p>
                  <p className="text-lg font-medium">linkedin.com/in/sterrehoving</p>
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
            <form onSubmit={handleSubmit} className="glass-light rounded-3xl p-10 card-glow">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-3 text-[var(--muted)] tracking-wider uppercase">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" }}
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-3 text-[var(--muted)] tracking-wider uppercase">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" }}
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-3 text-[var(--muted)] tracking-wider uppercase">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" }}
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-all duration-300 min-h-[160px] resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201, 169, 110, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[var(--accent)] text-[var(--background)] rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-[var(--accent-dark)] transition-all duration-300 disabled:opacity-50 tracking-wider uppercase text-sm"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[var(--background)]/30 border-t-[var(--background)] rounded-full"
                    />
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
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
