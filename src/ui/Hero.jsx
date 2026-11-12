import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../data/content";
import TileField from "./TileField";
import { ArrowDown, Download } from "./Icons";
import { Button, Container, Label } from "./Primitives";
import { EASE } from "./ease";

function useZagrebTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Zagreb",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/** One line of the giant name; each letter rises out of a mask. */
function NameLine({ text, delay = 0, className = "" }) {
  return (
    <span className={`block overflow-hidden pt-[0.14em] pb-[0.04em] -my-[0.09em] ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block whitespace-nowrap">
        {[...text].map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.045 }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

function Hero() {
  const time = useZagrebTime();

  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden pt-16">
      {/* interactive tile field */}
      <div
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,#000_35%,transparent_100%)]"
        aria-hidden="true"
      >
        <TileField />
      </div>
      {/* warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/3 left-1/2 -z-10 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <Container className="flex flex-1 flex-col">
        {/* meta row */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-between py-5">
          <Label>Portfolio © {new Date().getFullYear()}</Label>
          <Label className="flex items-center gap-2">
            Zagreb, HR <span className="text-dim">/</span>
            <span className="tabular-nums text-bone">{time}</span>
          </Label>
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-6">
          <motion.div {...fadeUp(0.2)} className="mb-5 flex md:mb-6">
            <span className="inline-flex items-center gap-3">
              <span className="size-2.5 animate-pulse-dot bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone">
                {PROFILE.availability}
              </span>
              <span className="hidden h-px w-12 bg-line-strong sm:block" />
            </span>
          </motion.div>

          <h1 className="text-[clamp(3.6rem,min(21vw,21svh),16.5rem)] leading-[0.86] font-bold tracking-[-0.05em] md:text-[clamp(3.6rem,min(16.5vw,21svh),16.5rem)]">
            <NameLine text={PROFILE.firstName} delay={0.25} />
            <NameLine text={PROFILE.lastName} delay={0.4} className="md:pl-[0.9em]" />
          </h1>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12 md:items-end md:gap-8">
            <motion.p
              {...fadeUp(0.9)}
              className="text-2xl leading-tight font-medium tracking-tight md:col-span-5 md:text-3xl"
            >
              {PROFILE.role}
              <span className="text-mute"> — {PROFILE.focus}.</span>
            </motion.p>

            <motion.div {...fadeUp(1)} className="md:col-span-6 md:col-start-7">
              <p className="text-base leading-relaxed text-mute md:text-lg">
                I design and build complete web products for real clients — brand and UI, Next.js and
                Supabase, admin panels, SEO and launch. Co-founder of{" "}
                <span className="text-bone">Cineo</span>, an AI startup that reached the Mc² finals and
                the BIRD Incubator.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#work">
                  See selected work
                  <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Button>
                <Button href={PROFILE.cv[0].href} download variant="outline">
                  <Download className="size-4" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div {...fadeUp(1.2)} className="flex items-end justify-between pb-5">
          <Label className="flex items-center gap-3">
            <span className="relative block h-8 w-px overflow-hidden bg-line">
              <span className="absolute inset-0 animate-scroll-line bg-bone" />
            </span>
            Scroll
          </Label>
          <Label className="hidden sm:block">Frontend · Full-stack · Design</Label>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
