import { ExternalLink, Github, ArrowUpRight, Layers, Cpu, Video, Database, Globe, Box } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Penspace",
    tagline: "Real-time collaborative whiteboard",
    desc: "A live whiteboarding tool built with WebSockets to synchronize canvas states across 50+ simultaneous connections at sub-200ms latency. Handles conflict resolution and session persistence.",
    tech: ["React.js", "Socket.io", "MongoDB", "Node.js"],
    color: "bg-clay-yellow",
    accentColor: "#FFE566",
    link: "#",
    github: "https://github.com/TRrajputDEV",
    icon: Cpu,
    featured: true,
  },
  {
    title: "Pixels",
    tagline: "Secure media hosting platform",
    desc: "A full-stack media hosting web app with chunked video uploads, Cloudinary CDN delivery, token-based access control, and a rich analytics dashboard for content creators.",
    tech: ["MERN Stack", "Multer", "Cloudinary", "JWT"],
    color: "bg-clay-pink",
    accentColor: "#FFB3E6",
    link: "#",
    github: "https://github.com/TRrajputDEV",
    icon: Video,
    featured: true,
  },
  {
    title: "Narrative",
    tagline: "Enterprise content management system",
    desc: "An enterprise-grade CMS with optimised content hierarchies, Redux-powered state management, and Appwrite backend. Cut content update time by 60% while hardening auth security.",
    tech: ["React.js", "Appwrite", "Redux", "TailwindCSS"],
    color: "bg-clay-green",
    accentColor: "#A8F0C6",
    link: "https://narrativio.netlify.app/",
    github: "https://github.com/TRrajputDEV",
    icon: Database,
    featured: true,
  },
];

const archiveProjects = [
  {
    title: "Process Optimizer",
    desc: "AI-driven utility to streamline and automate daily digital tasks using Gemini API.",
    tech: "React · Gemini API",
    link: "https://snow-ai-ml7k.vercel.app/",
    github: "#",
    color: "#D4BAFF",
  },
  {
    title: "ShopCRM",
    desc: "Customer relationship management interface tailored for digital storefronts.",
    tech: "React · Node.js",
    link: "#",
    github: "https://github.com/TRrajputDEV/ShopCRM.git",
    color: "#FFD0A8",
  },
  {
    title: "Portfolio V1",
    desc: "The previous iteration of my personal developer portfolio — brutalist edition.",
    tech: "React · Tailwind",
    link: "#",
    github: "#",
    color: "#A8D8FF",
  },
  {
    title: "CC Validator",
    desc: "Algorithmic credit card checksum validation utility using Luhn's Algorithm.",
    tech: "C++",
    link: "#",
    github: "#",
    color: "#FFB3B3",
  },
];

function FeaturedCard({ project, index }) {
  const Icon = project.icon;
  const isLarge = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120, damping: 20 }}
      className={`clay-card ${project.color} flex flex-col overflow-hidden ${isLarge ? "lg:row-span-2" : ""}`}
    >
      {/* Top section */}
      <div className="relative p-7 pb-5 z-10">
        {/* Background icon */}
        <Icon
          className="absolute -top-2 -right-2 opacity-[0.08] transition-transform duration-500 group-hover:scale-110"
          style={{ width: 120, height: 120 }}
          strokeWidth={1}
        />

        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="clay-section-label bg-white/60 text-gray-700 mb-3 text-[10px]">
              {project.tagline}
            </div>
            <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-none">
              {project.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-clay-sm bg-white/60 flex items-center justify-center shadow-clay-sm shrink-0">
            <Icon className="w-5 h-5 text-gray-800" strokeWidth={2} />
          </div>
        </div>

        <p className="text-gray-700 font-medium text-sm leading-relaxed">
          {project.desc}
        </p>
      </div>

      {/* Tech chips */}
      <div className="px-7 pb-5 flex flex-wrap gap-2 z-10 relative">
        {project.tech.map((t) => (
          <span
            key={t}
            className="clay-tag px-3 py-1.5 bg-white/60 text-gray-800"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto px-7 pb-7 flex gap-3 z-10 relative">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="clay-btn flex items-center gap-2 px-5 py-2.5 bg-white/70 text-gray-900 text-xs"
        >
          <Github className="w-3.5 h-3.5" />
          Source
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="clay-btn flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs"
        >
          <Globe className="w-3.5 h-3.5" />
          Live Demo
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

function ArchiveCard({ project, index }) {
  return (
    <motion.a
      href={project.github !== "#" ? project.github : project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 160, damping: 22 }}
      className="clay-card-sm p-5 flex flex-col gap-3 cursor-pointer group"
      style={{ backgroundColor: project.color }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-base font-black text-gray-900 tracking-tight">{project.title}</h4>
          <ArrowUpRight className="w-4 h-4 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-gray-700 text-xs font-medium leading-relaxed mb-3">
          {project.desc}
        </p>
        <span className="clay-tag px-2.5 py-1 bg-white/60 text-gray-700 text-[10px]">
          {project.tech}
        </span>
      </div>
    </motion.a>
  );
}

export default function ProjectGrid() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-4 mb-12"
      >
        <div className="clay-section-label bg-clay-purple text-gray-800">
          <Layers className="w-3.5 h-3.5" />
          Selected Work
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
          Featured
          <br />
          <span className="clay-gradient-text">Projects</span>
        </h2>
        <p className="text-gray-500 font-medium max-w-md text-sm leading-relaxed">
          A curated set of full-stack applications I've built — each solving a real problem with clean code and thoughtful UX.
        </p>
      </motion.div>

      {/* ── Featured grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* ── Archive section ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-4 mb-8"
      >
        <div className="clay-section-label bg-clay-orange text-gray-800">
          <Box className="w-3.5 h-3.5" />
          Other Builds
        </div>
        <h3 className="text-3xl font-black text-gray-900 tracking-tight">
          Archive
        </h3>
        <p className="text-gray-500 font-medium text-sm">
          Smaller experiments, utilities, and side projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {archiveProjects.map((project, i) => (
          <ArchiveCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}