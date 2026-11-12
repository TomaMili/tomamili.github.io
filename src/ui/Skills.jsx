import { SKILLS } from "../data/content";
import { Container, Label, Reveal, SectionHeading } from "./Primitives";

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          index="04"
          label="Skills"
          title={
            <>
              Code <span className="text-mute">and</span> craft.
            </>
          }
        />

        {/* tiles separated by 1px "grout" */}
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
          {SKILLS.map((s, i) => (
            <Reveal
              key={s.group}
              delay={i * 0.06}
              className={`group relative bg-ink p-6 transition-colors duration-500 hover:bg-ink-2 md:p-10 ${
                s.wide ? "md:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[var(--ease-out-expo)] group-hover:w-full"
              />
              <div className="mb-8 flex items-center justify-between md:mb-12">
                <Label className="text-bone">{s.group}</Label>
                <span className="font-mono text-[11px] text-dim">
                  {String(s.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {s.items.map((item, j) => (
                  <li
                    key={item}
                    className={`text-2xl font-medium tracking-tight md:text-[1.75rem] ${
                      s.muted ? "text-mute" : ""
                    }`}
                  >
                    {item}
                    {j < s.items.length - 1 && <span className="ml-5 text-dim">/</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
