import { useEffect, useRef, useState } from "react";
import {
  Phone, MessageCircle, MessageSquare, ArrowUpRight, ArrowRight, Check,
  Sun, Shield, Eye, Zap, Sparkles, Truck, Award, Plus, Minus,
  Instagram, Facebook, MapPin, Clock, X, Menu, Gift, Home, Car,
  ZoomIn,
} from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import residentialSpecialty from "@/assets/residential-specialty.jpg";
import heroCar from "@/assets/hero-car.jpg";
import charcoalFilm from "@/assets/charcoal-film.jpg";
import charcoalBlackExample from "@/assets/charcoal-black-example.png";
import blueFilmExample from "@/assets/blue-film-example.png";
import dualReflective from "@/assets/dual-reflective.jpg";
import dualReflectiveExample from "@/assets/dual-reflective-example.png";
import blackTint from "@/assets/black-tint.jpg";
import chameleonBlue from "@/assets/chameleon-blue.jpg";
import beforeHouse from "@/assets/before-house.jpg";
import afterHouse from "@/assets/after-house.jpg";
import { useReveal } from "@/hooks/use-reveal";


const nav = [
  { label: "Home",        href: "#top" },
  { label: "Residential", href: "#residential" },
  { label: "Automotive",  href: "#automotive" },
  { label: "Gallery",     href: "#gallery" },
  { label: "About",       href: "#about" },
  { label: "FAQ",         href: "#faq" },
  { label: "Contact",     href: "#contact" },
];

const residentialFilms = [
  {
    num: "01",
    name: "Charcoal Black",
    image: charcoalBlackExample,
    tagline: "The signature finish.",
    body: "A deep, sophisticated charcoal that transforms glass into a soft architectural surface — daylight in, prying eyes out.",
    points: ["Elegant charcoal finish", "Strong daytime privacy", "99% UV protection", "Meaningful heat reduction"],
  },
  {
    num: "02",
    name: "Blue Film",
    image: blueFilmExample,
    tagline: "A distinctive character.",
    body: "A refined blue tone with a subtle reflective quality — a statement finish for contemporary architecture without ever looking loud.",
    points: ["Contemporary blue tone", "Glare reduction", "99% UV protection", "Cooler interior temperature"],
  },
  {
    num: "03",
    name: "Dual Reflective",
    image: dualReflectiveExample,
    tagline: "The premium standard.",
    body: "Our flagship residential film. A mirror-clean exterior for maximum daytime privacy and the highest heat rejection we install — designed to last.",
    points: ["Maximum daytime privacy", "Highest heat rejection", "99% UV protection", "Reduces cooling costs"],
  },
];

const carPackages = [
  {
    num: "01",
    name: "Chameleon Windscreen",
    price: "£80",
    image: chameleonBlue,
    body: "Signature colour-shifting chameleon film professionally applied to the front windscreen. Currently offered in our blue chameleon finish.",
    points: ["Chameleon blue finish", "Precision computer-cut", "Heat & UV rejection"],
  },
  {
    num: "02",
    name: "Sides & Rear",
    price: "£120",
    image: blackTint,
    body: "All side windows and the rear window tinted to your chosen shade — the clean OEM look, done properly.",
    points: ["All side windows", "Rear window included", "Factory-flush edges"],
  },
  {
    num: "03",
    name: "The Full Signature",
    price: "£250",
    image: heroCar,
    body: "Our flagship car package — chameleon windscreen, all sides, rear window and rear lights. A complete, cohesive finish.",
    points: ["Chameleon windscreen", "All sides + rear", "Tinted rear lights", "Bubble-free guarantee"],
    featured: true,
  },
];

const benefits = [
  { icon: Sun,       t: "Heat rejection",   d: "Up to 80% infrared blocked." },
  { icon: Shield,    t: "UV protection",    d: "Blocks 99% harmful UV rays." },
  { icon: Eye,       t: "Privacy",          d: "Daytime privacy, clear views out." },
  { icon: Zap,       t: "Energy savings",   d: "Lower cooling costs year-round." },
  { icon: Sparkles,  t: "Modern finish",    d: "A premium, uniform appearance." },
  { icon: Truck,     t: "We come to you",   d: "Mobile fitting anywhere in the UK." },
  { icon: Award,     t: "Guaranteed",       d: "Meticulous, bubble-free installs." },
  { icon: Check,     t: "Free quotes",      d: "No-obligation, itemised pricing." },
];

