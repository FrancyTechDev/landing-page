import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  HardDrive,
  Watch,
  HeartPulse,
  Globe2,
  GraduationCap
} from "lucide-react";

const strengths = [
  {
    icon: Layers,
    title: "Integrazione multidisciplinare",
    text: "Ambiente, bioingegneria, elettronica, data science in un unico progetto." 
  },
  {
    icon: Sparkles,
    title: "Approccio innovativo",
    text: "Uno sguardo scientifico sul rischio neurodegenerativo con strumenti reali." 
  },
  {
    icon: HardDrive,
    title: "Sistema locale/offline",
    text: "Elaborazione indipendente dalla rete per continuità e controllo dei dati." 
  },
  {
    icon: Watch,
    title: "Wearable multisensoriale",
    text: "Sensori IMU e GSR per leggere micro-segnali fisiologici." 
  },
  {
    icon: HeartPulse,
    title: "Prevenzione e qualità della vita",
    text: "Focalizzato su interpretazione precoce e monitoraggio evolutivo." 
  },
  {
    icon: Globe2,
    title: "Ambiente e salute",
    text: "Correlazione tra inquinamento e indicatori neuro-vegetativi." 
  },
  {
    icon: GraduationCap,
    title: "Valore educativo",
    text: "Progetto didattico avanzato con metodo e rigore scientifico." 
  }
];

const StrengthsSection = () => {
  return (
    <section id="punti-di-forza" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Punti di forza"
          title="Perché Parkins-Off è un progetto di livello concorsuale"
          description="Una piattaforma sperimentale che unisce rigore scientifico e design tecnologico, con obiettivi chiari e verificabili."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5"
            >
              <item.icon className="text-cyan-300" size={20} />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;