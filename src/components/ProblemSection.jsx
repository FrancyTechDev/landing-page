import { Brain, CloudFog, ScanSearch, AlertTriangle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Brain,
    title: "Una patologia rilevante",
    text: "Il Parkinson è una malattia neurodegenerativa complessa, con impatti sulla qualità della vita e sulla gestione quotidiana dei sintomi."
  },
  {
    icon: CloudFog,
    title: "L'aria come fattore di rischio",
    text: "La ricerca suggerisce possibili correlazioni tra esposizione al particolato fine e rischio neurodegenerativo."
  },
  {
    icon: ScanSearch,
    title: "Dati parziali",
    text: "Molti sistemi monitorano solo il movimento, senza integrare il contesto ambientale e gli indici fisiologici."
  },
  {
    icon: AlertTriangle,
    title: "Manca una visione integrata",
    text: "Serve una lettura multidimensionale che metta insieme ambiente, corpo e interpretazione scientifica."
  }
];

const ProblemSection = () => {
  return (
    <section id="problema" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Il problema"
          title="Comprendere il Parkinson oltre il sintomo"
          description="L'inquinamento atmosferico è un elemento spesso ignorato nelle analisi neurodegenerative. Parkins-Off nasce per colmare questo vuoto con dati affidabili e contestualizzati."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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