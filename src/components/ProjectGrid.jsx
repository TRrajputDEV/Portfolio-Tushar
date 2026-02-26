import { ExternalLink, Github, Terminal, Cpu, Database, Video } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Penspace",
    desc: "Engineered a highly scalable real-time collaboration environment via Socket.io, handling 50+ concurrent users per session.",
    tech: ["React.js", "Socket.io", "MongoDB"],
    color: "bg-[#fffb00]",
    link: "#",
    github: "https://github.com/TRrajputDEV",
    icon: Cpu
  },
  {
    title: "Pixels",
    desc: "Built a comprehensive MERN stack platform delivering secure, scalable video streaming and granular media access controls.",
    tech: ["MERN Stack", "Multer", "Cloudinary"],
    color: "bg-[#ff90e8]",
    link: "#",
    github: "https://github.com/TRrajputDEV",
    icon: Video
  },
  {
    title: "Narrative",
    desc: "Developed a production-ready CMS with scalable architecture, reducing maintenance effort by 30% and unauthorized access.",
    tech: ["React.js", "Appwrite", "Redux"],
    color: "bg-[#4ade80]",
    link: "https://narrativio.netlify.app/",
    github: "https://github.com/TRrajputDEV",
    icon: Database
  }
];

export default function ProjectGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16 border-b-4 border-black pb-4 inline-flex">
        <Terminal className="w-12 h-12 text-black" />
        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">Executable_Files</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => {
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
              {/* Retro OS Title Bar */}
              <div className="border-b-4 border-black bg-neutral-200 p-3 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-4 h-4 border-2 border-black bg-white rounded-full"></div>
                  <div className="w-4 h-4 border-2 border-black bg-white rounded-full"></div>
                  <div className="w-4 h-4 border-2 border-black bg-white rounded-full"></div>
                </div>
                <span className="font-mono text-xs font-bold uppercase">{project.title}.exe</span>
              </div>

              {/* Header / Color Block with Huge Illustration */}
              <div className={`h-40 ${project.color} border-b-4 border-black p-6 flex items-end relative overflow-hidden`}>
                <Icon className="absolute -top-4 -right-4 w-40 h-40 text-black opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
                <h3 className="text-5xl font-black text-black uppercase relative z-10">{project.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <div>
                  <p className="text-black font-bold leading-relaxed mb-6 bg-white p-2 border-2 border-black">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
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
    </section>
  );
}