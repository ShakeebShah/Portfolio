import { motion } from "framer-motion";
import { profile } from "../data/content";

const stackLayers = [
  { label: "M", name: "MongoDB", color: "#3ccf91" },
  { label: "E", name: "Express.js", color: "#8f9bb8" },
  { label: "R", name: "React.js", color: "#5b8cff" },
  { label: "N", name: "Node.js", color: "#34e7b8" },
];

function StackVisual() {
  return (
    <div className="relative h-full min-h-[360px] flex items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-[#5b8cff]/10 blur-[80px]" />
      <div className="relative w-full max-w-md space-y-4">
        {stackLayers.map((layer, index) => (
          <div
            key={layer.label}
            className="relative rounded-xl border bg-[#12151e]/80 px-5 py-4 shadow-2xl backdrop-blur-sm"
            style={{
              borderColor: `${layer.color}80`,
              transform: `translateX(${(index - 1.5) * 18}px)`,
              boxShadow: `0 18px 50px ${layer.color}18`,
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-lg border font-display text-2xl font-bold"
                style={{ borderColor: `${layer.color}99`, color: layer.color }}
              >
                {layer.label}
              </span>
              <div>
                <p className="font-semibold text-[#eef1f7]">{layer.name}</p>
                <p className="font-mono text-xs text-[#8b93a7]">production stack layer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ onViewResume }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#5b8cff]/10 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-[#34e7b8]/10 blur-[110px]" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-[#34e7b8] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34e7b8] animate-pulse" />
            open to full stack / MERN roles
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#eef1f7]">
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b8cff] to-[#34e7b8]">
              full stack
            </span>
            , layer by layer.
          </h1>
          <p className="mt-6 text-[#8b93a7] text-lg leading-relaxed max-w-xl">
            {profile.name} — {profile.role}. I design and ship production-style
            web apps end to end: MongoDB schemas, Express APIs, React
            interfaces, and Node services that hold it together.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-[#5b8cff] text-[#0b0d12] font-semibold text-sm hover:bg-[#7ba0ff] transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[#232a3a] text-[#eef1f7] font-semibold text-sm hover:border-[#5b8cff]/60 transition-colors"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={onViewResume}
              className="px-6 py-3 rounded-full border border-[#34e7b8]/50 text-[#34e7b8] font-semibold text-sm hover:bg-[#34e7b8]/10 transition-colors"
            >
              View resume
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 font-mono text-xs text-[#8b93a7]">
            <span>{profile.location}</span>
            <span className="w-1 h-1 rounded-full bg-[#232a3a]" />
            <span>3 production platforms shipped</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="h-[380px] sm:h-[440px] md:h-[500px]"
        >
          <StackVisual />
        </motion.div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#8b93a7] font-mono text-xs"
      >
        scroll
        <span className="w-px h-8 bg-gradient-to-b from-[#5b8cff] to-transparent" />
      </a>
    </section>
  );
}
