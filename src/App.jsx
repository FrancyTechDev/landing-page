import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import StorySection from "./components/StorySection";
import SystemSection from "./components/SystemSection";
import EnvironmentSection from "./components/EnvironmentSection";
import BraceletSection from "./components/BraceletSection";
import AISection from "./components/AISection";
import StrengthsSection from "./components/StrengthsSection";
import ResultsSection from "./components/ResultsSection";
import TeamSection from "./components/TeamSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const sections = [
  { id: "hero", label: "Panoramica" },
  { id: "problema", label: "Il problema" },
  { id: "idea", label: "La nostra idea" },
  { id: "sistema", label: "Sistema" },
  { id: "ambiente", label: "Ambiente" },
  { id: "braccialetto", label: "Braccialetto" },
  { id: "ai", label: "AI" },
  { id: "punti-di-forza", label: "Punti di forza" },
  { id: "risultati", label: "Risultati" },
  { id: "chi-siamo", label: "Chi siamo" },
  { id: "contatti", label: "Contatti" }
];

function App() {
  return (
    <div className="min-h-screen bg-base-900 text-white">
      <Navbar sections={sections} />
      <main className="space-y-24 pb-24 pt-28">
        <HeroSection />
        <ProblemSection />
        <StorySection />
        <SystemSection />
        <EnvironmentSection />
        <BraceletSection />
        <AISection />
        <StrengthsSection />
        <ResultsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;