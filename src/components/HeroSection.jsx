import { motion } from "framer-motion";
import { ArrowRight, Cpu, Activity, Wind } from "lucide-react";

const badges = [
  "Progetto interdisciplinare",
  "AI + Bioingegneria + Monitoraggio ambientale",
  "Concorso FAST Milano"
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[5%] top-[120px] h-[320px] w-[320px] rounded-full bg-accent-500/20 blur-[140px]" />
        <div className="absolute inset-0 noise-bg opacity-40" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Parkins-Off: la scienza che connette ambiente, salute e AI
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            Un sistema integrato che misura l'inquinamento atmosferico, interpreta i dati
            fisiologici e suggerisce indicatori di rischio neurodegenerativo con intelligenza
            artificiale locale.
          </p>
          <p className="text-base text-white/60">
            Non solo Parkinson. È un ecosistema tecnologico che unisce sensori, prevenzione e
            ricerca applicata.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#sistema"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-base-900 transition hover:translate-y-[-2px]"
            >
              Scopri il progetto <ArrowRight size={16} />
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Esplora la soluzione
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-shell gradient-border p-6"
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Sistema integrato</p>
              <h3 className="text-2xl font-semibold">Sensori ambientali + wearable + AI offline</h3>
              <p className="text-sm text-white/60">
                Una composizione grafica che simula i moduli principali: particolato atmosferico,
                segnali neuro-vegetativi e analisi predittiva.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: Wind, label: "PM10 / PM2.5" },
                { icon: Activity, label: "Tremore + GSR" },
                { icon: Cpu, label: "AI locale" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-base-900/60 p-4 text-center"
                >
                  <item.icon className="mx-auto text-cyan-300" size={22} />
                  <p className="mt-3 text-xs text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="h-24 rounded-xl bg-gradient-to-r from-cyan-400/30 via-white/10 to-accent-400/30" />
              <p className="mt-3 text-xs text-white/60">
                Placeholder per illustrazione scientifica o mockup dashboard.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;