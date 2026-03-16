import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Cpu, Network, CloudCog, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: CloudCog,
    title: "AI ambientale",
    text: "Modelli che sintetizzano PM10 e PM2.5, identificando pattern di esposizione e variabilità giornaliera."
  },
  {
    icon: Network,
    title: "AI del braccialetto",
    text: "Analisi dei segnali IMU e GSR per evidenziare tremori, micro-movimenti e stato neuro-vegetativo."
  },
  {
    icon: Cpu,
    title: "AI di correlazione",
    text: "Integrazione dei due domini per individuare indicatori sperimentali di rischio e risposta fisiologica."
  },
  {
    icon: ShieldCheck,
    title: "Elaborazione locale",
    text: "Pipeline offline per garantire controllo dei dati e continuità anche senza rete." 
  }
];

const AISection = () => {
  return (
    <section id="ai" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Intelligenza artificiale"
          title="AI credibile, locale, progettata per la ricerca"
          description="Parkins-Off non usa termini generici: l'AI serve a filtrare, correlare e interpretare dati reali, con modelli costruiti per un contesto sperimentale concreto."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="section-shell p-6"
            >
              <pillar.icon className="text-cyan-300" size={22} />
              <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/70">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="section-shell p-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold">Output interpretabili</h3>
              <p className="mt-3 text-sm text-white/70">
                La piattaforma genera indicatori descrittivi, grafici di correlazione e segnali di
                allerta sperimentali. Nessun automatismo opaco: ogni valore è tracciabile.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-base-900/70 p-4">
                  <p className="text-xs text-white/50">Indice integrato</p>
                  <p className="mt-2 text-lg font-semibold text-cyan-300">0,68</p>
                  <p className="mt-1 text-xs text-white/50">Scala sperimentale</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-base-900/70 p-4">
                  <p className="text-xs text-white/50">Rischio relativo</p>
                  <p className="mt-2 text-lg font-semibold text-cyan-300">+22%</p>
                  <p className="mt-1 text-xs text-white/50">Finestra 24h</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5">
              <div className="h-40 rounded-2xl bg-base-900/60" />
              <p className="mt-3 text-xs text-white/50">
                Placeholder per schemi di rete neurale o grafici di correlazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;