import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-[#161a24]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-[#5b8cff] mb-3">06. Contact</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#eef1f7] mb-6">
            Let's build the next one.
          </h2>
          <p className="text-[#8b93a7] max-w-xl mx-auto mb-10">
            I'm currently open to Full Stack / MERN developer roles. Reach out
            and I'll get back within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5b8cff] text-[#0b0d12] font-semibold hover:bg-[#7ba0ff] transition-colors"
          >
            {profile.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 font-mono text-sm text-[#8b93a7]">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[#eef1f7]">
              GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-[#232a3a]" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#eef1f7]">
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-[#232a3a]" />
            <span>{profile.phone}</span>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-[#161a24] pt-8 pb-4">
        <p className="text-center font-mono text-xs text-[#4b5266]">
          Built by {profile.name} · React + Three.js · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
