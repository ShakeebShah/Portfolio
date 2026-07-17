import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import { resolveImageSrc } from "../utils/images";

function ProjectLightbox({ selected, onClose, onPrevious, onNext }) {
  useEffect(() => {
    if (!selected) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, onClose, onPrevious, onNext]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0b0d12]/95 backdrop-blur-sm flex items-center justify-center px-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#232a3a] bg-[#12151e] text-[#eef1f7] text-2xl hover:border-[#5b8cff]/60 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            x
          </button>

          {selected.index > 0 && (
            <button
              className="absolute left-4 sm:left-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#232a3a] bg-[#12151e] text-[#eef1f7] text-3xl hover:border-[#5b8cff]/60 transition-colors"
              onClick={onPrevious}
              aria-label="Previous image"
            >
              &lt;
            </button>
          )}

          {selected.index < selected.project.images.length - 1 && (
            <button
              className="absolute right-4 sm:right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#232a3a] bg-[#12151e] text-[#eef1f7] text-3xl hover:border-[#5b8cff]/60 transition-colors"
              onClick={onNext}
              aria-label="Next image"
            >
              &gt;
            </button>
          )}

          <motion.div
            key={`${selected.project.id}-${selected.index}`}
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            className="w-[min(92vw,1100px)]"
          >
            <img
              src={resolveImageSrc(selected.image.src)}
              alt={selected.image.label}
              className="block h-auto max-h-[78vh] w-full rounded-xl border border-[#232a3a] bg-[#12151e] object-contain"
            />
            <p className="font-mono text-xs text-center text-[#8b93a7] mt-4">
              {selected.image.label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const openImage = (project, index) => {
    setSelected({ project, index, image: project.images[index] });
  };

  const closeImage = () => setSelected(null);

  const showPrevious = () => {
    setSelected((current) => {
      if (!current) return current;
      const index = Math.max(0, current.index - 1);
      return { ...current, index, image: current.project.images[index] };
    });
  };

  const showNext = () => {
    setSelected((current) => {
      if (!current) return current;
      const index = Math.min(current.project.images.length - 1, current.index + 1);
      return { ...current, index, image: current.project.images[index] };
    });
  };

  return (
    <section id="work" className="relative py-28 border-t border-[#161a24]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-[#5b8cff] mb-3">03. Selected Work</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#eef1f7] mb-4">
          Three platforms, end to end.
        </h2>
        <p className="text-[#8b93a7] max-w-2xl mb-4">
          Each project below was designed, built, and shipped solo across the
          full stack - data model, API, auth, and interface.
        </p>

        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpenImage={openImage} />
          ))}
        </div>
      </div>

      <ProjectLightbox
        selected={selected}
        onClose={closeImage}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </section>
  );
}
