import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Penspace",
    tagline: "Real-time Collaborative Whiteboard",
    description:
      "A live whiteboarding tool using WebSockets that synchronizes canvas states across 50+ simultaneous connections at sub-200ms latency. Features conflict resolution and session persistence.",
    tech: ["React.js", "Socket.io", "MongoDB", "Node.js"],
    github: "https://github.com/TRrajputDEV",
    live: "#",
  },
  {
    num: "02",
    title: "Pixels",
    tagline: "Secure Media Hosting Platform",
    description:
      "Full-stack media hosting with chunked video uploads, Cloudinary CDN delivery, token-based access control, and a rich analytics dashboard for content creators.",
    tech: ["MERN Stack", "Multer", "Cloudinary", "JWT"],
    github: "https://github.com/TRrajputDEV",
    live: "#",
  },
  {
    num: "03",
    title: "Narrative",
    tagline: "Enterprise Content Management",
    description:
      "Enterprise-grade CMS with optimised content hierarchies, Redux-powered state management, and Appwrite backend. Cut content update time by 60% with hardened auth security.",
    tech: ["React.js", "Appwrite", "Redux", "TailwindCSS"],
    github: "https://github.com/TRrajputDEV",
    live: "https://narrativio.netlify.app/",
  },
  {
    num: "04",
    title: "Process Optimizer",
    tagline: "AI Task Automation",
    description:
      "AI-driven utility leveraging Gemini API to streamline and automate daily digital workflows with intelligent task suggestions and natural language processing.",
    tech: ["React", "Gemini API"],
    github: "#",
    live: "https://snow-ai-ml7k.vercel.app/",
  },
  {
    num: "05",
    title: "ShopCRM",
    tagline: "Customer Relationship Manager",
    description:
      "A customer relationship management interface tailored for digital storefronts with lead tracking, analytics, and automated communications.",
    tech: ["React", "Node.js"],
    github: "https://github.com/TRrajputDEV/ShopCRM.git",
    live: "#",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group relative border border-dark-400 rounded-2xl p-8 md:p-10 overflow-hidden hover:border-dark-600 transition-all duration-500"
    >
      {/* Mouse follow glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200,169,110,0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Number */}
      <span className="font-mono text-xs text-light-600 tracking-wider relative z-10">
        {project.num}
      </span>

      {/* Title & tagline */}
      <div className="mt-6 mb-4 relative z-10">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-light-50 tracking-tight group-hover:text-accent transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-light-500 text-sm mt-1.5 font-body">
          {project.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-light-600 text-sm font-light leading-relaxed mb-8 relative z-10">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono text-light-500 px-3 py-1.5 border border-dark-400 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 relative z-10">
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light-500 hover:text-accent transition-colors duration-300 flex items-center gap-1.5"
          >
            Source
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light-500 hover:text-accent transition-colors duration-300 flex items-center gap-1.5"
          >
            Live Demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="w-5 h-5 text-accent" />
      </div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="work" className="py-32 md:py-40 px-6 md:px-12">
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
            02 — Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-light-50 tracking-tight mb-4"
        >
          Selected Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-light-500 text-base font-light max-w-lg mb-16"
        >
          Full-stack applications I've built — each solving a real problem with
          clean code and thoughtful design.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-dark-400 mb-16 origin-left"
        />

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}