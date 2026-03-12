import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/TRrajputDEV" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Resume", href: "/Drive CV Feb 2025.pdf" },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-dark-400 origin-left mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-6">
              04 — Contact
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-light-50 tracking-tight leading-[1.05]">
              Let's build
              <br />
              something great
              <span className="text-accent">.</span>
            </h2>
          </motion.div>

          {/* Right — Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <div className="space-y-0">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group flex items-center justify-between py-5 border-b border-dark-400 hover:border-accent/30 transition-colors duration-300"
                >
                  <span className="text-light-400 group-hover:text-light-50 transition-colors duration-300 text-lg font-display font-medium">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-light-600 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-dark-400 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-light-600 text-xs font-mono tracking-wider">
            © 2026 Tushar Tanwar
          </p>
          <p className="text-light-600 text-xs font-mono tracking-wider">
            Full-Stack Developer · India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
