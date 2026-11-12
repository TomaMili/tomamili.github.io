import { EXPERIENCE, OTHER_WORK } from "../data/content";
import { Container, Label, Reveal, SectionHeading } from "./Primitives";

function Row({ item, big = false, index }) {
  return (
    <Reveal
      as="li"
      delay={index * 0.05}
      className="group grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-6 md:py-9"
    >
      <span className="font-mono text-xs text-mute md:col-span-3 md:pt-2">{item.period}</span>
      <div className="md:col-span-9">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3
            className={`font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent ${
              big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {item.title}
          </h3>
          <span className={`text-mute ${big ? "text-lg md:text-xl" : "text-base"}`}>— {item.org}</span>
        </div>
        <p className={`mt-2 max-w-2xl leading-relaxed text-mute ${big ? "text-base md:text-lg" : "text-[15px]"}`}>
          {item.desc}
        </p>
      </div>
    </Reveal>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          index="03"
          label="Experience"
          title={
            <>
              Shipping since day one, <span className="text-mute">working since fifteen.</span>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Label className="text-bone">Development</Label>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-mute">
                Building products end to end — for clients, and for my own startup.
              </p>
            </div>
          </div>
          <ul className="border-t border-line lg:col-span-9">
            {EXPERIENCE.map((item, i) => (
              <Row key={item.title} item={item} index={i} big />
            ))}
          </ul>

          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Label className="text-bone">Beyond code</Label>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-mute">
                Arenas, warehouses, hotels and building sites. Jobs where showing up on time and getting
                it right the first time is the whole job.
              </p>
            </div>
          </div>
          <ul className="border-t border-line lg:col-span-9">
            {OTHER_WORK.map((item, i) => (
              <Row key={item.title + item.org} item={item} index={i} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
