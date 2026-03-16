import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ sections }) => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-base-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 font-display text-lg">
          <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-glow" />
          Parkins-Off
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition hover:text-white ${
                active === section.id ? "text-cyan-300" : ""
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          aria-label="Apri menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-base-900/95 px-6 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-medium">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className={`transition hover:text-white ${
                    active === section.id ? "text-cyan-300" : "text-white/70"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;