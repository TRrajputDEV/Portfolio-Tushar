import { ServerCrash, CheckCircle2 } from "lucide-react";

const ReceiptBlock = ({ title, subtitle, date, details }) => (
  <div className="relative bg-white border-x-4 border-black p-8 md:p-12 mb-0 border-b-4 border-dashed">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
      <div>
        <h3 className="text-3xl font-black text-black uppercase leading-none mb-2">{title}</h3>
        <h4 className="text-black font-bold text-lg bg-[#fffb00] inline-block px-2">{subtitle}</h4>
      </div>
      <div className="border-4 border-black px-4 py-2 bg-black text-white font-mono font-bold uppercase text-sm whitespace-nowrap brutal-shadow">
        {date}
      </div>
    </div>
    
    <div className="space-y-4 font-mono text-sm font-bold text-black/80">
      {details.map((detail, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#3b82f6]" strokeWidth={3} />
          <p>{detail}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-12">
        <ServerCrash className="w-12 h-12 text-black" />
        <h2 className="text-5xl font-black uppercase tracking-tighter text-black text-center">System_Logs</h2>
      </div>
      
      {/* The Receipt Container */}
      <div className="brutal-shadow relative">
        {/* Top edge of receipt */}
        <div className="h-4 w-full bg-white border-x-4 border-t-4 border-black"></div>

        <ReceiptBlock 
          title="Lovely Professional University"
          subtitle="Advanced Data Structures"
          date="Jun 2025 - Jul 2025"
          details={[
            "Earned an 'O' grade during summer training by demonstrating mastery in Advanced Data Structures.",
            "Engineered a Credit Card Validator utilizing Luhn's Algorithm for precise checksum operations."
          ]}
        />

        <ReceiptBlock 
          title="Lovely Professional University"
          subtitle="B.Tech in CSE (CGPA: 7.9)"
          date="Aug 2023 - Present"
          details={[
            "Maintaining a strong 7.9 CGPA across core engineering disciplines.",
            "Finished in the top 10 of the university-wide Cybersecurity Hackathon."
          ]}
        />

        <ReceiptBlock 
          title="S.V.V.S SR. SEC. SCHOOL"
          subtitle="Intermediate & Matriculation"
          date="Apr 2019 - Mar 2022"
          details={[
            "Achieved 87% in Class 12 (Intermediate) focusing on analytical problem solving.",
            "Secured 92% in Class 10 (Matriculation) in Bhiwani, Haryana."
          ]}
        />

        {/* Bottom edge of receipt */}
        <div className="h-8 w-full border-x-4 border-b-4 border-black bg-white receipt-edge rotate-180"></div>
      </div>
    </section>
  );
}