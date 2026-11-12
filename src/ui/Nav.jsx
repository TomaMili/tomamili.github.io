import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { NAV, PROFILE } from "../data/content";
import { Close, Download, Menu, TileMark } from "./Icons";
import { Button } from "./Primitives";
import { EASE } from "./ease";

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const IDS = NAV.map((n) => n.id);

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-ink/75 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Toma Milićević — back to top">
            <TileMark className="size-7 transition-transform duration-500 group-hover:rotate-90" />
            <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">{PROFILE.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative block py-2 pr-3 pl-5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    active === item.id ? "text-bone" : "text-mute hover:text-bone"
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-marker"
                      className="absolute top-[calc(50%-3px)] left-1.5 size-1.5 bg-accent"
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-stretch divide-x divide-line border border-line sm:flex">
              <span className="flex items-center px-3 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                CV
              </span>
              {PROFILE.cv.map((cv) => (
                <a
                  key={cv.label}
                  href={cv.href}
                  download
                  className="px-3 py-2 font-mono text-[11px] tracking-[0.1em] text-bone transition-colors hover:bg-accent hover:text-ink"
                  aria-label={`Download CV (${cv.lang})`}
                >
                  {cv.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="grid size-10 place-items-center border border-line transition-colors hover:border-bone md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-4 pt-24 pb-8 sm:px-8 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.06 }}
                  className="border-b border-line"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 text-5xl font-semibold tracking-tight"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-mute">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <span className="w-full font-mono text-[11px] uppercase tracking-[0.16em] text-mute">Download CV</span>
              {PROFILE.cv.map((cv) => (
                <Button key={cv.label} href={cv.href} download variant="outline" size="sm">
                  <Download className="size-3.5" />
                  {cv.lang}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
