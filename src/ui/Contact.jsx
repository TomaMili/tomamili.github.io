import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "../data/content";
import TileField from "./TileField";
import { ArrowUp, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Phone, Pin } from "./Icons";
import { Button, Container, Label, Reveal } from "./Primitives";
import { EASE } from "./ease";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };
  return (
    <Button as="button" type="button" onClick={copy} variant="outline" size="sm" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "done" : "copy"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="inline-flex items-center gap-2"
        >
          {copied ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy email"}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}

const LINKS = [
  { label: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", href: PROFILE.github, icon: Github, external: true },
  { label: PROFILE.phone, href: PROFILE.phoneHref, icon: Phone },
];

function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="relative isolate overflow-hidden pt-16 md:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,#000_40%,#000_70%,transparent)]"
      >
        <TileField cell={72} />
      </div>

      <Container>
        <div className="flex items-center justify-between border-t border-line pt-6">
          <Label>
            <span className="text-accent">(06)</span> Contact
          </Label>
          <Label className="flex items-center gap-1.5">
            <Pin className="size-3.5" /> {PROFILE.location}
          </Label>
        </div>

        <div className="py-20 md:py-32">
          <Reveal as="p" className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {PROFILE.availability}
          </Reveal>
          <Reveal
            as="h2"
            className="text-[clamp(3.25rem,11vw,10.5rem)] leading-[0.88] font-bold tracking-[-0.05em]"
          >
            Let&apos;s build
            <br />
            <span className="text-mute">something</span> <span className="text-accent">good.</span>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 md:mt-20">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-flex max-w-full items-center gap-3 text-[clamp(1.1rem,5.6vw,3.5rem)] font-semibold tracking-[-0.03em] sm:text-[clamp(1.35rem,4.2vw,3.5rem)]"
            >
              <span className="link-underline truncate">{PROFILE.email}</span>
              <span className="hidden size-10 shrink-0 place-items-center bg-accent text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 sm:grid md:size-14">
                <ArrowUpRight className="size-5 md:size-6" />
              </span>
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CopyEmail />
              {PROFILE.cv.map((cv) => (
                <Button key={cv.label} href={cv.href} download variant="outline" size="sm">
                  <Download className="size-3.5" /> CV · {cv.lang}
                </Button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
            {LINKS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 bg-ink/90 px-6 py-6 backdrop-blur transition-colors duration-300 hover:bg-ink-2 md:py-8"
              >
                <span className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                  <Icon className="size-5 text-mute transition-colors group-hover:text-accent" />
                  {label}
                </span>
                <ArrowUpRight className="size-4 text-mute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bone" />
              </a>
            ))}
          </Reveal>
        </div>
      </Container>

      <footer className="border-t border-line bg-ink/80 backdrop-blur">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Label>
            © {year} {PROFILE.name}
          </Label>
          <Label className="normal-case tracking-normal">Designed & built from scratch — React, Vite, Tailwind</Label>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mute hover:text-bone"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </Container>
      </footer>
    </section>
  );
}

export default Contact;
