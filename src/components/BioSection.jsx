import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const BioSection = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="biografie" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Biografie"
          title="I due creatori del progetto"
          description="Due competenze complementari: motore AI e sviluppo del braccialetto Parkins-Off."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="section-shell p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-base-900/60">
                <img
                  src={`${baseUrl}assets/iooo.png`}
                  alt="Creatore AI Engine"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Parkins-Off AI Engineer</p>
                <h3 className="mt-2 text-xl font-semibold">Parkins-Off AI Engineer</h3>
                <p className="mt-2 text-sm text-white/70">
                  Responsabile dell'architettura di elaborazione locale, della logica di correlazione
                  e della sintesi dei dati neuro-ambientali.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-shell p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-base-900/60">
                <img
                  src={`${baseUrl}assets/bracelet.png`}
                  alt="Creatore braccialetto Parkins-Off"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Parkins-Off Founder</p>
                <h3 className="mt-2 text-xl font-semibold">Parkins-Off Founder</h3>
                <p className="mt-2 text-sm text-white/70">
                  Progettazione del wearable multisensoriale, integrazione IMU e GSR, gestione
                  della raccolta dati e del firmware di acquisizione.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
