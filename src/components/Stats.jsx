import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) =>
        setValue(decimals > 0 ? v.toFixed(decimals) : Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, from, to, duration, decimals]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const stats = [
  { value: 400, suffix: "+", label: "LeetCode Problems" },
  { value: 500, suffix: "+", label: "GitHub Commits" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 7.9, suffix: "", label: "University CGPA", decimals: 1 },
];

const technologies = [
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.io",
  "Redux",
  "TypeScript",
  "Next.js",
  "Docker",
  "Redis",
  "TailwindCSS",
  "REST APIs",
];

export default function Stats() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            01 — About
          </span>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-light-50 leading-[1.1] tracking-tight mb-10"
            >
              I craft digital
              <br />
              experiences that are
              <br />
              <span className="text-accent">both beautiful</span>
              <br />
              and functional.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-light-500 text-base leading-relaxed font-light">
                I'm a full-stack developer based in India with a passion for
                building scalable web applications — from real-time collaboration
                tools to media platforms and content management systems.
              </p>
              <p className="text-light-500 text-base leading-relaxed font-light">
                My focus is on clean architecture, performant APIs, and creating
                interfaces that people actually enjoy using. Currently pursuing
                B.Tech in Computer Science at Lovely Professional University.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-dark-400 my-10 origin-left"
            />

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-mono text-xs text-light-600 uppercase tracking-[0.15em] mb-5">
                Technologies
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
                    className="text-sm text-light-400 font-mono px-4 py-2 border border-dark-400 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8 md:gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="text-5xl md:text-6xl font-display font-bold text-light-50 tracking-tight mb-2">
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <div className="text-sm text-light-500 font-body">
                    {stat.label}
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    className="h-px bg-dark-500 mt-5 origin-left group-hover:bg-accent/30 transition-colors duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-14 p-6 border border-dark-400 rounded-2xl hover:border-dark-500 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm text-emerald-400 font-medium">
                  Available for opportunities
                </span>
              </div>
              <p className="text-light-600 text-sm font-light leading-relaxed">
                Open to full-time roles, freelance projects, and interesting
                collaborations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}