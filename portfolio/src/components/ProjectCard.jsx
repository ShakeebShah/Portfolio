import { motion } from "framer-motion";
import { resolveImageSrc } from "../utils/images";

const accentMap = {
  blue: { text: "text-[#5b8cff]", border: "border-[#5b8cff]/50", bg: "bg-[#5b8cff]" },
  mint: { text: "text-[#34e7b8]", border: "border-[#34e7b8]/50", bg: "bg-[#34e7b8]" },
};

export default function ProjectCard({ project, index, onOpenImage }) {
  const accent = accentMap[project.accent] || accentMap.blue;
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-10 items-center py-16 border-b border-[#161a24] last:border-none"
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <span className={`font-mono text-xs ${accent.text}`}>0{index + 1}</span>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#eef1f7] mt-2">
          {project.name}
        </h3>
        <p className="text-[#8b93a7] font-mono text-sm mt-1">{project.tagline}</p>
        <p className="text-[#c4c9d6] leading-relaxed mt-5">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-[#8b93a7]">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.bg} shrink-0`} />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-[#232a3a] text-[#8b93a7]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        {project.images.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onOpenImage(project, 0)}
              className={`col-span-2 rounded-xl overflow-hidden border ${accent.border} group relative`}
            >
              <img
                src={resolveImageSrc(project.images[0].src)}
                alt={project.images[0].label}
                className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-xs text-[#eef1f7] font-mono px-3 py-2 text-left">
                {project.images[0].label}
              </span>
            </button>
            {project.images.slice(1, 5).map((img, i) => (
              <button
                key={img.src}
                onClick={() => onOpenImage(project, i + 1)}
                className="rounded-xl overflow-hidden border border-[#232a3a] hover:border-[#5b8cff]/50 transition-colors relative group"
              >
                <img
                  src={resolveImageSrc(img.src)}
                  alt={img.label}
                  className="w-full h-28 sm:h-32 object-cover object-top group-hover:scale-[1.05] transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-[#232a3a] h-56 sm:h-72 flex flex-col items-center justify-center text-center px-6">
            <span className="font-mono text-xs text-[#8b93a7]">
              screenshots coming soon
            </span>
            <p className="text-sm text-[#4b5266] mt-2">
              Ask Shakeeb for a walkthrough of the delivery workflow.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
