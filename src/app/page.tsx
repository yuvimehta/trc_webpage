"use client";

import Link from "next/link";
import {
  DollarSign,
  Wrench,
  Timer,
  Building2,
  ArrowRight,
  ChevronDown,
  Bot,
  Cog,
} from "lucide-react";
import StatCounter from "@/components/StatCounter";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

const clientLogos = [
  { name: "PG Electroplast", logo: "/assets/clientele/pg.png" },
  { name: "JBJ Technologies", logo: "/assets/clientele/jbj.png" },
  { name: "JJ Technoplast", logo: "/assets/clientele/jj_technoplast.png" },
  { name: "Hikrobot", logo: "/assets/clientele/hikrobot.png" },
  { name: "IIHL", logo: "/assets/clientele/iihl.png" },
  { name: "Zomato", logo: "/assets/clientele/zomato.png" },
  { name: "Ford", logo: "/assets/clientele/ford.png" },
  { name: "Tata", logo: "/assets/clientele/tata.png" },
  { name: "Crimson", logo: "/assets/clientele/crimson.png" },
  { name: "Cubamars", logo: "/assets/clientele/cubamars.png" },
  { name: "KB Components", logo: "/assets/clientele/KB_components.png" },
];

const problems = [
  {
    icon: DollarSign,
    title: "2-3x Higher Cost",
    description:
      "Imported cobots carry duty, integration & spare costs that price out most MSMEs.",
  },
  {
    icon: Wrench,
    title: "No Local Support",
    description:
      "Foreign brands offer zero local application engineering. Slow spares cause costly downtime.",
  },
  {
    icon: Timer,
    title: "8-16 Week Lead Times",
    description:
      "Long delivery schedules delay projects, impacting production commitments and ROI.",
  },
  {
    icon: Building2,
    title: "Not Built for India",
    description:
      "Complex programming needs expensive integrators. Not designed for Indian shop floors.",
  },
];

const industries = [
  { name: "Automotive & Electronics", label: "Automotive Factory Floor" },
  { name: "Plastics & Packaging", label: "Packaging Line" },
  { name: "Metal & Machining", label: "Metal Workshop" },
  { name: "Logistics & Warehousing", label: "Warehouse Floor" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-dark mb-8">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              19+ enterprise clients &middot; 80% repeat orders
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
              India&apos;s Physical AI
              <br />
              <span className="text-accent">Collaborative Robot</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mx-auto max-w-xl text-base md:text-lg text-muted leading-relaxed mb-12 font-light">
              Making factory automation accessible to 63M+ Indian MSMEs.
              Plug-and-play deployment. Local support. 40-60% lower cost.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-7 py-3 text-sm font-mono uppercase tracking-wider text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Our Robot
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded border border-border px-7 py-3 text-sm font-mono uppercase tracking-wider text-foreground transition-all hover:border-muted-dark hover:bg-card"
              >
                Automation Solutions
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-2xl mx-auto">
              <StatCounter end={19} suffix="+" label="Clients" />
              <StatCounter end={80} suffix="%" label="Repeat Orders" />
              <StatCounter end={72} prefix="<" suffix="hr" label="Deployment" />
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={20} className="text-muted-dark" />
        </div>
      </section>

      {/* Client Marquee */}
      <Marquee items={clientLogos} />

      {/* Two Pillars */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="What We Do"
              title="Two Pillars of TRC"
              description="We deploy automation solutions on factory floors today — and we're building the AI-native robot that will power Indian manufacturing tomorrow."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <Link href="/solutions" className="block group">
                <div className="rounded-lg border border-dashed border-border p-8 h-full transition-all hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,59,48,0.06)]">
                  <div className="w-12 h-12 rounded border border-border bg-card flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                    <Cog size={24} className="text-accent" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent block mb-3">
                    Services
                  </span>
                  <h3 className="text-2xl font-bold mb-3">
                    Automation Solutions
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    End-to-end industrial automation — from pick &amp; place to
                    welding, machine tending to plasma treatment. We deploy,
                    integrate, and support robotic solutions across Indian
                    factories.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-accent group-hover:gap-3 transition-all">
                    View Solutions <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link href="/product" className="block group">
                <div className="rounded-lg border border-dashed border-border p-8 h-full transition-all hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,59,48,0.06)]">
                  <div className="w-12 h-12 rounded border border-border bg-card flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                    <Bot size={24} className="text-accent" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent block mb-3">
                    Product
                  </span>
                  <h3 className="text-2xl font-bold mb-3">
                    The TRC Cobot
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    India&apos;s first Physical AI-native collaborative robot.
                    Purpose-built for Indian shop floors with AI-assisted
                    programming, zero-CAPEX options, and 40-60% lower TCO.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-accent group-hover:gap-3 transition-all">
                    Explore Product <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="The Problem"
              title="Why Indian Factories Can't Automate"
              description="India has just 5 robots per 10,000 workers vs 106 global average — despite being the 5th largest economy."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((problem, i) => (
              <AnimatedSection key={problem.title} delay={i * 0.1}>
                <div className="group rounded-lg border border-dashed border-border bg-background p-6 transition-all hover:border-accent/30 h-full">
                  <div className="mb-4 w-10 h-10 rounded border border-border bg-card flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <problem.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Industries"
              title="Built for Every Shop Floor"
              description="From automotive to logistics — our solutions adapt to the diverse needs of Indian manufacturing."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.name} delay={i * 0.1}>
                <div className="group rounded-lg border border-dashed border-border bg-card overflow-hidden transition-all hover:border-accent/30">
                  <PlaceholderImage
                    label={industry.label}
                    aspectRatio="4/3"
                    className="rounded-none border-0"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm">{industry.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Build India&apos;s
              <br />
              <span className="text-accent">Automation Revolution</span>
              <br />
              Together.
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted mb-10">
              Whether you&apos;re an MSME looking to automate or an investor
              backing India&apos;s manufacturing future — we&apos;d love to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-8 py-3 text-sm font-mono uppercase tracking-wider text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded border border-border px-8 py-3 text-sm font-mono uppercase tracking-wider text-foreground transition-all hover:border-muted-dark hover:bg-card-hover"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
