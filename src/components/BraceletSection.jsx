import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Watch, Waves, Sparkles, Activity } from "lucide-react";

const features = [
  {
    icon: Watch,
    title: "IMU a 6 assi",
    text: "Misura micro-oscillazioni e pattern di movimento con alta sensibilità."
  },
  {
    icon: Waves,
    title: "Sensore GSR",
    text: "Rileva la risposta galvanica della pelle come indicatore neuro-vegetativo."
  },
  {
    icon: Activity,
    title: "Analisi del tremore",
    text: "Estrazione dei segnali di tremore in banda e valutazione di variabilità."
  },
  {
    icon: Sparkles,
    title: "Wearable non invasivo",
    text: "Design leggero e continuo, pensato per monitoraggi estesi." 
  }
];

const BraceletSection = () => {
  return (
    <section id="braccialetto" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Il braccialetto intelligente"
          title="Un wearable multisensoriale per leggere il corpo"
          description="Il braccialetto Parkins-Off integra sensori di movimento e risposta cutanea per acquisire segnali fisiologici affidabili in modo continuo."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-shell p-6"
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Mockup dispositivo</p>
                <h3 className="mt-3 text-xl font-semibold">Modulo wearable</h3>
                <p className="mt-2 text-sm text-white/70">
                  Placeholder per render 3D o foto del prototipo. Il design include sensori IMU,
                  GSR e memoria locale.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                <div className="h-40 rounded-2xl bg-base-900/70" />
                <div className="mt-3 flex items-center justify-between text-xs text-white/50">
                  <span>Wearable multisensoriale</span>
                  <span>Offline-ready</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-5"
              >
                <feature.icon className="text-cyan-300" size={20} />
                <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/70">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraceletSection;