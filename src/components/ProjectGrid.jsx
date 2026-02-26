import { ExternalLink, Github, FolderKanban, Cpu, Video, Database, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Penspace",
    desc: "Designed a live whiteboarding tool utilizing websockets to synchronize canvas states for over fifty simultaneous connections at extremely low latencies.",
    tech: ["React.js", "Socket.io", "MongoDB"],
    color: "bg-[#fffb00]",
    link: "#",
    github: "https://github.com/TRrajputDEV",
    icon: Cpu
  },
  {
    title: "Pixels",
    desc: "Constructed a secure media-hosting web app that handles video uploads and provides detailed dashboard analytics alongside strict token-based access limits.",
    tech: ["MERN Stack", "Multer", "Cloudinary"],
    color: "bg-[#ff90e8]",
    link: "#",
    github: "https://github.com/TRrajputDEV",
    icon: Video
  },
  {
    title: "Narrative",
    desc: "Created an enterprise-level content system focused on optimized hierarchies, significantly lowering upkeep time while drastically boosting authentication security.",
    tech: ["React.js", "Appwrite", "Redux"],
    color: "bg-[#4ade80]",
    link: "https://narrativio.netlify.app/",
    github: "https://github.com/TRrajputDEV",
    icon: Database
  }
];

const minorProjects = [
  { 
    title: "Process Optimizer", 
    desc: "AI-driven utility built to streamline and automate daily digital tasks.", 
    tech: "React, Gemini API", 
    link: "https://snow-ai-ml7k.vercel.app/", 
    github: "#" 
  },
  { 
    title: "ShopCRM", 
    desc: "Customer relationship management interface tailored for digital storefronts.", 
    tech: "React, Node.js", 
    link: "#", 
    github: "https://github.com/TRrajputDEV/ShopCRM.git" 
  },
  { 
    title: "Portfolio V1", 
    desc: "The previous iteration of my personal developer portfolio.", 
    tech: "React, Tailwind", 
    link: "#", 
    github: "#" 
  },
  { 
    title: "CC Validator", 
    desc: "Algorithmic checksum validation utility written in C++.", 
    tech: "C++", 
    link: "#", 
    github: "#" 
  }
];

export default function ProjectGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16 border-b-4 border-black pb-4 inline-flex">
        <FolderKanban className="w-12 h-12 text-black" />
        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">Featured_Works</h2>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {featuredProjects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-white border-4 border-black brutal-shadow group"
            >
              <div className={`h-40 ${project.color} border-b-4 border-black p-6 flex items-end relative overflow-hidden`}>
                <Icon className="absolute -top-4 -right-4 w-40 h-40 text-black opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
                <h3 className="text-5xl font-black text-black uppercase relative z-10">{project.title}</h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <div>
                  <p className="text-black font-bold leading-relaxed mb-6 bg-white p-2 border-2 border-black">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase border-2 border-transparent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 border-4 border-black bg-white hover:bg-[#fffb00] font-black uppercase text-sm transition-colors brutal-shadow-hover">
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 border-4 border-black bg-black text-white hover:bg-[#ff90e8] hover:text-black font-black uppercase text-sm transition-colors brutal-shadow-hover">
                    Live <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Minor Repositories List */}
      <div className="max-w-4xl">
        <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-6">Other_Archives</h3>
        <div className="flex flex-col border-4 border-black brutal-shadow bg-white">
          {minorProjects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-[#fffb00] transition-colors ${idx !== minorProjects.length - 1 ? 'border-b-4 border-black' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2 md:mb-0">
                <h4 className="text-xl font-black uppercase text-black w-48">{project.title}</h4>
                <p className="text-sm font-medium text-black/70 hidden md:block max-w-xs truncate">{project.desc}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">{project.tech}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}