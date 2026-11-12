// All site content lives here — update this file when the CV changes.

const base = import.meta.env.BASE_URL;
export const asset = (path) => `${base}${path}`;

export const PROFILE = {
  name: "Toma Milićević",
  firstName: "Toma",
  lastName: "Milićević",
  role: "Full-stack web developer",
  focus: "frontend focus",
  location: "Zagreb, Croatia",
  availability: "Open to roles in Zagreb or remote",
  email: "tomatomamilicevic@gmail.com",
  phone: "+385 92 419 2060",
  phoneHref: "tel:+385924192060",
  github: "https://github.com/TomaMili",
  githubRepos: "https://github.com/TomaMili?tab=repositories",
  linkedin: "https://www.linkedin.com/in/toma-milićević-2057a7268/",
  cv: [
    { label: "EN", lang: "English", href: asset("Toma_Milicevic_CV_English.pdf") },
    { label: "HR", lang: "Hrvatski", href: asset("TomaMilicevic_CV_Hrv.pdf") },
  ],
};

export const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const MARQUEE = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "PostgreSQL",
  "Node.js",
  "Redux",
  "Vercel",
  "Figma",
  "Local SEO",
  "Branding",
];

// Words wrapped in *asterisks* are highlighted (can span several words).
export const ABOUT_STATEMENT =
  "I learned precision laying *tiles* with my father — on site since I was 15. The *details* nobody notices are the ones that hold everything together. I build websites the same way: *tile by tile.*";

export const ABOUT_BIO = [
  "I'm a frontend-focused full-stack developer and a Computer Science master's student at the Zagreb University of Applied Sciences (TVZ).",
  "As a freelancer I take small businesses and associations from the first brief to launch: brand and UI design, Next.js and Supabase development, admin panels, SEO and deployment.",
  "I also co-founded Cineo, an AI-powered movie library that reached the Mc² finals and went through the BIRD Incubator. Now I'm looking for a developer role in Zagreb or remote where I can ship production code and keep growing.",
];

export const STATS = [
  { value: "3", label: "Client websites launched in 2026" },
  { value: "Mc²", label: "Competition finalist, 2025" },
  { value: "BIRD", label: "Incubator AI startup programme" },
  { value: "4.3", label: "Bachelor's GPA, out of 5.0" },
];

export const FEATURED = [
  {
    id: "cineo",
    title: "Cineo",
    kind: "AI startup",
    role: "Co-founder & full-stack developer",
    year: "2025 — Now",
    summary:
      "AI-powered movie discovery platform and personal film library, co-founded with two colleagues.",
    points: [
      "Mc² competition finalist (2025) under mentorship from Netgen",
      "Earned a place in the BIRD Incubator AI startup programme (Oct 2025 – Apr 2026)",
      "Launched the public beta to the waitlist with Resend + Supabase emails, and worked on SEO",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "TMDB API", "Vercel"],
    links: [
      { label: "cineoai.com", href: "https://cineoai.com" },
      { label: "Code", href: "https://github.com/TomaMili/cineo" },
    ],
    visual: "cineo",
  },
  {
    id: "brocanska",
    title: "Broćanska zajednica Zagreb",
    kind: "Client · Association",
    role: "Brand, social media, full-stack",
    year: "2026",
    summary:
      "Created the full brand identity and built the association's platform from scratch in Next.js and Supabase.",
    points: [
      "Interactive map of the Brotnjo villages, digital memory archive and photo gallery",
      "News, membership sign-up and newsletter",
      "Run the association's Instagram and Facebook, incl. promotion of the Broćanska večer 2026 gala at The Westin Zagreb",
    ],
    tags: ["Next.js", "Supabase", "Brand identity", "Social media"],
    links: [{ label: "brocanskazajednica.hr", href: "https://brocanskazajednica.hr" }],
    image: asset("work/brocanska.webp"),
    domain: "brocanskazajednica.hr",
  },
  {
    id: "mapeh",
    title: "Rent a car Mapeh",
    kind: "Client · Čitluk & Međugorje",
    role: "Full redesign",
    year: "2026",
    summary: "Redesigned and rebuilt the company website from the ground up.",
    points: [
      "Bilingual (HR/EN) Next.js site with a full vehicle catalog",
      "A dedicated page and reservation inquiry form for every vehicle",
      "Admin panel and local SEO",
    ],
    tags: ["Next.js", "HR / EN", "Admin panel", "Local SEO"],
    links: [{ label: "rentacar-medjugorje.eu", href: "https://rentacar-medjugorje.eu" }],
    image: asset("work/mapeh.webp"),
    domain: "rentacar-medjugorje.eu",
  },
  {
    id: "aspremium",
    title: "AS Premium Rent-a-Car",
    kind: "Client · Ljubuški",
    role: "Full website",
    year: "2026",
    summary:
      "Built the complete website from the ground up to replace the client's legacy WordPress site.",
    points: [
      "Bilingual vehicle catalog",
      "Inquiry-based booking flow",
      "Admin panel and local SEO",
    ],
    tags: ["Next.js", "HR / EN", "Admin panel", "Local SEO"],
    links: [{ label: "aspremiumrent.com", href: "https://aspremiumrent.com" }],
    image: asset("work/aspremium.webp"),
    domain: "aspremiumrent.com",
  },
];

