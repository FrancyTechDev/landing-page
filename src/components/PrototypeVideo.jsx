import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const videoCandidates = [
  withBase("/videos/parkins-off-demo.mp4"),
  withBase("/assets/videos/parkins-off-demo.mp4")
];
const posterCandidates = [withBase("/images/park.jpeg"), withBase("/assets/images/park.jpeg")];

const PrototypeVideo = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  const handleVideoError = () => {
    if (videoIndex < videoCandidates.length - 1) {
      setVideoIndex((current) => current + 1);
      return;
    }
    setVideoUnavailable(true);
  };

  return (
    <section id="demo-video" className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="Dimostrazione"
          title="Dimostrazione del prototipo"
          description="Il video mostra il funzionamento del prototipo PARKINS-OFF e la struttura fisica del sistema indossabile."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-shell overflow-hidden p-4 md:p-6"
        >
          {!videoUnavailable ? (
            <video
              key={videoCandidates[videoIndex]}
              controls
              preload="metadata"
              playsInline
              poster={posterCandidates[0]}
              className="aspect-video w-full rounded-2xl bg-base-900 object-cover"
              onError={handleVideoError}
            >
              <source src={videoCandidates[videoIndex]} type="video/mp4" />
              Il browser non supporta il tag video HTML5.
            </video>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-base-900/70 p-8">
              <div className="max-w-md text-center">
                <PlayCircle className="mx-auto text-cyan-300" size={36} />
                <p className="mt-4 text-base font-medium text-white">Video demo pronto per il collegamento</p>
                <p className="mt-3 text-sm text-white/60">
                  Inserisci `parkins-off-demo.mp4` in `public/videos` oppure `public/assets/videos`.
                </p>
                <p className="mt-3 text-xs text-white/45">
                  Fallback: il browser non supporta il video o il file non e ancora presente.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PrototypeVideo;
