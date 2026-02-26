import { Github, Linkedin, ArrowUpRight, Asterisk, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-6 border-b-4 border-black bg-[#f4f4f0] overflow-hidden">
      
      {/* Background Graphic Illustration */}
      <Asterisk className="absolute -top-32 -right-32 w-[600px] h-[600px] text-black/5 animate-[spin_20s_linear_infinite]" strokeWidth={1} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Massive Typography */}
        <div className="lg:col-span-8">
          <div className="inline-block border-4 border-black px-4 py-1 bg-[#fffb00] font-mono font-black uppercase text-sm mb-6 brutal-shadow">
            System.Active // India
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase break-words text-black">
            Tushar <br/> Tanwar
          </h1>
        </div>

        {/* Action & Illustration Block */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          <div className="border-4 border-black bg-white p-6 brutal-shadow relative overflow-hidden group">
            <Zap className="absolute -bottom-4 -right-4 w-32 h-32 fill-[#ff90e8] text-black group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
            <p className="text-black font-black text-2xl uppercase leading-snug mb-2 relative z-10">
              Building highly concurrent real-time architectures.
            </p>
            <p className="font-mono text-sm font-bold bg-black text-white inline-block px-2 py-1 relative z-10">
              MERN & SOCKET.IO
            </p>
          </div>
          
          <a href="/Drive CV Feb 2025.pdf" target="_blank" className="group flex items-center justify-between p-4 bg-[#3b82f6] border-4 border-black text-white font-black text-xl uppercase tracking-widest brutal-shadow brutal-shadow-hover cursor-pointer">
            <span>Deploy Resume</span>
            <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
          </a>
          
          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com/TRrajputDEV" target="_blank" className="flex justify-center items-center p-4 bg-[#ff90e8] border-4 border-black text-black brutal-shadow brutal-shadow-hover">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/tushartanwar183" target="_blank" className="flex justify-center items-center p-4 bg-[#ff90e8] border-4 border-black text-black brutal-shadow brutal-shadow-hover">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}