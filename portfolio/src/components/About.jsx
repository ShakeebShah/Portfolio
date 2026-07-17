import { motion } from "framer-motion";
import { stack, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-[#161a24]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-[#5b8cff] mb-3">01. About</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#eef1f7] mb-6">
            From schema to screen.
          </h2>
          <p className="text-[#8b93a7] leading-relaxed">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Requirements Analysis", "System Architecture", "Agile / SDLC"].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-[#232a3a] text-[#8b93a7]"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stack.map((s) => (
            <div
              key={s.letter}
              className="rounded-2xl border border-[#232a3a] bg-[#12151e] p-6 hover:border-[#5b8cff]/50 transition-colors group"
            >
              <span className="font-display font-bold text-3xl text-[#5b8cff] group-hover:text-[#34e7b8] transition-colors">
                {s.letter}
              </span>
              <p className="mt-3 font-semibold text-[#eef1f7]">{s.name}</p>
              <p className="mt-1 text-sm text-[#8b93a7]">{s.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
