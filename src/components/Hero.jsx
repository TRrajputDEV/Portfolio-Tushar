import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Sparkles, Code2, Layers, Globe } from "lucide-react";

const TechPill = ({ label, color, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 300, damping: 18 }}
    className="clay-chip px-3 py-1.5 text-gray-800"
    style={{ backgroundColor: color }}
  >
    {label}
  </motion.span>
);

const FloatingBlob = ({ color, size, top, left, delay }) => (
  <motion.div
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    className="blob"
    style={{ backgroundColor: color, width: size, height: size, top, left }}
  />
);

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);

  return (
    <section className="relative min-h-screen pt-20 pb-24 px-6 overflow-hidden flex items-center clay-page-bg">
      {/* Ambient blobs */}
      <FloatingBlob color="#FFE566" size="400px" top="-100px" left="-80px" delay={0} />
      <FloatingBlob color="#D4BAFF" size="350px" top="20%" left="60%" delay={2} />
      <FloatingBlob color="#A8F0C6" size="300px" top="60%" left="10%" delay={4} />
      <FloatingBlob color="#FFB3E6" size="250px" top="70%" left="75%" delay={1} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <div className="clay-section-label bg-clay-green text-gray-800">
            <span className="pulse-ring w-2 h-2 bg-emerald-500 rounded-full inline-block text-emerald-500" />
            Available for full-time roles · India
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* ── Left: Name + Bio ── */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="font-mono-clay text-sm font-bold text-gray-500 uppercase tracking-widest mb-3"
              >
                Full-Stack Web Developer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="text-6xl md:text-8xl font-black leading-[0.88] tracking-tight text-gray-900"
              >
                Tushar
                <br />
                <span className="clay-gradient-text">Tanwar</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg text-gray-600 max-w-lg leading-relaxed font-medium"
            >
              I build <span className="font-bold text-gray-900">scalable full-stack web applications</span> — from real-time collaboration tools to media platforms. Passionate about clean architecture, performant APIs, and interfaces people actually enjoy using.
            </motion.p>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { label: "React.js", color: "#A8D8FF" },
                { label: "Node.js", color: "#A8F0C6" },
                { label: "MongoDB", color: "#FFD0A8" },
                { label: "Socket.io", color: "#D4BAFF" },
                { label: "Express.js", color: "#FFB3E6" },
                { label: "REST APIs", color: "#FFE566" },
              ].map((t, i) => (
                <TechPill key={t.label} label={t.label} color={t.color} delay={0.5 + i * 0.06} />
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="/Drive CV Feb 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white text-sm font-bold"
              >
                <ArrowUpRight className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/TRrajputDEV"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-sm font-bold"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn inline-flex items-center gap-2 px-7 py-3.5 bg-clay-blue text-gray-900 text-sm font-bold"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── Right: Cards stack ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Card 1 — Intro card with 3D tilt */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left - rect.width / 2);
                mouseY.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
              style={{ rotateX, rotateY, transformPerspective: 800 }}
              className="clay-card bg-clay-yellow p-6"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-clay-sm bg-white/60 flex items-center justify-center shadow-clay-sm">
                    <Code2 className="w-5 h-5 text-gray-800" />
                  </div>
                  <span className="font-mono-clay text-xs font-bold text-gray-600 uppercase tracking-wider">MERN Stack</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 leading-snug">
                  Building concurrent real-time architectures.
                </h3>
              </div>
            </motion.div>

            {/* Card 2 — Stat callout */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.42, type: "spring", stiffness: 100 }}
              className="clay-card bg-clay-purple p-6"
            >
              <div className="relative z-10 flex items-center gap-5">
                <div>
                  <div className="text-4xl font-black text-gray-900 leading-none">3+</div>
                  <div className="font-mono-clay text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">Years Coding</div>
                </div>
                <div className="w-px self-stretch bg-black/10" />
                <div>
                  <div className="text-4xl font-black text-gray-900 leading-none">10+</div>
                  <div className="font-mono-clay text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">Projects Built</div>
                </div>
                <div className="w-px self-stretch bg-black/10" />
                <div>
                  <div className="text-4xl font-black text-gray-900 leading-none">∞</div>
                  <div className="font-mono-clay text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">Curiosity</div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Currently learning */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.54, type: "spring", stiffness: 100 }}
              className="clay-card bg-clay-pink p-5"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono-clay text-xs font-bold text-gray-600 uppercase tracking-wider">Currently exploring</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Next.js", "Docker", "Redis"].map((t) => (
                    <span key={t} className="clay-tag px-3 py-1.5 bg-white/70 text-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}