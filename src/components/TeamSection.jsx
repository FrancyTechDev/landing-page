import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <section id="chi-siamo" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Chi siamo"
          title="Studenti con metodo, curiosità e rigore"
          description="Parkins-Off è stato sviluppato da un team di studenti con interesse per scienza, elettronica, informatica e innovazione applicata."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-shell p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-sm text-white/70">
              <p>
                Il progetto nasce in ambito scolastico e si è evoluto attraverso fasi di ricerca,
                prototipazione e sperimentazione. Ogni scelta è stata documentata con attenzione ai
                dati, alla sicurezza e alla qualità scientifica.
              </p>
              <p>
                L'obiettivo è contribuire alla ricerca applicata, sperimentare nuove forme di
                monitoraggio e sensibilizzare sul legame tra ambiente e salute.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5">
              <div className="h-36 rounded-2xl bg-base-900/70" />
              <p className="mt-3 text-xs text-white/50">
                Placeholder per foto del team o poster scientifico.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;