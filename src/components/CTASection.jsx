import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contatti" className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl section-shell p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">CTA finale</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Scopri Parkins-Off e supporta la ricerca applicata
            </h2>
            <p className="mt-4 text-sm text-white/70">
              La landing è pensata per essere letta anche da QR code. Qui puoi trovare materiali,
              poster e demo in un formato immediato e professionale.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-base-900 transition hover:translate-y-[-2px]"
            >
              Scopri il progetto <ArrowRight size={16} />
            </a>
            <a
              href="mailto:info@parkins-off.it"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Contattaci <Mail size={16} />
            </a>
            <div className="rounded-2xl border border-white/10 bg-base-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Materiali</p>
              <p className="mt-3 text-sm text-white/70">
                Inserire link a poster, report o demo video. Placeholder pronto per QR.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;