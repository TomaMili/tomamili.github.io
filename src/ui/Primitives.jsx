import { motion } from "framer-motion";

import { EASE } from "./ease";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

/** Fades + lifts its children into place the first time they scroll into view. */
export function Reveal({ as = "div", delay = 0, y = 28, className = "", children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Mono label used above headings and as metadata. */
export function Label({ className = "", children }) {
  return (
    <span className={`font-mono text-[11px] uppercase tracking-[0.18em] text-mute ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ index, label, title, aside }) {
  return (
    <div className="mb-14 border-t border-line pt-6 md:mb-20">
      <div className="mb-8 flex items-center justify-between gap-4 md:mb-12">
        <Label>
          <span className="text-accent">({index})</span> {label}
        </Label>
        {aside && <Label className="text-right">{aside}</Label>}
      </div>
      <Reveal
        as="h2"
        className="max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
      >
        {title}
      </Reveal>
    </div>
  );
}

/** Tech tags laid out as a strip of tiles that share their borders (grout lines). */
export function TagTiles({ items, className = "" }) {
  return (
    <ul className={`flex flex-wrap pt-px pl-px ${className}`}>
      {items.map((t) => (
        <li
          key={t}
          className="-mt-px -ml-px border border-line-strong px-3 py-1.5 font-mono text-[11px] tracking-wide text-mute"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

const BUTTON_SIZES = {
  md: "gap-3 px-5 py-4 text-xs",
  sm: "gap-2 px-4 py-2.5 text-[11px]",
};
const BUTTON_VARIANTS = {
  primary: "bg-accent text-ink",
  outline: "border border-line-strong text-bone hover:border-bone hover:text-ink",
};

/** Square-cornered button; a bone-coloured fill sweeps up from the bottom on hover. */
export function Button({ as: Tag = "a", variant = "primary", size = "md", className = "", children, ...rest }) {
  return (
    <Tag
      className={`group relative isolate inline-flex items-center overflow-hidden font-mono font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${BUTTON_SIZES[size]} ${BUTTON_VARIANTS[variant]} ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-bone transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
      />
      {children}
    </Tag>
  );
}