export const TYPICAL_STACK = "Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel";

export const OTHER_PROJECTS = [
  {
    title: "Hotel booking app for guests",
    date: "Nov 2025",
    desc: "Guest-facing booking app connected to the same backend as my internal hotel app.",
    tags: ["Next.js", "React", "Supabase"],
    href: "https://github.com/TomaMili/booking-app-next",
  },
  {
    title: "AI Equity Mapper",
    date: "Nov 2025",
    desc: "Visualizes climate inequality across regions with the Climate Inequality Index, combining ASDI data with AI-powered insights.",
    tags: ["Data viz", "AI insights", "ASDI"],
    href: "https://github.com/TomaMili/equity-climate-sight",
  },
  {
    title: "Internal hotel management app",
    date: "May 2025",
    desc: "Internal app for managing a hotel's operations, built after noticing a real need while working in tourism.",
    tags: ["React", "Redux", "Supabase"],
    href: "https://github.com/TomaMili/internal-booking-app",
  },
  {
    title: "Desktop library application",
    date: "Jul 2024",
    desc: "Online library desktop app with a book catalog, borrowing history and admin features.",
    tags: ["C++", "Embarcadero C++ Builder"],
    href: "https://github.com/TomaMili/CppBuilder-Book-store-application",
  },
];

export const EXPERIENCE = [
  {
    period: "2026 — Present",
    title: "Freelance Web Developer",
    org: "Zagreb / remote",
    desc: "End-to-end web solutions for small businesses and associations, from the first brief to launch — Broćanska zajednica Zagreb, Rent a car Mapeh and AS Premium Rent-a-Car.",
  },
  {
    period: "Mar 2025 — Present",
    title: "Co-founder & Full-stack Developer",
    org: "Cineo",
    desc: "Building an AI-powered movie discovery platform. Mc² finalist (2025) and BIRD Incubator programme (Oct 2025 – Apr 2026).",
  },
];

export const OTHER_WORK = [
  {
    period: "Oct 2025 — Present",
    title: "Event Logistics",
    org: "Lion Gastro, Zagreb",
    desc: "Logistics team for 20+ concerts and events at Arena Zagreb.",
  },
  {
    period: "Nov 2022 — Feb 2025",
    title: "Event Logistics (student job)",
    org: "Lion Events Limited, Zagreb",
    desc: "Logistics team for 15+ concerts and events at Arena Zagreb.",
  },
  {
    period: "May — Jul 2024",
    title: "Warehouse Logistics (student job)",
    org: "Lagermax Logistics Croatia",
    desc: "Organized and prepared shipments in a Coca-Cola warehouse.",
  },
  {
    period: "Jun — Sep 2023",
    title: "Seasonal job",
    org: "Makarska Touristik, Makarska",
    desc: "Maintenance of hotels and apartments.",
  },
  {
    period: "Since 2018",
    title: "Ceramic Tiler",
    org: "Father's tiling business",
    desc: "Professional floor and wall tiling, on site since age 15.",
  },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
    wide: true,
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Supabase", "PostgreSQL / SQL", "REST APIs", "TMDB API"],
  },
  {
    group: "Delivery",
    items: ["Git & GitHub", "Vercel", "Technical & local SEO", "Multilingual sites (HR/EN)", "Responsive design"],
  },
  {
    group: "Design",
    items: ["Figma", "Photoshop", "Illustrator", "InDesign", "Lightroom", "Premiere Pro", "Branding & print"],
    wide: true,
  },
  {
    group: "Basic knowledge",
    items: ["Python", "C", "C++", "PHP"],
    muted: true,
  },
  {
    group: "Languages",
    items: ["Croatian — native", "English — full professional"],
    wide: true,
  },
];

export const EDUCATION = [
  {
    period: "2025 — Present",
    title: "Master's programme in Informatics",
    detail: "E-Business track · in progress",
    school: "Zagreb University of Applied Sciences (TVZ)",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor's degree in Informatics",
    detail: "E-Business track · GPA 4.3 / 5.0",
    school: "Zagreb University of Applied Sciences (TVZ)",
  },
  {
    period: "2018 — 2022",
    title: "General Gymnasium",
    detail: "2nd place, national competition in bridge modeling and construction (2022)",
    school: "High School fra Slavko Barbarić, Čitluk",
  },
];

export const CERTIFICATES = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Jun 2026",
    id: "41A96718ECE2",
  },
  {
    title: "Web Developer Certificate",
    issuer: "micro1",
    date: "Apr 2026",
  },
  {
    title: "The Ultimate React Course: React, Next.js, Redux & More",
    issuer: "Udemy",
    date: "Nov 2025",
    id: "UC-976d89e8-4d86-47be-8ed2-f61a6bab2304",
  },
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    date: "Apr 2023",
    id: "UC-ad4548b2-2168-4248-bc18-f5f41107e905",
  },
];

export const INTERESTS = ["Electric guitar", "Fishing", "Football"];
