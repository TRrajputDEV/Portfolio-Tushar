import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProjectGrid from "./components/ProjectGrid";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="min-h-screen clay-page-bg overflow-x-hidden">
      <Hero />
      <Stats />
      <ProjectGrid />
      <Experience />

      {/* Footer */}
      <footer className="py-16 px-6 relative overflow-hidden">
        {/* Blob accents */}
        <div className="blob bg-clay-purple w-64 h-64 bottom-0 left-0 opacity-20" />
        <div className="blob bg-clay-yellow w-48 h-48 bottom-0 right-0 opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="clay-card bg-white/70 p-10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                Tushar Tanwar
              </h2>
              <p className="text-gray-500 font-medium text-sm mt-1 font-mono-clay">
                Full-Stack Web Developer · India · 2026
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/TRrajputDEV"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn px-5 py-2.5 bg-gray-900 text-white text-xs"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn px-5 py-2.5 bg-clay-blue text-gray-900 text-xs"
              >
                LinkedIn
              </a>
              <a
                href="/Drive CV Feb 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn px-5 py-2.5 bg-clay-yellow text-gray-900 text-xs"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}