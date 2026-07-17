import { motion } from "framer-motion";
import { experience, education } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-[#161a24] bg-grid">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-16">
        <div>
          <p className="font-mono text-sm text-[#5b8cff] mb-3">04. Experience</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#eef1f7] mb-10">
            Where I've worked.
          </h2>

          <div className="relative pl-8 border-l border-[#232a3a] space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-[#5b8cff] ring-4 ring-[#0b0d12]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-[#eef1f7]">{job.role}</h3>
                  <span className="font-mono text-xs text-[#8b93a7]">{job.period}</span>
                </div>
                <p className="text-sm text-[#34e7b8] font-mono mt-1">
                  {job.org} · {job.location}
                </p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((pt) => (
                    <li key={pt} className="text-sm text-[#8b93a7] leading-relaxed flex gap-2">
                      <span className="text-[#5b8cff] shrink-0">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-sm text-[#5b8cff] mb-3">05. Education</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#eef1f7] mb-10">
            Foundations.
          </h2>
          <div className="space-y-5">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="rounded-xl border border-[#232a3a] bg-[#12151e] p-5"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-[#eef1f7] text-sm">{ed.degree}</h3>
                  <span className="font-mono text-xs text-[#8b93a7]">{ed.year}</span>
                </div>
                <p className="text-sm text-[#8b93a7] mt-1">{ed.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
