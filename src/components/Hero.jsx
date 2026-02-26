import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Zap, GripHorizontal, CircleDashed } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-20 px-6 border-b-4 border-black bg-[#f4f4f0] overflow-hidden flex items-center">
      
      {/* Interactive Draggable Sticker */}
      <motion.div 
        drag 
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
        whileDrag={{ scale: 1.1, rotate: 5 }}
        className="absolute top-32 right-10 lg:right-32 z-50 bg-[#fffb00] border-4 border-black p-4 brutal-shadow rotate-[-10deg] cursor-grab active:cursor-grabbing w-48"
      >
        <GripHorizontal className="w-8 h-8 text-black mb-2 opacity-50 mx-auto" />
        <p className="font-black uppercase text-center text-sm leading-tight">
          Drag Me <br/> Open To Work
        </p>
      </motion.div>

      {/* Rotating Background Illustration */}
      <CircleDashed className="absolute -left-32 -bottom-32 w-[600px] h-[600px] text-black/5 animate-[spin_30s_linear_infinite]" strokeWidth={1} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Massive Typography */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border-4 border-black px-4 py-1 bg-[#4ade80] font-mono font-black uppercase text-sm mb-6 brutal-shadow"
          >
            <span className="w-2 h-2 bg-black rounded-full animate-ping"></span>
            Software Engineer // India
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-[11rem] font-black leading-[0.80] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
          >
            Tushar <br/> Tanwar
          </motion.h1>
        </div>

        {/* Action Block */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="border-4 border-black bg-white p-6 brutal-shadow relative overflow-hidden group"
          >
            <Zap className="absolute -bottom-4 -right-4 w-32 h-32 fill-[#ff90e8] text-black group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1} />
            <p className="text-black font-black text-3xl uppercase leading-none mb-4 relative z-10">
              Building concurrent real-time architectures.
            </p>
            <div className="flex gap-2 relative z-10">
              <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">MERN</span>
              <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">SOCKET.IO</span>
            </div>
          </motion.div>
          
          <a href="/Drive CV Feb 2025.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-[#3b82f6] border-4 border-black text-white font-black text-xl uppercase tracking-widest brutal-shadow brutal-shadow-hover cursor-pointer">
            <span>Deploy Resume</span>
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}