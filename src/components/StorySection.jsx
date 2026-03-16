import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const StorySection = () => {
  return (
    <section id="idea" className="px-6">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-shell p-6">
          <SectionHeader
            eyebrow="La nostra idea"
            title="Dalla ricerca sul campo a un sistema integrato"
            description="Parkins-Off nasce dall'osservazione di un problema reale: misurare il rischio neurodegenerativo senza isolare il corpo dal suo ambiente."
          />
          <div className="mt-6 space-y-4 text-sm text-white/70">
            <p>
              Il progetto è nato in laboratorio, confrontando dati di qualità dell'aria con segnali
              fisiologici. È emersa la necessità di unire elettronica, scienza dei dati e sensibilità
              clinica in un unico percorso.
            </p>
            <p>
              Abbiamo scelto di sviluppare un sistema completo, capace di raccogliere dati ambientali
              accurati e parametri neuro-vegetativi, per dare una lettura più completa del contesto.
            </p>
            <p>
              Non un semplice sensore, ma una piattaforma sperimentale che mette in dialogo ambiente,
              wearable e interpretazione scientifica.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4"
        >
          {[
            {
              title: "Osservazione",
              text: "Analisi di studi su particolato e neurodegenerazione."
            },
            {
              title: "Prototipazione",
              text: "Sviluppo del braccialetto multisensoriale e dei moduli ambientali."
            },
            {
              title: "Integrazione",
              text: "Creazione di una pipeline dati unificata con AI locale."
            },
            {
              title: "Validazione",
              text: "Visualizzazione e lettura comparativa su dashboard." 
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;