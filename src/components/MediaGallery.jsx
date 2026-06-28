import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const galleryItems = [
  {
    key: "stand-device",
    title: "Prototipo PARKINS-OFF esposto allo stand",
    alt: "Foto dello stand PARKINS-OFF con prototipo, poster e materiali espositivi",
    candidates: [withBase("/images/park.jpeg"), withBase("/assets/images/park.jpeg")],
    aspect: "aspect-[4/3]"
  },
  {
    key: "presentazione-stand",
    title: "Presentazione del sistema multisensoriale",
    alt: "Due espositori presentano il sistema multisensoriale PARKINS-OFF allo stand",
    candidates: [withBase("/images/park2.jpeg"), withBase("/assets/images/park2.jpeg")],
    aspect: "aspect-[4/5]"
  },
  {
    key: "wearable-closeup",
    title: "Dettaglio del dispositivo indossabile",
    alt: "Primo piano del prototipo indossabile PARKINS-OFF applicato sulla mano",
    candidates: [withBase("/images/park3.jpeg"), withBase("/assets/images/park3.jpeg")],
    aspect: "aspect-[4/5]"
  }
];

const GalleryCard = ({ item, index }) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [unavailable, setUnavailable] = useState(false);

  const handleError = () => {
    if (sourceIndex < item.candidates.length - 1) {
      setSourceIndex((current) => current + 1);
      return;
    }
    setUnavailable(true);
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="glass-card overflow-hidden"
    >
      {!unavailable ? (
        <img
          src={item.candidates[sourceIndex]}
          alt={item.alt}
          onError={handleError}
          className={`w-full ${item.aspect} object-cover`}
          loading="lazy"
        />
      ) : (
        <div
          className={`flex w-full ${item.aspect} items-center justify-center bg-gradient-to-br from-brand-900 to-base-800 p-8`}
        >
          <div className="max-w-xs text-center">
            <ImageIcon className="mx-auto text-cyan-300" size={32} />
            <p className="mt-4 text-sm font-medium text-white">Immagine pronta per il collegamento</p>
            <p className="mt-2 text-xs text-white/55">
              Inserisci il file in `public/images` o `public/assets/images`.
            </p>
          </div>
        </div>
      )}
      <figcaption className="border-t border-white/10 p-4">
        <p className="text-sm font-medium text-white">{item.title}</p>
        <p className="mt-2 text-xs text-white/55">{item.alt}</p>
      </figcaption>
    </motion.figure>
  );
};

const MediaGallery = () => {
  return (
    <section id="media" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Galleria immagini"
          title="Prototipo, stand e presentazione dal vivo"
          description="Sezione media dedicata al contesto espositivo del progetto, con immagini responsive, caption professionali e fallback pronti per i file definitivi."
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.key} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
