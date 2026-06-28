import { motion } from "framer-motion";
import { Gauge, Move3D, ShieldCheck } from "lucide-react";

const indexes = [
  {
    icon: Gauge,
    title: "Freezing Risk Index",
    acronym: "FRI",
    variables: [
      "Variabilita del passo",
      "Lunghezza del passo",
      "Oscillazione arti superiori",
      "Attivita EMG",
      "Stato autonomico"
    ],
    focusLabel: "Obiettivo",
    focusText: "Identificare condizioni di pre-freezing prima dell'evento clinico."
  },
  {
    icon: Move3D,
    title: "Bradykinesia Index",
    acronym: "BI",
    variables: [
      "Velocita del movimento",
      "Ampiezza del movimento",
      "Tempo di inizio del movimento",
      "Attivazione muscolare"
    ],
    focusLabel: "Obiettivo",
    focusText: "Quantificare in maniera continua la progressione della bradicinesia."
  },
  {
    icon: ShieldCheck,
    title: "Postural Stability Index",
    acronym: "PSI",
    variables: ["Inclinazione del tronco", "Oscillazione corporea", "Simmetria", "Equilibrio"],
    focusLabel: "Applicazioni",
    focusText:
      "Monitoraggio della postura, supporto alla prevenzione delle cadute e lettura potenziale della progressione neuro-motoria."
  }
];

const PredictiveIndexes = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {indexes.map((item, index) => (
        <motion.article
          key={item.acronym}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="section-shell p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <item.icon className="text-cyan-300" size={20} />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-orange-300">{item.acronym}</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Variabili</p>
            <ul className="mt-3 space-y-3 text-sm text-white/70">
              {item.variables.map((variable) => (
                <li key={variable} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{variable}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-base-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-300">{item.focusLabel}</p>
            <p className="mt-3 text-sm text-white/70">{item.focusText}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default PredictiveIndexes;
