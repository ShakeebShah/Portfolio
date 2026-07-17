import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-[#161a24] bg-grid">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-[#5b8cff] mb-3">02. Skills</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#eef1f7] mb-12">
          Tools of the trade.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-[#232a3a] bg-[#12151e] p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#34e7b8] mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-[#171c28] text-[#eef1f7] border border-[#232a3a]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
