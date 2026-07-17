import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ onViewResume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b0d12]/85 backdrop-blur-md border-b border-[#232a3a]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-[#eef1f7]">
          Shakeeb<span className="text-[#5b8cff]">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-[#8b93a7]">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#eef1f7] transition-colors">
                <span className="text-[#5b8cff]">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onViewResume}
            className="inline-flex items-center gap-2 border border-[#5b8cff]/50 text-[#5b8cff] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5b8cff]/10 transition-colors"
          >
            View resume
          </button>
        </div>

        <button
          className="md:hidden text-[#eef1f7] text-2xl leading-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0b0d12] border-t border-[#232a3a] px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm text-[#8b93a7]">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-[#eef1f7]">
                  <span className="text-[#5b8cff]">0{i + 1}.</span> {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onViewResume();
                }}
                className="inline-flex w-full justify-center rounded-full border border-[#5b8cff]/50 px-4 py-2 text-[#5b8cff] hover:bg-[#5b8cff]/10"
              >
                View resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
