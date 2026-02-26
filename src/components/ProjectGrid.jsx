import { ExternalLink, Github, FolderKanban } from "lucide-react";

const projects = [
  {
    title: "Penspace",
    desc: "Engineered a highly scalable real-time collaboration environment via Socket.io, handling 50+ concurrent users per session with sub-200ms latency.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Gemini API"],
    color: "bg-[#fffb00]",
    link: "#",
    github: "https://github.com/TRrajputDEV"
  },
  {
    title: "Pixels",
    desc: "Built a comprehensive MERN stack platform delivering secure, scalable video streaming and granular media access controls.",
    tech: ["MERN Stack", "Multer", "Cloudinary"],
    color: "bg-[#ff90e8]",
    link: "#",
    github: "https://github.com/TRrajputDEV"
  },
  {
    title: "Narrative",
    desc: "Developed a production-ready CMS with scalable architecture, reducing maintenance effort by 30% and unauthorized access by 60%.",
    tech: ["React.js", "Redux Toolkit", "Appwrite"],
    color: "bg-[#4ade80]",
    link: "https://narrativio.netlify.app/",
    github: "https://github.com/TRrajputDEV"
  }
];

export default function ProjectGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <FolderKanban className="w-12 h-12 text-black" />
        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">Deployed_Builds</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col bg-white border-4 border-black brutal-shadow group">
            {/* Header / Color Block */}
            <div className={`h-32 ${project.color} border-b-4 border-black p-6 flex items-end relative overflow-hidden`}>
              <h3 className="text-4xl font-black text-black uppercase relative z-10">{project.title}</h3>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-black font-medium leading-relaxed mb-6">
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
              
              {/* Actions */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 border-4 border-black bg-white hover:bg-black hover:text-white font-black uppercase text-sm transition-colors">
                  <Github className="w-5 h-5" /> Code
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 border-4 border-black bg-[#3b82f6] text-white hover:bg-black font-black uppercase text-sm transition-colors">
                  Live <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}