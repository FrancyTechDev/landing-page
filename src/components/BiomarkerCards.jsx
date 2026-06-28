import { motion } from "framer-motion";
import { Activity, HeartPulse, Waves } from "lucide-react";

const categories = [
  {
    icon: Activity,
    title: "Biomarcatori motori",
    items: [
      "Frequenza del tremore",
      "Ampiezza del tremore",
      "Velocita del movimento",
      "Ampiezza del movimento",
      "Lunghezza del passo",
      "Frequenza del passo",
      "Simmetria del passo",
      "Oscillazione delle braccia",
      "Stabilita posturale"
    ]
  },
  {
    icon: Waves,
    title: "Biomarcatori muscolari",
    items: [
      "Tempo di attivazione",
      "Intensita della contrazione",
      "Co-contrazione",
      "Affaticamento"
    ]
  },
  {
    icon: HeartPulse,
    title: "Biomarcatori autonomici",
    items: ["GSR", "HRV", "Frequenza cardiaca", "Risposta simpatica"]
  }
];

const BiomarkerCards = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {categories.map((category, index) => (
        <motion.article
          key={category.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="glass-card h-full p-6"
        >
          <div className="flex items-center gap-3">
            <category.icon className="text-cyan-300" size={20} />
            <h3 className="text-lg font-semibold">{category.title}</h3>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {category.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
};

export default BiomarkerCards;
