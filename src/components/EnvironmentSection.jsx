import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Cloud, BarChart3, MapPin, Gauge } from "lucide-react";

const metrics = [
  { label: "PM2.5 medio", value: "12 μg/m³", note: "Scenario urbano" },
  { label: "PM10 medio", value: "24 μg/m³", note: "Scenario urbano" },
  { label: "Picchi rilevati", value: "+38%", note: "Weekend critici" },
  { label: "Indice neuro-ambientale", value: "0,73", note: "Scala sperimentale" }
];

const cards = [
  {
    icon: Cloud,
    title: "Monitoraggio PM10 e PM2.5",
    text: "Campionamenti periodici con sensori calibrati e logging continuo."
  },
  {
    icon: MapPin,
    title: "Confronto dati locali",
    text: "Verifica con dati di riferimento regionali per validare le letture."
  },
  {
    icon: BarChart3,
    title: "Identificazione dei picchi",
    text: "Analisi dei superamenti e correlazione con segnali fisiologici." 
  },
  {
    icon: Gauge,
    title: "Indice di rischio",
    text: "Costruzione di un indicatore neuro-ambientale sperimentale."
  }
];

const EnvironmentSection = () => {
  return (
    <section id="ambiente" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Componente ambientale"
          title="Il particolato come dato scientifico, non solo numerico"
          description="Parkins-Off misura il particolato fine e lo mette in relazione con segnali fisiologici, creando un contesto misurabile per la ricerca sul rischio neurodegenerativo."
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <div key={card.title} className="glass-card p-5">
                <card.icon className="text-cyan-300" size={20} />
                <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.text}</p>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-shell p-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Indicatori</p>
            <h3 className="mt-3 text-xl font-semibold">Sintesi dei dati ambientali</h3>
            <div className="mt-6 space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/10 bg-base-900/70 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">{metric.label}</span>
                    <span className="text-lg font-semibold text-cyan-300">{metric.value}</span>
                  </div>
                  <p className="mt-1 text-xs text-white/50">{metric.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;