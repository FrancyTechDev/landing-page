import { Brain, CloudFog, ScanSearch, AlertTriangle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Brain,
    title: "Una sfida neurologica reale",
    text: "Il Parkinson richiede osservazioni continue e dati di qualità."
  },
  {
    icon: CloudFog,
    title: "Contesto ambientale trascurato",
    text: "L'esposizione al particolato è spesso esclusa dalle analisi."
  },
  {
    icon: ScanSearch,
    title: "Serve integrazione",
    text: "I sistemi attuali non uniscono segnali fisiologici e ambiente."
  }
];

const ProblemSection = () => {
  return (
    <section id="problema" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Il problema"
          title="Comprendere il Parkinson con più contesto"
          description="Parkins-Off nasce per offrire una lettura integrata e prudente, senza rivelare dettagli sensibili del progetto."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-card p-5"
            >
              <card.icon className="text-cyan-300" size={22} />
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
