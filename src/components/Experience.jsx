import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CheckCircle2, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Freelance Full-Stack Developer",
    subtitle: "Remote · Contract",
    date: "2024 – Present",
    color: "bg-clay-green",
    accent: "#A8F0C6",
    details: [
      "Designed and shipped production-ready full-stack web apps for clients — from architecture to deployment.",
      "Integrated third-party APIs (payment gateways, OAuth, cloud storage) into custom Node.js backends.",
      "Delivered responsive, accessible React UIs with a focus on performance and clean component design.",
    ],
  },
  {
    type: "education",
    title: "Lovely Professional University",
    subtitle: "B.Tech in Computer Science Engineering",
    date: "Aug 2023 – Present",
    color: "bg-clay-blue",
    accent: "#A8D8FF",
    details: [
      "Maintaining a CGPA of 7.9 across core CS disciplines including DSA, OS, DBMS, and Networks.",
      "Secured a Top 10 finish in the university-wide Cybersecurity Hackathon out of 200+ teams.",
      "Led study groups focused on competitive programming and full-stack development.",
    ],
  },
  {
    type: "education",
    title: "Advanced Data Structures Training",
    subtitle: "Lovely Professional University · Summer Intensive",
    date: "Jun 2025 – Jul 2025",
    color: "bg-clay-purple",
    accent: "#D4BAFF",
    details: [
      "Achieved top honours during the summer training by mastering complex data structures and algorithms.",
      "Built a working Credit Card Validator using Luhn's Algorithm for precise checksum verification.",
      "Strengthened problem-solving speed and accuracy — maintained 400+ LeetCode solutions streak.",
    ],
  },
  {
    type: "education",
    title: "S.V.V.S Senior Secondary School",
    subtitle: "Intermediate (Class XII) & Matriculation",
    date: "Apr 2019 – Mar 2022",
    color: "bg-clay-orange",
    accent: "#FFD0A8",
    details: [
      "Completed Class XII with 87% — specialised in Mathematics and Science with strong analytical focus.",
      "Graduated Class X with 92% in Bhiwani, Haryana — consistent top performer across all subjects.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-4 mb-14"
      >
        <div className="clay-section-label bg-clay-yellow text-gray-800">
          <Briefcase className="w-3.5 h-3.5" />
          Background
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
          Experience &
          <br />
          <span className="clay-gradient-text">Education</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-clay-yellow via-clay-purple to-clay-orange opacity-40 hidden md:block" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120, damping: 20 }}
              className="md:pl-20 relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-3.5 top-7 w-5 h-5 rounded-full border-4 border-white shadow-clay-sm hidden md:block"
                style={{ backgroundColor: exp.accent }}
              />

              <div className={`clay-card ${exp.color} p-7`}>
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.type === "work"
                          ? <Briefcase className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
                          : <GraduationCap className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
                        }
                        <span className="font-mono-clay text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                          {exp.type === "work" ? "Work" : "Education"}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 font-semibold text-sm mt-1">{exp.subtitle}</p>
                    </div>

                    <div
                      className="clay-chip px-4 py-2 text-gray-700 shrink-0 flex items-center gap-2 self-start"
                      style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
                    >
                      <Calendar className="w-3 h-3" />
                      {exp.date}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="clay-divider" />

                  {/* Details */}
                  <div className="space-y-3">
                    {exp.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5 text-gray-600"
                          strokeWidth={2.5}
                        />
                        <p className="text-gray-700 text-sm font-medium leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}