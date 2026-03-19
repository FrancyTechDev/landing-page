import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import ProblemSection from "./components/ProblemSection";
import SystemSection from "./components/SystemSection";
import StrengthsSection from "./components/StrengthsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const sections = [
  { id: "hero", label: "Panoramica" },
  { id: "biografie", label: "Biografie" },
  { id: "problema", label: "Il problema" },
  { id: "sistema", label: "Sistema" },
  { id: "punti-di-forza", label: "Punti di forza" },
  { id: "contatti", label: "Contatti" }
];

function App() {
  return (
    <div className="min-h-screen bg-base-900 text-white">
      <Navbar sections={sections} />
      <main className="space-y-24 pb-24 pt-28">
        <HeroSection />
        <BioSection />
        <ProblemSection />
        <SystemSection />
        <StrengthsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
