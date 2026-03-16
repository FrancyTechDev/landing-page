import { motion } from "framer-motion";

const SectionHeader = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`${alignment} max-w-3xl`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/70">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;