import { Target, GitCommit, Trophy, Zap } from "lucide-react";

const StatBlock = ({ icon: Icon, value, label, color, sourceStr }) => (
  <div className={`group flex flex-col justify-between p-6 border-4 border-black ${color} brutal-shadow transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none cursor-default`}>
    <div className="flex justify-between items-start mb-8">
      <div className="p-3 bg-white border-4 border-black brutal-shadow">
        <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
      </div>
    </div>
    <div>
      <h3 className="text-5xl font-black text-black tracking-tighter mb-2">{value}</h3>
      <p className="text-black font-bold uppercase text-sm">{label} {sourceStr}</p>
    </div>
  </div>
);

export default function Stats() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatBlock 
          icon={Target} 
          value="400+" 
          label="LeetCode Solved" 
          color="bg-[#fffb00]"
          sourceStr=""
        />
        <StatBlock 
          icon={GitCommit} 
          value="500+" 
          label="GitHub Commits" 
          color="bg-[#4ade80]"
          sourceStr=""
        />
        <StatBlock 
          icon={Trophy} 
          value="Top 10" 
          label="LPU Hackathon" 
          color="bg-[#ff90e8]"
          sourceStr=""
        />
        <StatBlock 
          icon={Zap} 
          value="<200ms" 
          label="Sync Latency" 
          color="bg-[#3b82f6]"
          sourceStr=""
        />
      </div>
    </section>
  );
}