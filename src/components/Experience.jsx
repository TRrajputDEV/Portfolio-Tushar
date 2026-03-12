import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    type: "work",
    title: "Freelance Full-Stack Developer",
    company: "Remote · Contract",
    period: "2024 — Present",
    details: [
      "Designed and shipped production-ready full-stack web apps for clients — from architecture to deployment.",
      "Integrated third-party APIs (payment gateways, OAuth, cloud storage) into custom Node.js backends.",
      "Delivered responsive, accessible React UIs with focus on performance and clean component design.",
    ],
  },
  {
    type: "education",
    title: "B.Tech Computer Science Engineering",
    company: "Lovely Professional University",
    period: "2023 — Present",
    details: [
      "Maintaining a CGPA of 7.9 across core CS disciplines including DSA, OS, DBMS, and Networks.",
      "Secured Top 10 finish in university-wide Cybersecurity Hackathon out of 200+ teams.",
      "Led study groups focused on competitive programming and full-stack development.",
    ],
  },
  {
    type: "training",
    title: "Advanced Data Structures Training",
    company: "LPU · Summer Intensive",
    period: "Jun — Jul 2025",
    details: [
      "Achieved top honours mastering complex data structures and algorithms.",
      "Built a working Credit Card Validator using Luhn's Algorithm for precise checksum verification.",
      "Maintained 400+ LeetCode solutions streak strengthening problem-solving speed.",
    ],
  },
  {
    type: "education",
    title: "Senior Secondary Education",
    company: "S.V.V.S School, Bhiwani, Haryana",
    period: "2019 — 2022",
    details: [
      "Completed Class XII with 87% — specialised in Mathematics and Science.",
      "Graduated Class X with 92% — consistent top performer across all subjects.",
    ],
  },
];

function ExperienceItem({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group"
    >
      {/* Top divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="h-px bg-dark-400 origin-left mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12">
        {/* Left column — meta */}
        <div className="md:col-span-4 flex flex-wrap items-start gap-3">
          <span className="font-mono text-xs text-light-600 tracking-wider">
            {experience.period}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent/60 border border-accent/20 px-2.5 py-1 rounded-full">
            {experience.type}
          </span>
        </div>

        {/* Right column — content */}
        <div className="md:col-span-8">
          <h3 className="font-display font-bold text-xl md:text-2xl text-light-50 tracking-tight mb-1 group-hover:text-accent transition-colors duration-500">
            {experience.title}
          </h3>
          <p className="text-light-500 text-sm mb-6">{experience.company}</p>

          <ul className="space-y-3">
            {experience.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 shrink-0" />
                <span className="text-light-600 text-sm font-light leading-relaxed">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            03 — Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-light-50 tracking-tight mb-20"
        >
          Background &
          <br />
          Education
        </motion.h2>

        {/* Experience items */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}