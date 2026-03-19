import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Layers, HardDrive, Watch, HeartPulse, Globe2 } from "lucide-react";

const strengths = [
  {
    icon: Layers,
    title: "Integrazione multidisciplinare",
    text: "Unione di ambiente, salute e tecnologia."
  },
  {
    icon: HardDrive,
    title: "Sistema locale/offline",
    text: "Elaborazione autonoma e controllata."
  },
  {
    icon: Watch,
    title: "Wearable multisensoriale",
    text: "Raccolta dati fisiologici in modo non invasivo."
  },
  {
    icon: HeartPulse,
    title: "Focus sulla prevenzione",
    text: "Attenzione a qualità della vita e monitoraggio."
  },
  {
    icon: Globe2,
    title: "Ambiente e salute",
    text: "Lettura contestualizzata dei dati."
  }
];

const StrengthsSection = () => {
  return (
    <section id="punti-di-forza" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Punti di forza"
          title="Perché Parkins-Off resta credibile e solido"
          description="Punti di forza sintetici, senza entrare in dettagli proprietari."
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
