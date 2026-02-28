import { motion } from "framer-motion";
import { Target, GitCommit, Trophy, Zap, Code2, Star } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "400+",
    label: "LeetCode Problems",
    sub: "Solved",
    color: "bg-clay-yellow",
    iconBg: "#FFE566",
  },
  {
    icon: GitCommit,
    value: "500+",
    label: "GitHub Commits",
    sub: "& counting",
    color: "bg-clay-green",
    iconBg: "#A8F0C6",
  },

  {
    icon: Code2,
    value: "3+",
    label: "Full-Stack Projects",
    sub: "Live in production",
    color: "bg-clay-purple",
    iconBg: "#D4BAFF",
  },
  {
    icon: Star,
    value: "7.9",
    label: "University CGPA",
    sub: "B.Tech CSE",
    color: "bg-clay-orange",
    iconBg: "#FFD0A8",
  },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 200, damping: 20 }}
              className={`clay-card ${stat.color} p-5 flex flex-col gap-3 cursor-default`}
            >
              <div className="relative z-10">
                <div
                  className="w-9 h-9 rounded-clay-sm flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.55)", boxShadow: "0 2px 0 rgba(0,0,0,0.07), 0 4px 10px rgba(0,0,0,0.07)" }}
                >
                  <Icon className="w-4 h-4 text-gray-800" strokeWidth={2.5} />
                </div>
                <div className="text-2xl font-black text-gray-900 leading-none tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="font-mono-clay text-[10px] font-bold text-gray-700 uppercase tracking-wide leading-tight">
                  {stat.label}
                </div>
                <div className="text-[10px] text-gray-500 font-medium mt-0.5">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}