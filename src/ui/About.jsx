import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ABOUT_BIO, ABOUT_STATEMENT, STATS } from "../data/content";
import { Container, Label, Reveal } from "./Primitives";

function Word({ progress, range, highlight, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight ? "text-accent" : undefined}>
      {children}
    </motion.span>
  );
}

/** Statement whose words light up one by one as it scrolls through the viewport. */
function ScrollStatement({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  let inHighlight = false;
  const words = text.split(" ").map((raw) => {
    if (raw.startsWith("*")) inHighlight = true;
    const highlight = inHighlight;
    if (/\*[.,:;!?]?$/.test(raw)) inHighlight = false;
    return { word: raw.replace(/\*/g, ""), highlight };
  });

  return (
    <p
      ref={ref}
      className="text-[clamp(1.9rem,4.6vw,4.25rem)] leading-[1.05] font-medium tracking-[-0.03em]"
    >
      {words.map(({ word, highlight }, i) =>
        reduce ? (
          <span key={i} className={highlight ? "text-accent" : undefined}>
            {word}{" "}
          </span>
        ) : (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
            highlight={highlight}
          >
            {word}{" "}
          </Word>
        )
      )}
    </p>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <div className="mb-14 flex items-center justify-between border-t border-line pt-6 md:mb-20">
          <Label>
            <span className="text-accent">(02)</span> About
          </Label>
          <Label>Zagreb, Croatia</Label>
        </div>

        <ScrollStatement text={ABOUT_STATEMENT} />

        <div className="mt-20 grid gap-14 md:mt-32 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 text-lg leading-relaxed text-mute lg:col-span-5">
            {ABOUT_BIO.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08} className={i === ABOUT_BIO.length - 1 ? "text-bone" : ""}>
                {p}
              </Reveal>
            ))}
          </div>

          {/* stats laid out like tiles with grout lines */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
              {STATS.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.08}
                  className="group relative flex aspect-square flex-col justify-between bg-ink p-5 transition-colors duration-500 hover:bg-ink-2 sm:aspect-[5/4] md:p-8"
                >
                  <span className="font-mono text-[11px] text-dim">0{i + 1}</span>
                  <div>
                    <div className="text-[clamp(2.75rem,7vw,5.5rem)] leading-none font-semibold tracking-[-0.05em] transition-colors duration-500 group-hover:text-accent">
                      {s.value}
                    </div>
                    <p className="mt-3 max-w-[16ch] text-sm leading-snug text-mute md:text-base">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
