import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProjectGrid from "./components/ProjectGrid";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="min-h-screen brutal-grid overflow-x-hidden">
      <Hero />
      <Stats />
      <ProjectGrid />
      <Experience />
      
      <footer className="py-12 border-t-8 border-black bg-[#ff90e8] text-center">
        <h2 className="text-4xl font-black uppercase text-black tracking-tighter">
          Tushar Tanwar // 2026 // System Offline
        </h2>
      </footer>
    </main>
  );
}