import { GraduationCap, Briefcase } from "lucide-react";

const TimelineBlock = ({ type, title, subtitle, date, details, alignRight }) => (
  <div className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${alignRight ? 'md:flex-row-reverse' : ''} mb-12`}>
    
    {/* Center Spine Marker */}
    <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -ml-[28px] top-0 z-10">
      <div className="w-14 h-14 bg-white border-4 border-black brutal-shadow flex items-center justify-center rounded-full">
        {type === 'edu' ? <GraduationCap className="w-6 h-6 text-black" /> : <Briefcase className="w-6 h-6 text-black" />}
      </div>
    </div>

    {/* Content Card */}
    <div className="w-full md:w-5/12">
      <div className={`p-6 border-4 border-black bg-white brutal-shadow ${alignRight ? 'bg-[#fffb00]' : ''}`}>
        <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-4">
          {date}
        </div>
        <h3 className="text-2xl font-black text-black uppercase leading-tight mb-2">{title}</h3>
        <h4 className="text-black font-bold text-sm mb-4">{subtitle}</h4>
        <ul className="space-y-3">
          {details.map((detail, idx) => (
            <li key={idx} className="text-sm font-medium text-black flex items-start gap-2">
              <span className="text-[#3b82f6] font-black mt-0.5">»</span> {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-5xl font-black uppercase tracking-tighter text-black text-center mb-20">System_Logs</h2>
      
      {/* The Thick Spine */}
      <div className="hidden md:block absolute left-1/2 top-[150px] bottom-0 w-2 bg-black -ml-1"></div>

      <div className="relative z-10">
        <TimelineBlock 
          type="work"
          title="Lovely Professional University"
          subtitle="Advanced Data Structures and Algorithms"
          date="June 2025 - July 2025"
          details={[
            "Earned an 'O' grade during summer training by demonstrating mastery in Advanced Data Structures.",
            "Engineered a Credit Card Validator utilizing Luhn's Algorithm for precise checksum operations."
          ]}
          alignRight={false}
        />

        <TimelineBlock 
          type="edu"
          title="Lovely Professional University"
          subtitle="B.Tech in Computer Science and Engineering"
          date="Aug 2023 - Present"
          details={[
            "Maintaining a strong 7.9 CGPA across core engineering disciplines.",
            "Finished in the top 10 of the university-wide Cybersecurity Hackathon."
          ]}
          alignRight={true}
        />

        <TimelineBlock 
          type="edu"
          title="S.V.V.S SR. SEC. SCHOOL"
          subtitle="Intermediate & Matriculation"
          date="Apr 2019 - Mar 2022"
          details={[
            "Achieved 87% in Class 12 (Intermediate) focusing on analytical problem solving.",
            "Secured 92% in Class 10 (Matriculation) in Bhiwani, Haryana."
          ]}
          alignRight={false}
        />
      </div>
    </section>
  );
}