import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FEATURED, OTHER_PROJECTS, PROFILE, TYPICAL_STACK, asset } from "../data/content";
import { ArrowUpRight, Github } from "./Icons";
import { Container, Label, Reveal, SectionHeading, TagTiles } from "./Primitives";

/**
 * Circle badge that trails the cursor while hovering a project visual.
 * Only appears after a real mouse movement inside the element, so it never
 * pops up in a corner when the page scrolls under a stationary cursor.
 */
function useCursorBadge() {
  const [shown, setShown] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 32, mass: 0.4 });

  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    x.set(px);
    y.set(py);
    if (!shown) {
      sx.jump(px);
      sy.jump(py);
      setShown(true);
    }
  };
  const onPointerLeave = () => setShown(false);

  const badge = (
    <motion.span
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none absolute top-0 left-0 z-20"
    >
      <span
        className={`flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 bg-accent font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition-[scale,rotate] duration-500 ease-[var(--ease-out-expo)] ${
          shown ? "scale-100 rotate-0" : "scale-0 rotate-45"
        }`}
      >
        Visit <ArrowUpRight className="size-3.5" />
      </span>
    </motion.span>
  );
  return { handlers: { onPointerMove, onPointerLeave }, badge };
}

function BrowserFrame({ src, domain, alt }) {
  return (
    <div className="overflow-hidden rounded-t-md border border-b-0 border-line-strong bg-ink-3 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2.5 md:px-4">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto truncate rounded-md bg-ink px-3 py-1 font-mono text-[10px] text-mute md:min-w-[40%] md:text-center md:text-[11px]">
          {domain}
        </div>
        <div className="w-[42px]" />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1440}
        height={900}
        className="block w-full transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/visual:scale-[1.03]"
      />
    </div>
  );
}

function ProjectVisual({ project }) {
  const { handlers, badge } = useCursorBadge();
  const href = project.links[0].href;

  if (project.visual === "cineo") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        {...handlers}
        aria-label={`Open ${project.title}`}
        className="group/visual relative block aspect-[4/3.4] overflow-hidden rounded-md bg-[radial-gradient(120%_90%_at_80%_20%,#b91c1c_0%,#7f1d1d_35%,#2a0a0a_75%,#140707_100%)] sm:aspect-[16/12]"
      >
        <div className="tile-pattern absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
        <img
          src={asset("work/cineo-logo.svg")}
          alt="Cineo"
          className="absolute top-6 left-6 h-6 w-auto md:top-8 md:left-8 md:h-8"
        />
        <ul className="absolute bottom-6 left-6 z-10 flex flex-col items-start pt-px pl-px md:bottom-8 md:left-8">
          {["Mc² finalist 2025", "BIRD Incubator"].map((b) => (
            <li
              key={b}
              className="-mt-px -ml-px flex items-center gap-2.5 border border-white/20 bg-black/45 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur md:text-[11px]"
            >
              <span className="size-1.5 bg-white" />
              {b}
            </li>
          ))}
        </ul>
        <img
          src={asset("work/cineo-phones.webp")}
          alt="Cineo app on two phones: home feed and a movie detail page"
          loading="lazy"
          decoding="async"
          width={662}
          height={993}
          className="absolute -right-[6%] -bottom-[18%] h-[115%] w-auto rotate-[8deg] drop-shadow-[0_40px_60px_rgb(0_0_0/0.6)] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/visual:-translate-y-4 group-hover/visual:rotate-[4deg] sm:right-[4%]"
        />
        {badge}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      {...handlers}
      aria-label={`Open ${project.title} — ${project.domain}`}
      className="group/visual relative block aspect-[4/3.4] overflow-hidden rounded-md border border-line bg-ink-2 sm:aspect-[16/12]"
    >
      <div className="tile-pattern absolute inset-0 [mask-image:radial-gradient(circle_at_30%_30%,#000,transparent_75%)]" />
      <div className="absolute top-[12%] left-[8%] w-[115%] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/visual:-translate-x-2 group-hover/visual:-translate-y-2 sm:top-[14%] sm:left-[9%]">
        <BrowserFrame src={project.image} domain={project.domain} alt={`${project.title} website homepage`} />
      </div>
      {badge}
    </a>
  );
}

function ProjectCard({ project, index }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-last" : ""}`}>
        <ProjectVisual project={project} />
      </Reveal>

      <Reveal delay={0.1} className={`lg:col-span-5 ${flip ? "lg:pr-6" : "lg:pl-6"}`}>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-line-strong" />
          <Label>{project.kind}</Label>
        </div>
        <h3 className="text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[0.95] font-semibold tracking-[-0.035em]">
          {project.title}
        </h3>
        <p className="mt-3 font-mono text-xs text-mute">
          {project.role} <span className="text-dim">/</span> {project.year}
        </p>
        <p className="mt-6 text-lg leading-relaxed">{project.summary}</p>
        <ul className="mt-5 space-y-2.5">
          {project.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-mute">
              <span className="mt-[0.6em] size-1.5 shrink-0 bg-accent" />
              {pt}
            </li>
          ))}
        </ul>
        <TagTiles items={project.tags} className="mt-6" />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[15px] font-semibold"
            >
              {l.label === "Code" && <Github className="size-4" />}
              <span className="link-underline">{l.label}</span>
              <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

function OtherProjects() {
  return (
    <div className="mt-24 md:mt-32">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <Reveal as="h3" className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          More builds
        </Reveal>
        <a
          href={PROFILE.githubRepos}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-mute hover:text-bone"
        >
          <Github className="size-4" /> All repositories
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <ul className="border-t border-line">
        {OTHER_PROJECTS.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 0.05} className="border-b border-line">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative isolate grid gap-3 py-7 md:grid-cols-12 md:items-center md:gap-6 md:py-8"
            >
              <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink-2 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
              <span className="font-mono text-xs text-mute md:col-span-2 md:pl-4">{p.date}</span>
              <span className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent md:col-span-4 md:text-3xl">
                {p.title}
              </span>
              <span className="text-[15px] leading-relaxed text-mute md:col-span-4">{p.desc}</span>
              <span className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end md:pr-4">
                <span className="font-mono text-[11px] text-dim md:hidden">{p.tags.join(" · ")}</span>
                <span className="grid size-10 shrink-0 place-items-center border border-line-strong transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
              <span className="hidden font-mono text-[11px] text-dim md:col-span-10 md:col-start-3 md:-mt-3 md:block">
                {p.tags.join(" · ")}
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="01"
          label="Selected work"
          aside={`${String(FEATURED.length).padStart(2, "0")} projects`}
          title={
            <>
              Real products, <span className="text-mute">for real clients.</span>
            </>
          }
        />

        <div className="space-y-28 md:space-y-40">
          {FEATURED.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center gap-3 border-t border-line pt-6 md:mt-28">
          <Label>Typical freelance stack</Label>
          <span className="font-mono text-xs text-bone">{TYPICAL_STACK}</span>
        </Reveal>

        <OtherProjects />
      </Container>
    </section>
  );
}

export default Work;