const faqs = [
  { q: "How long does installation take?", a: "Vehicle tints are typically completed in 2–4 hours. Residential installations vary by window count — a typical home takes half a day to a full day." },
  { q: "Can window film be removed?", a: "Yes — our films can be safely removed by a professional without damaging the glass beneath." },
  { q: "How much heat does it reduce?", a: "Depending on specification, our premium films reject up to 80% of solar heat — a very noticeable difference in comfort." },
  { q: "Does it block UV?", a: "All films block up to 99% of harmful UV rays, protecting your skin, interiors and furnishings." },
  { q: "Do you cover my area?", a: "We are fully mobile and install at homes and workplaces across the UK. Share your postcode for a firm quote." },
];

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main id="top">
        <Hero />
        <SamplePromo />
        <Marquee />
        <Residential />
        <Compare />
        <Benefits />
        <Automotive />
        <Gallery />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  FREE SAMPLE PROMO STRIP  ───────────────────────────── */
function SamplePromo() {
  return (
    <a
      href="#residential"
      className="group relative block bg-foreground text-background py-5 sm:py-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-electric via-electric/90 to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground shrink-0">
            <Gift className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="font-display font-semibold text-[15px] sm:text-lg tracking-tight">
              Free mobile one-window sample install
            </p>
            <p className="text-[13px] text-background/75">
              We come to your home, fit one window free, and you choose the film that suits you.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 h-10 text-[13px] font-medium group-hover:translate-x-1 transition-transform">
          See how it works <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

/* ─────────────────────────────  HEADER  ───────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-display font-bold text-sm">V</span>
          <span className="font-display font-semibold tracking-tight text-[15px] sm:text-base">
            Vivid Window Films
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-[14px] text-foreground/70">
          {nav.slice(1, -1).map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-2 text-[12px] text-foreground/60 mr-1">
            <Truck className="h-3.5 w-3.5" /> Mobile · UK-wide
          </span>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-electric px-5 h-10 text-[13.5px] font-medium text-electric-foreground hover:brightness-110 transition"
          >
            Get a Free Quote
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mx-6 mb-4 rounded-3xl bg-background border border-border shadow-lift p-6 flex flex-col gap-4">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-[15px] text-foreground/80 hover:text-electric">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 overflow-hidden">
      {/* Cinematic backdrop — residential first */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroHome}
          alt="Modern UK home with premium residential window film"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 sm:px-10 pb-24">
        <div className="max-w-3xl animate-rise">
          <p className="text-[12px] uppercase tracking-[0.3em] text-electric font-medium mb-8">
            Mobile window tinting · UK-wide
          </p>
          <h1 className="font-display font-semibold text-[13vw] sm:text-[9vw] lg:text-[6.6vw] leading-[0.95] tracking-[-0.04em] text-foreground">
            A cooler, calmer,
            <br />
            <span className="text-foreground/50">more private</span> home
            <br />
            <span className="text-electric">delivered.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-foreground/70 max-w-xl">
            Bespoke residential window films installed with precision in your
            home. We come to you anywhere in the UK — experience the difference first with a free sample window.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#residential"
              className="group inline-flex items-center gap-2 rounded-full bg-electric px-8 h-14 text-[15px] font-medium text-electric-foreground hover:brightness-110 transition-all"
            >
              Explore Residential
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#automotive"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-8 h-14 text-[15px] font-medium text-foreground hover:border-foreground/50 transition"
            >
              Automotive tinting
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl">
            {[
              { k: "99%", v: "UV blocked" },
              { k: "80%", v: "Heat rejected" },
              { k: "Free", v: "Sample window" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">{s.k}</dt>
                <dd className="mt-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  MARQUEE  ───────────────────────────── */
function Marquee() {
  const items = [
    "Mobile UK-wide", "99% UV blocked", "80% heat rejection", "Free quotes",
    "Residential & automotive", "Bubble-free guarantee", "Premium ceramic films",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-border py-8 overflow-hidden bg-secondary">
      <div className="flex gap-14 whitespace-nowrap animate-marquee font-display text-2xl sm:text-3xl font-medium">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-14 text-foreground/75">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-electric shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────  RESIDENTIAL  ───────────────────────────── */
function Residential() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="residential" className="relative py-28 sm:py-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="reveal max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 h-9 text-[11px] uppercase tracking-[0.25em] text-electric">
            <Home className="h-3.5 w-3.5" /> Residential — Our Speciality
          </div>
          <h2 className="mt-8 font-display text-5xl sm:text-7xl font-semibold leading-[0.98] tracking-[-0.035em] text-foreground">
            A quieter, cooler,
            <br />
            <span className="text-foreground/50">more private</span> home.
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Residential window film is where we do our finest work — meticulously fitted in your home, without disruption, and finished to a standard we're proud to photograph up close.
          </p>
        </div>

        <figure className="reveal mt-16 relative overflow-hidden rounded-3xl aspect-[21/9] shadow-lift group">
          <img src={residentialSpecialty} alt="Modern UK home with premium residential window film" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        </figure>

        {/* FREE SAMPLE INSTALL — Dedicated block */}
        <div className="reveal mt-14 relative overflow-hidden rounded-[32px] border border-electric/20 bg-secondary shadow-lift">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
          <div className="p-8 sm:p-14 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-electric text-electric-foreground px-4 h-9 text-[11px] uppercase tracking-[0.25em] font-medium">
                  <Gift className="h-3.5 w-3.5" /> Complimentary Sample Install
                </div>
                <h3 className="mt-6 font-display text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
                  Try one window, <span className="text-electric">completely free.</span>
                </h3>
                <p className="mt-6 text-[16px] sm:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                  We visit your home at no charge and install film on a single window of your choice. You see the exact finish, privacy level and light quality in your own space before deciding on the full job. No pressure, no obligation.
                </p>

                {/* How it works */}
                <div className="mt-10 grid sm:grid-cols-3 gap-6">
                  {[
                    { n: "01", t: "Book a visit", d: "Choose a date and tell us which room you’d like to sample." },
                    { n: "02", t: "We install one window", d: "Our fitter applies your chosen film on one window — free." },
                    { n: "03", t: "You decide", d: "Live with it, then choose your film and book the full install." },
                  ].map((step) => (
                    <div key={step.n} className="relative">
                      <span className="font-display text-3xl font-semibold text-electric/30">{step.n}</span>
                      <h4 className="mt-3 font-display text-lg font-semibold tracking-tight">{step.t}</h4>
                      <p className="mt-2 text-[14px] text-foreground/65 leading-relaxed">{step.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three film options */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.25em] text-foreground/55 mb-6">Pick your sample film</p>
                  <div className="space-y-4">
                    {[
                      { name: "Charcoal Black", desc: "Deep, architectural privacy.", color: "bg-neutral-800" },
                      { name: "Blue Film", desc: "Contemporary blue reflective finish.", color: "bg-blue-600" },
                      { name: "Dual Reflective", desc: "Mirror-clean exterior, premium heat rejection.", color: "bg-slate-500" },
                    ].map((film) => (
                      <div key={film.name} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 hover:border-electric/40 transition-colors">
                        <div className={`h-14 w-14 rounded-xl ${film.color} shadow-inner shrink-0`} />
                        <div>
                          <h4 className="font-display text-[15px] font-semibold tracking-tight">{film.name}</h4>
                          <p className="text-[13px] text-foreground/60">{film.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 h-14 text-[15px] font-medium hover:bg-electric hover:text-electric-foreground transition-all">
                  Book a free sample <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The three residential films */}
        <div className="mt-24">
          <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-electric mb-4">The Collection</p>
              <h3 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-2xl">
                Three residential films. Every one, installed to the same standard.
              </h3>
            </div>
            <p className="text-[14px] text-foreground/60 max-w-xs">
              Pricing is bespoke to your property — a firm, itemised quote is prepared after your free consultation.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-6">
            {residentialFilms.map((f) => (
              <ResidentialCard key={f.name} f={f} onEnlarge={() => setLightbox(typeof f.image === "string" ? f.image : f.image.url)} />
            ))}
          </div>

          <p className="reveal mt-10 text-center text-[13px] uppercase tracking-[0.25em] text-foreground/55">
            Prices given upon quote · Free consultation & sample install
          </p>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/85 backdrop-blur-xl grid place-items-center p-6 cursor-zoom-out"
          onClick={() => setLightbox(null)}
          style={{ animation: "fade-in 0.3s ease-out" }}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground"
            onClick={() => setLightbox(null)}
          >
            <X className="h-4 w-4" />
          </button>
          <img src={lightbox} alt="" className="max-h-[86vh] max-w-[92vw] rounded-2xl shadow-lift object-contain" />
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────  AUTOMOTIVE  ───────────────────────────── */
function Automotive() {
  return (
    <section id="automotive" className="relative py-28 sm:py-40 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 h-9 text-[11px] uppercase tracking-[0.25em] text-electric">
            <Car className="h-3.5 w-3.5" /> Automotive
          </div>
          <h2 className="mt-8 font-display text-4xl sm:text-6xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground">
            Three car packages. Transparent pricing.
          </h2>
          <p className="mt-6 text-[16px] sm:text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Fitted at your driveway, finished like the factory. Choose the package that suits — the price you see is the price you pay.
          </p>
        </div>

        <div className="reveal mt-16 grid md:grid-cols-3 gap-6 items-stretch">
          {carPackages.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  COMPARE  ───────────────────────────── */
function Compare() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionHead kicker="Before / After" title={<>See the difference.</>} />
        <div className="reveal mt-14 space-y-8">
          <figure className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-secondary shadow-lift">
            <img src={beforeHouse} alt="Home before window film installation" className="h-full w-full object-cover" />
            <figcaption className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.2em] bg-background/85 backdrop-blur rounded-full px-3 py-1.5">Before</figcaption>
          </figure>
          <figure className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-secondary shadow-lift">
            <img src={afterHouse} alt="Home after window film installation" className="h-full w-full object-cover" />
            <figcaption className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.2em] bg-foreground text-background rounded-full px-3 py-1.5">After</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  ABOUT  ───────────────────────────── */
function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 grid lg:grid-cols-12 gap-14 items-start">
        <div className="reveal lg:col-span-5">
          <figure className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lift">
            <img src={blackTint} alt="Precision installation" className="h-full w-full object-cover" />
          </figure>
        </div>
        <div className="reveal lg:col-span-7 lg:pt-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-electric mb-6">About</p>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
            A studio for the details you notice — <span className="text-foreground/50">and the ones you don't.</span>
          </h2>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-2xl">
            Vivid Window Films is a UK-wide mobile tinting studio. One dedicated fitter per job, ceramic-grade films chosen for their optical clarity and long-term durability, and a finish we're happy to photograph up close.
          </p>
          <div className="hairline my-10" />
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-[15px]">
            {["Mobile fitting UK-wide", "Precision cut edges", "Ceramic & dual-reflective films", "Bubble-free finish", "Fully insured", "Itemised quotes in advance"].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-electric text-electric-foreground shrink-0">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  RESIDENTIAL CARD  ───────────── */
function ResidentialCard({ f, onEnlarge }: { f: (typeof residentialFilms)[number]; onEnlarge: () => void }) {
  const imageUrl = typeof f.image === "string" ? f.image : f.image.url;
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 flex flex-col">
      <button
        onClick={onEnlarge}
        className="relative aspect-[4/5] overflow-hidden cursor-zoom-in"
        aria-label={`Enlarge ${f.name} image`}
      >
        <img src={imageUrl} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]" />
        <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.25em] bg-background/85 backdrop-blur rounded-full px-3 py-1.5 text-foreground/70">
          № {f.num}
        </span>
        <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-background/85 backdrop-blur text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>
      <div className="p-7 flex flex-col flex-1">
        <h4 className="font-display text-2xl font-semibold tracking-tight">{f.name}</h4>
        <p className="mt-1 text-[13px] uppercase tracking-[0.2em] text-electric">{f.tagline}</p>
        <p className="mt-4 text-[14.5px] text-foreground/70 leading-relaxed">{f.body}</p>
        <ul className="mt-6 space-y-2.5 text-[13.5px]">
          {f.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5">
              <Check className="h-4 w-4 text-electric shrink-0 mt-0.5" />
              <span className="text-foreground/80">{pt}</span>
            </li>
          ))}
        </ul>
        <div className="hairline my-6" />
        <a href="#contact" className="inline-flex items-center justify-between text-[13.5px] font-medium text-foreground hover:text-electric transition group/link">
          Request a quote
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

/* ─────────────  CAR PACKAGE CARD  ───────────── */
function PackageCard({ p }: { p: (typeof carPackages)[number] }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 flex flex-col ${
        p.featured
          ? "border-electric/40 bg-background ring-1 ring-electric/20"
          : "border-border bg-background"
      }`}
    >
      {p.featured && (
        <span className="absolute top-5 right-5 z-10 text-[10px] uppercase tracking-[0.25em] bg-electric text-electric-foreground rounded-full px-3 py-1.5 font-medium">
          Most Popular
        </span>
      )}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/50">Package № {p.num}</p>
        <h4 className="mt-3 font-display text-2xl font-semibold tracking-tight">{p.name}</h4>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-5xl font-semibold tracking-[-0.03em] text-foreground">{p.price}</span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-foreground/50">fitted</span>
        </div>
        <p className="mt-5 text-[14.5px] text-foreground/70 leading-relaxed">{p.body}</p>
        <ul className="mt-6 space-y-2.5 text-[13.5px] flex-1">
          {p.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5">
              <Check className="h-4 w-4 text-electric shrink-0 mt-0.5" />
              <span className="text-foreground/80">{pt}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-[14px] font-medium transition ${
            p.featured
              ? "bg-electric text-electric-foreground hover:brightness-110"
              : "bg-foreground text-background hover:bg-electric hover:text-electric-foreground"
          }`}
        >
          Book this package <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/* ─────────────────────────────  BENEFITS  ───────────────────────────── */
function Benefits() {
  return (
    <section id="benefits" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionHead kicker="Why window film" title={<>Comfort, privacy, style — in a single install.</>} />
        <div className="reveal mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl bg-secondary border border-border p-8 hover:bg-background hover:shadow-lift hover:-translate-y-1 transition-all duration-500">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric text-electric-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h4 className="mt-7 font-display text-lg font-semibold">{t}</h4>
              <p className="mt-2 text-[14px] text-foreground/65 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  GALLERY  ───────────────────────────── */
function Gallery() {
  const [tab, setTab] = useState<"all" | "res" | "auto">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const set = {
    all:  [charcoalFilm, heroCar, blueFilmExample, blackTint, dualReflective, chameleonBlue, heroHome, blackTint],
    res:  [charcoalFilm, blueFilmExample, dualReflective, heroHome, charcoalFilm, blueFilmExample],
    auto: [heroCar, blackTint, chameleonBlue, blackTint, heroCar, chameleonBlue],
  }[tab];
  const shapes = [
    "col-span-6 md:col-span-4 aspect-[4/5]",
    "col-span-6 md:col-span-4 aspect-square",
    "col-span-6 md:col-span-4 aspect-[4/5]",
    "col-span-6 md:col-span-4 aspect-square",
    "col-span-6 md:col-span-4 aspect-[4/5]",
    "col-span-6 md:col-span-4 aspect-square",
    "col-span-6 md:col-span-4 aspect-square",
    "col-span-6 md:col-span-4 aspect-[4/5]",
  ];
  return (
    <section id="gallery" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <SectionHead kicker="Gallery" title={<>Recent installations.</>} />
          <div className="inline-flex rounded-full bg-secondary p-1 text-[13.5px] shrink-0 border border-border">
            {(["all", "res", "auto"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-5 h-10 rounded-full transition-all ${
                  tab === k
                    ? "bg-foreground text-background"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {k === "all" ? "All" : k === "res" ? "Residential" : "Automotive"}
              </button>
            ))}
          </div>
        </div>
        <div className="reveal mt-14 grid grid-cols-6 md:grid-cols-12 gap-5">
          {set.map((src, i) => {
            const imgUrl = typeof src === "string" ? src : src.url;
            return (
              <button
                key={i}
                onClick={() => setLightbox(imgUrl)}
                className={`relative overflow-hidden rounded-3xl group shadow-soft hover:shadow-lift transition ${shapes[i % shapes.length]}`}
              >
                <img src={imgUrl} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]" />
                <span className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition" />
              </button>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/85 backdrop-blur-xl grid place-items-center p-6"
          onClick={() => setLightbox(null)}
          style={{ animation: "fade-in 0.3s ease-out" }}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground"
            onClick={() => setLightbox(null)}
          >
            <X className="h-4 w-4" />
          </button>
          <img src={lightbox} alt="" className="max-h-[86vh] max-w-[92vw] rounded-2xl shadow-lift object-contain" />
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────  FAQ  ───────────────────────────── */
function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 sm:py-40 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 grid lg:grid-cols-12 gap-14">
        <div className="reveal lg:col-span-5">
          <SectionHead kicker="FAQ" title={<>Answers, before you ask.</>} />
          <p className="mt-8 text-[15px] text-foreground/65 max-w-sm leading-relaxed">
            Still curious? Message us on WhatsApp — we usually reply within the hour.
          </p>
          <a href="https://wa.me/447713737727" className="mt-6 inline-flex items-center gap-2 text-[14px] text-electric hover:underline">
            <MessageCircle className="h-4 w-4" /> Message us
          </a>
        </div>
        <div className="reveal lg:col-span-7">
          <div className="border-t border-foreground/10">
            {faqs.map((f, i) => {
              const on = openIdx === i;
              return (
                <div key={i} className="border-b border-foreground/10">
                  <button onClick={() => setOpenIdx(on ? null : i)} className="w-full flex items-center justify-between gap-6 py-7 text-left group">
                    <span className="font-display text-lg sm:text-xl font-medium group-hover:text-electric transition">
                      {f.q}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-foreground/15 shrink-0">
                      {on ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {on && <p className="pb-7 pr-12 text-[15px] text-foreground/65 leading-relaxed max-w-2xl">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  CONTACT  ───────────────────────────── */
function Contact() {
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [service, setService] = useState("Residential — Free sample install");
  const [notes, setNotes] = useState("");

  const phoneDisplay = "+44 7713 737727";
  const phoneRaw = "+447713737727";
  const smsBody = encodeURIComponent(
    `Hi — I'd like a quote.\nName: ${name || "(your name)"}\nPostcode: ${postcode || "(postcode)"}\nService: ${service}${notes ? `\nNotes: ${notes}` : ""}`
  );

  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionHead
          kicker="Contact"
          title={<>Call or text — <span className="text-foreground/50">no forms, no emails.</span></>}
        />
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="reveal lg:col-span-5 space-y-4">
            <ContactAction href={`tel:${phoneRaw}`} icon={Phone} label="Call now" value={phoneDisplay} />
            <ContactAction href={`sms:${phoneRaw}`} icon={MessageSquare} label="Text message" value={phoneDisplay} />
            <ContactAction href={`https://wa.me/${phoneRaw.replace("+", "")}`} icon={MessageCircle} label="WhatsApp" value="Chat with us" />
            <div className="rounded-3xl bg-secondary border border-border p-7">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-electric">
                <Clock className="h-3.5 w-3.5" /> Hours
              </div>
              <dl className="mt-5 text-[14px] grid grid-cols-2 gap-y-2.5">
                <dt className="text-foreground/85">Mon – Fri</dt><dd className="text-foreground/60">8:00 – 18:00</dd>
                <dt className="text-foreground/85">Saturday</dt><dd className="text-foreground/60">9:00 – 16:00</dd>
                <dt className="text-foreground/85">Sunday</dt><dd className="text-foreground/60">By appointment</dd>
              </dl>
              <div className="hairline my-6" />
              <div className="flex items-center gap-2 text-[14px] text-foreground/70">
                <MapPin className="h-4 w-4 text-electric" /> Mobile service — United Kingdom
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-7 rounded-3xl bg-secondary border border-border p-7 sm:p-10 space-y-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Request a quote</h3>
              <p className="mt-3 text-[14px] text-foreground/65 leading-relaxed">
                Fill this in (optional) and tap <span className="text-foreground/90 font-medium">Text me the details</span> — it opens your Messages app with everything pre-filled. Or just call.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" value={name} onChange={setName} />
              <Field label="Postcode" name="postcode" placeholder="Where should we come to?" value={postcode} onChange={setPostcode} />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-2 w-full bg-background border border-border rounded-2xl px-4 h-12 text-[14px] focus:border-electric focus:outline-none"
              >
                <option>Residential — Free sample install</option>
                <option>Residential — Charcoal Black</option>
                <option>Residential — Blue Film</option>
                <option>Residential — Dual Reflective</option>
                <option>Car — Chameleon Windscreen (£80)</option>
                <option>Car — Sides & Rear (£120)</option>
                <option>Car — Full Signature (£250)</option>
                <option>Not sure — please advise</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">Notes (optional)</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything we should know…"
                className="mt-2 w-full bg-background border border-border rounded-2xl px-4 py-3.5 text-[14px] focus:border-electric focus:outline-none resize-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`sms:${phoneRaw}?&body=${smsBody}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-electric h-14 px-8 text-[15px] font-medium text-electric-foreground hover:brightness-110 transition"
              >
                <MessageSquare className="h-4 w-4" /> Text me the details
              </a>
              <a
                href={`tel:${phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background h-14 px-8 text-[15px] font-medium hover:bg-foreground/90 transition"
              >
                <Phone className="h-4 w-4" /> Call {phoneDisplay}
              </a>
            </div>
            <p className="text-[12px] text-foreground/50">No emails, no signup — your message goes straight to our phone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, value, onChange }: { label: string; name: string; type?: string; placeholder?: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-2 w-full bg-background border border-border rounded-2xl px-4 h-12 text-[14px] focus:border-electric focus:outline-none"
      />
    </div>
  );
}

function ContactAction({ href, icon: Icon, label, value }: { href: string; icon: typeof Phone; label: string; value: string }) {
  return (
    <a href={href} className="rounded-3xl bg-secondary border border-border p-5 flex items-center gap-4 hover:bg-background hover:shadow-lift transition-all duration-500 group">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric text-electric-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">{label}</p>
        <p className="text-[15px] font-medium truncate">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-electric transition" />
    </a>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="text-[12px] uppercase tracking-[0.3em] text-electric mb-6">{kicker}</p>
      <h2 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground">
        {title}
      </h2>
    </div>
  );
}

/* ─────────────────────────────  FOOTER  ───────────────────────────── */
function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground font-display font-bold">V</span>
            <span className="font-display font-semibold text-lg">Vivid Window Films</span>
          </a>
          <p className="mt-8 font-display text-3xl sm:text-4xl leading-[1.15] max-w-xl font-semibold tracking-[-0.03em]">
            Premium window films, fitted at your doorstep — <span className="text-background/50">anywhere in the UK.</span>
          </p>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-electric h-12 px-7 text-[14px] font-medium text-electric-foreground hover:brightness-110 transition">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-10 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-background/10 transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-background/10 transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <FooterCol title="Explore" links={[{ label: "Residential", href: "#residential" }, { label: "Automotive", href: "#automotive" }, { label: "Gallery", href: "#gallery" }, { label: "About", href: "#about" }]} />
        <FooterCol title="Support" links={[{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }, { label: "Free Quote", href: "#contact" }]} />
        <FooterCol title="Contact" links={[{ label: "Call +44 7713 737727", href: "tel:+447713737727" }, { label: "Text +44 7713 737727", href: "sms:+447713737727" }, { label: "WhatsApp", href: "https://wa.me/447713737727" }]} />
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-background/50">
          <p>© {new Date().getFullYear()} Vivid Window Films. All rights reserved.</p>
          <p>Mobile service across the United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-[11px] uppercase tracking-[0.25em] text-background/50 mb-5">{title}</h4>
      <ul className="space-y-3 text-[14px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-background/80 hover:text-background transition">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}