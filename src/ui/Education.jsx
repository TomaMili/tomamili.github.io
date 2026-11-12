import { CERTIFICATES, EDUCATION, INTERESTS } from "../data/content";
import { Container, Label, Reveal, SectionHeading } from "./Primitives";

function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          index="05"
          label="Education & certificates"
          title={
            <>
              Always learning, <span className="text-mute">on paper too.</span>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* education timeline */}
          <div className="lg:col-span-7">
            <Label className="text-bone">Education</Label>
            <ol className="relative mt-8 border-l border-line-strong">
              {EDUCATION.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 0.06} className="relative pb-12 pl-8 last:pb-0 md:pl-10">
                  <span
                    aria-hidden="true"
                    className={`absolute top-1.5 -left-[6px] size-[11px] rotate-45 ${
                      i === 0 ? "bg-accent" : "border border-line-strong bg-ink"
                    }`}
                  />
                  <span className="font-mono text-xs text-mute">{e.period}</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{e.title}</h3>
                  <p className="mt-1 text-base text-bone/80">{e.detail}</p>
                  <p className="mt-1 text-[15px] text-mute">{e.school}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* certificates */}
          <div className="lg:col-span-5">
            <Label className="text-bone">Certificates</Label>
            <ul className="mt-8 space-y-3">
              {CERTIFICATES.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.title}
                  delay={i * 0.06}
                  className="rounded-md border border-line bg-ink-2/60 p-5 transition-colors duration-300 hover:border-line-strong"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg leading-snug font-semibold tracking-tight">{c.title}</h3>
                    <span className="shrink-0 pt-1 font-mono text-[11px] text-mute">{c.date}</span>
                  </div>
                  <p className="mt-1 text-[15px] text-accent">{c.issuer}</p>
                  {c.id && (
                    <p className="mt-3 font-mono text-[10px] break-all text-dim md:text-[11px]">ID {c.id}</p>
                  )}
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-10 border-t border-line pt-6">
              <Label>Off the clock</Label>
              <p className="mt-3 text-xl font-medium tracking-tight">{INTERESTS.join(" · ")}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Education;
