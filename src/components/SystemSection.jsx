import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Leaf, Radar, Watch, Activity, Cpu, LayoutDashboard } from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "Raccolta dati ambientali",
    text: "Sensori per particolato fine installati in punti di misura controllati."
  },
  {
    icon: Radar,
    title: "Analisi del particolato",
    text: "Lettura PM10/PM2.5 con confronto rispetto a baseline locali."
  },
  {
    icon: Watch,
    title: "Acquisizione dal braccialetto",
    text: "Wearable multisensoriale con IMU e GSR per segnali fisiologici."
  },
  {
    icon: Activity,
    title: "Analisi tremore e stato neuro-vegetativo",
    text: "Estrazione di pattern motori e indici di risposta fisiologica."
  },
  {
    icon: Cpu,
    title: "Elaborazione AI locale",
    text: "Modelli offline per correlare dati ambientali e fisiologici."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard di lettura",
    text: "Visualizzazione comparativa con indicatori sperimentali." 
  }
];

const SystemSection = () => {
  return (
    <section id="sistema" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Come funziona"
          title="Una pipeline scientifica chiara e tracciabile"
          description="Ogni fase del sistema è progettata per conservare la qualità del dato e generare indicatori coerenti con la ricerca neuro-ambientale."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3">
                <step.icon className="text-cyan-300" size={20} />
                <span className="text-xs text-white/50">Step {index + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;