import { motion } from "framer-motion";
import {
  Brain,
  ChartNoAxesCombined,
  ChevronRight,
  CircleDot,
  Orbit,
  ScanSearch,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import BiomarkerCards from "./BiomarkerCards";
import PredictiveIndexes from "./PredictiveIndexes";

const platformTargets = [
  "Monitorare tremore e stato neurovegetativo in modo continuo.",
  "Osservare freezing of gait e bradicinesia come pattern dinamici.",
  "Rilevare alterazioni posturali e potenziale rischio di caduta.",
  "Tracciare la progressione neuro-motoria individuale rispetto alla baseline personale."
];

const freezingNodes = [
  "Corteccia motoria",
  "Supplementary Motor Area",
  "Gangli della base",
  "Subthalamic Nucleus",
  "Pedunculopontine Nucleus",
  "Cervelletto",
  "Sistemi locomotori spinali"
];

const impactItems = [
  "Identificazione di biomarcatori digitali con potenziale valore scientifico.",
  "Monitoraggio continuo domiciliare, se validato clinicamente.",
  "Rilevazione precoce di stati OFF come supporto sperimentale.",
  "Quantificazione oggettiva della bradicinesia nel tempo.",
  "Predizione del freezing in scenari di ricerca applicata.",
  "Potenziale supporto decisionale per neurologi.",
  "Telemedicina avanzata e follow-up piu strutturati.",
  "Studi longitudinali sulla progressione della malattia."
];

const aiCapabilities = [
  "Fusione multimodale dei dati",
  "Apprendimento personalizzato",
  "Individuazione di pattern nascosti",
  "Predizione di eventi futuri",
  "Aggiornamento continuo del modello paziente"
];

const ParkinsOffNextGeneration = () => {
  return (
    <section id="next-generation" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="section-shell gradient-border overflow-hidden p-8 md:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,217,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.16),transparent_35%)]" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles size={14} />
                Next Generation
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
                  PARKINS-OFF Next Generation
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-white/70">
                  Sistema predittivo multimodale per tremore, bradicinesia, freezing of gait,
                  postura, rischio di caduta e stato neurovegetativo.
                </p>
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-white/65">
                L&apos;estensione Next Generation propone l&apos;evoluzione di PARKINS-OFF da
                dispositivo di monitoraggio del tremore a piattaforma neuro-motoria predittiva,
                basata su biomarcatori digitali, AI personalizzata e fusione multimodale dei dati.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                { icon: Brain, label: "Neuro-motorio", text: "Lettura integrata dei domini motori." },
                { icon: Orbit, label: "Multimodale", text: "Segnali motori, fisiologici e muscolari." },
                { icon: ChartNoAxesCombined, label: "Predittivo", text: "Indici sperimentali orientati al trend." },
                { icon: ShieldAlert, label: "Cauto", text: "Approccio prototipale, non clinicamente validato." }
              ].map((item) => (
                <div key={item.label} className="glass-card p-5">
                  <item.icon className="text-cyan-300" size={20} />
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="section-shell p-6 md:p-7">
            <SectionHeader
              eyebrow="Obiettivo della piattaforma"
              title="Una piattaforma sperimentale per osservare la progressione"
              description="L'obiettivo e costruire una lettura tecnica ma accessibile dei principali domini neuro-motori e autonomici, con raccolta continua e interpretazione comparativa dei segnali."
            />
            <div className="mt-6 space-y-4">
              {platformTargets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-base-900/50 p-4">
                  <ChevronRight className="mt-0.5 shrink-0 text-orange-300" size={18} />
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-shell p-6 md:p-7">
            <SectionHeader
              eyebrow="Perche il freezing e centrale"
              title="Un fenomeno di rete, non solo degli arti inferiori"
              description="Nel modello concettuale del progetto, il freezing viene interpretato come possibile espressione della disorganizzazione della rete locomotoria cerebrale, con coinvolgimento di piu nodi funzionali."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {freezingNodes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-base-900/50 p-4 text-sm text-white/70">
                  <div className="flex items-center gap-3">
                    <CircleDot className="text-cyan-300" size={16} />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader
            eyebrow="Biomarcatori digitali"
            title="Tre famiglie di segnali per una lettura multimodale"
            description="La piattaforma prototipale punta a combinare biomarcatori motori, muscolari e autonomici per descrivere pattern individuali con maggiore profondita."
          />
          <BiomarkerCards />
        </div>

        <div className="space-y-8">
          <SectionHeader
            eyebrow="Indici predittivi proposti"
            title="Indicatori sperimentali per leggere il rischio e la progressione"
            description="Gli indici proposti sono pensati come costrutti di ricerca: potrebbero contribuire alla valutazione continua, se supportati da futura validazione clinica."
          />
          <PredictiveIndexes />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-shell p-6 md:p-7">
            <SectionHeader
              eyebrow="AI e modello neuro-motorio personalizzato"
              title="Il nucleo intelligente della piattaforma"
              description="L'intelligenza artificiale rappresenta il nucleo della piattaforma. Il sistema combina fusione multimodale dei dati, apprendimento personalizzato, individuazione di pattern nascosti, predizione di eventi futuri e aggiornamento continuo del modello paziente."
            />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              L&apos;obiettivo evolutivo e costruire un modello neuro-motorio personalizzato del
              singolo paziente, basato sulla raccolta continua di dati motori, fisiologici e
              muscolari. Attraverso l&apos;apprendimento progressivo dei pattern individuali,
              PARKINS-OFF potra identificare variazioni significative rispetto alla baseline
              personale.
            </p>
          </div>

          <div className="glass-card p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Capacita attese
            </p>
            <div className="mt-5 space-y-4">
              {aiCapabilities.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-base-900/50 p-4">
                  <ScanSearch className="mt-0.5 shrink-0 text-orange-300" size={18} />
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Impatto scientifico potenziale
            </p>
            <ul className="mt-5 space-y-3">
              {impactItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-shell p-6 md:p-7">
            <SectionHeader
              eyebrow="Visione futura"
              title="Dalla misurazione del tremore a una lettura neuro-motoria piu ampia"
              description="PARKINS-OFF potrebbe evolvere da dispositivo per il monitoraggio del tremore a piattaforma neuro-motoria predittiva multimodale, capace di osservare simultaneamente tremore, freezing, bradicinesia, postura, rischio di caduta e stato autonomico."
            />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              L&apos;obiettivo finale e riconoscere precocemente le condizioni che precedono il
              deterioramento motorio e intervenire prima che il sintomo diventi clinicamente
              evidente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkinsOffNextGeneration;
