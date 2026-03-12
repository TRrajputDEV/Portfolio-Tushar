import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProjectGrid from "./components/ProjectGrid";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function Marquee() {
  const items =
    "REACT · NODE.JS · MONGODB · SOCKET.IO · EXPRESS · TYPESCRIPT · NEXT.JS · DOCKER · REDIS · TAILWINDCSS · ";

  return (
    <div className="overflow-hidden border-y border-dark-400/40 py-5 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl text-dark-600 font-bold tracking-[0.2em] px-4"
          >
            {items}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[100]"
      />

      <Navigation />

      <main className="bg-dark overflow-x-hidden">
        <Hero />
        <Marquee />
        <Stats />
        <ProjectGrid />
        <Experience />
        <Footer />
      </main>
    </>
  );
}