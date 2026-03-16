import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { LineChart, SignalHigh, Layers3 } from "lucide-react";

const highlights = [
  {
    icon: LineChart,
    title: "Analisi più profonde",
    text: "Lettura integrata dei dati ambientali e fisiologici, con correlazioni visive." 
  },
  {
    icon: SignalHigh,
    title: "Rischio contestualizzato",
    text: "Indicatori sperimentali che tengono conto dell'esposizione reale." 
  },
  {
    icon: Layers3,
    title: "Valore sperimentale",
    text: "Una base solida per evoluzioni future, validazioni e nuovi dataset." 
  }
];

const ResultsSection = () => {
  return (
    <section id="risultati" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Risultati"
          title="Cosa dimostra Parkins-Off"
          description="Il progetto mette in evidenza come una lettura integrata ambiente-corpo possa offrire indicatori più ricchi rispetto ai sistemi tradizionali."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <item.icon className="text-cyan-300" size={20} />
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-shell p-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Placeholder grafici</p>
            <h3 className="mt-3 text-xl font-semibold">Dashboard sperimentale</h3>
            <p className="mt-2 text-sm text-white/70">
              Spazio per grafici di trend, heatmap o analisi comparative raccolte durante i test.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="h-28 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              <div className="h-28 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-white/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;