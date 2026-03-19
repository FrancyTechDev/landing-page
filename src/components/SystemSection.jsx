import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Leaf, Watch, Cpu, LayoutDashboard, Microchip, Network } from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "Raccolta dati ambientali",
    text: "Monitoraggio controllato del particolato."
  },
  {
    icon: Watch,
    title: "Acquisizione dal braccialetto",
    text: "Wearable multisensoriale per segnali fisiologici."
  },
  {
    icon: Microchip,
    title: "Firmware e sincronizzazione",
    text: "Gestione locale dei dati e sincronizzazione sicura."
  },
  {
    icon: Cpu,
    title: "Elaborazione AI locale",
    text: "Elaborazione offline per interpretare i dati."
  },
  {
    icon: Network,
    title: "Pipeline software",
    text: "Normalizzazione e fusione dei segnali in forma aggregata."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard di lettura",
    text: "Sintesi visiva per una lettura chiara."
  }
];

const SystemSection = () => {
  return (
    <section id="sistema" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Come funziona"
          title="Una pipeline essenziale e protetta"
          description="Descriviamo solo la struttura generale, mantenendo riservati i dettagli sensibili."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="grid gap-4 md:grid-cols-2">
          <div className="section-shell p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Hardware</p>
            <h3 className="mt-3 text-xl font-semibold">Modulo ambientale + wearable</h3>
            <p className="mt-2 text-sm text-white/70">
              Sensori ambientali, unità di controllo e braccialetto multisensoriale con
              acquisizione locale. Struttura modulare e replicabile.
            </p>
          </div>
          <div className="section-shell p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Software</p>
            <h3 className="mt-3 text-xl font-semibold">Pipeline e dashboard</h3>
            <p className="mt-2 text-sm text-white/70">
              Raccolta, pulizia e fusione dei dati con indicatori sintetici. Visualizzazione
              chiara, pensata per lettura scientifica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
