import { MARQUEE } from "../data/content";

function Row({ items, className = "", reverse = false, outline = false }) {
  // Two identical halves; the animation shifts by -50% for a seamless loop.
  const half = (key) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className={`px-6 md:px-8 ${outline ? "text-outline" : ""}`}>{item}</span>
          <span className={`inline-block size-3 rotate-45 md:size-4 ${outline ? "bg-line-strong" : "bg-ink"}`} />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} ${className}`}>
      {half("a")}
      {half("b")}
    </div>
  );
}

/** Two crossing "tape" bands with the stack running through them. */
function Marquee() {
  return (
    <section aria-label="Tech stack" className="relative overflow-hidden py-16 md:py-24">
      <div className="-rotate-[2.5deg] scale-110 border-y border-line bg-ink-2 py-4 text-4xl font-semibold tracking-tight md:py-5 md:text-6xl">
        <Row items={[...MARQUEE].reverse()} reverse outline className="[--marquee-duration:60s]" />
      </div>
      <div className="relative -mt-16 rotate-[2deg] scale-110 bg-accent py-4 text-4xl font-semibold tracking-tight text-ink md:-mt-24 md:py-5 md:text-6xl">
        <Row items={MARQUEE} className="[--marquee-duration:45s]" />
      </div>
    </section>
  );
}

export default Marquee;
