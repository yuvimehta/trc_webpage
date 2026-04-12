"use client";

import { Check, X, Minus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import AnimatedSection from "@/components/AnimatedSection";

const comparisonFeatures = [
  "India-First Design",
  "< 72hr Deployment",
  "AI-Assisted Programming",
  "Full Local Support",
  "MSME Price Point",
  "RaaS / Zero CAPEX",
  "Integrated HW+SW+Service",
];

type Rating = "yes" | "no" | "partial";

const competitors: {
  name: string;
  ratings: Rating[];
  highlight?: boolean;
}[] = [
  {
    name: "TRC",
    ratings: ["yes", "yes", "yes", "yes", "yes", "yes", "yes"],
    highlight: true,
  },
  {
    name: "Global Brands",
    ratings: ["no", "no", "partial", "no", "no", "no", "no"],
  },
  {
    name: "Chinese OEMs",
    ratings: ["partial", "no", "no", "no", "partial", "no", "no"],
  },
  {
    name: "Integrators",
    ratings: ["no", "no", "no", "partial", "no", "no", "no"],
  },
];

function RatingIcon({ rating }: { rating: Rating }) {
  if (rating === "yes")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded border border-accent/20 bg-accent/10">
        <Check size={14} className="text-accent" />
      </span>
    );
  if (rating === "no")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded border border-border bg-card">
        <X size={14} className="text-muted-dark" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded border border-yellow-500/20 bg-yellow-500/5">
      <Minus size={14} className="text-yellow-500" />
    </span>
  );
}

const marketData = [
  {
    label: "TAM",
    value: "$3.38B",
    sub: "Global Cobot Market by 2030",
    width: "100%",
  },
  {
    label: "SAM",
    value: "$1.41B",
    sub: "Asia-Pacific (41.7%) by 2030",
    width: "42%",
  },
  {
    label: "SOM",
    value: "$200M+",
    sub: "India MSME Cobots near-term",
    width: "6%",
  },
];

const whyIndia = [
  "Fastest growing manufacturing economy with PLI-driven automation push",
  "India has only 5 robots per 10,000 workers vs 106 global average (IFR 2023)",
  "Government's Make in India + MSME digitisation tailwind",
  "Early mover advantage — cobot adoption still in nascent stage for MSMEs",
];

const roadmap = [
  {
    phase: "Phase 1",
    period: "Now → FY2026",
    title: "Strengthen Core",
    items: [
      "Scale to ₹65L revenue",
      "Add 3 channel partners",
      "Expand to Metal & Machining vertical",
      "Launch AI programming V2",
    ],
    active: true,
  },
  {
    phase: "Phase 2",
    period: "FY2026 → FY2027",
    title: "Expand & Launch RaaS",
    items: [
      "Launch RaaS model in 2 verticals",
      "Open second geography (South India)",
      "50+ client base",
      "Build fleet management SaaS",
    ],
  },
  {
    phase: "Phase 3",
    period: "FY2027 → FY2028",
    title: "Scale Platform",
    items: [
      "₹10Cr+ ARR target",
      "International expansion (SE Asia)",
      "AI software licensing revenue",
      "Series A fundraise",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-subtle" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
                [ About TRC ]
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
                Building India&apos;s
                <br />
                <span className="text-accent">Automation Revolution</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-6">
                TRC Technologies is building India&apos;s first Physical
                AI-native cobot platform — making factory automation accessible
                to 63M+ Indian MSMEs with plug-and-play deployment, local
                support, and 40-60% lower total cost than imported alternatives.
              </p>
              <p className="text-sm text-muted-dark leading-relaxed">
                We combine deep on-ground deployment experience with AI-assisted
                programming, full-stack local service, and purpose-built cobots
                for Indian shop floors — deployable in less than 72 hours.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <PlaceholderImage label="Team / Factory Photo" aspectRatio="4/3" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Competitive Advantage"
              title="Why TRC Wins"
              description="The only player in India offering an integrated hardware + software + service cobot platform at MSME-friendly pricing."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-border bg-background">
                    <th className="text-left py-4 px-4 text-[11px] font-mono font-semibold text-muted uppercase tracking-widest">
                      Feature
                    </th>
                    {competitors.map((c) => (
                      <th
                        key={c.name}
                        className={`text-center py-4 px-3 text-[11px] font-mono font-semibold uppercase tracking-widest ${
                          c.highlight ? "text-accent" : "text-muted-dark"
                        }`}
                      >
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, fi) => (
                    <tr
                      key={feature}
                      className="border-b border-border/50 hover:bg-card-hover transition-colors"
                    >
                      <td className="py-3.5 px-4 text-sm font-medium">
                        {feature}
                      </td>
                      {competitors.map((c) => (
                        <td key={c.name} className="text-center py-3.5 px-3">
                          <RatingIcon rating={c.ratings[fi]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Market Opportunity"
              title="A $3.38 Billion Opportunity"
              description="The global cobot market is exploding — and India is the most under-penetrated major market."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto mb-16">
            {marketData.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.15}>
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold font-mono tracking-tighter">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted mb-3">{item.sub}</p>
                  <div className="h-2 rounded-full bg-card overflow-hidden border border-border">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-1000"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="rounded-lg border border-dashed border-border bg-card p-8">
              <h3 className="text-xl font-bold mb-6">
                Why India — Why Now
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyIndia.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded border border-accent/20 bg-accent/10 shrink-0">
                      <Check size={10} className="text-accent" />
                    </span>
                    <span className="text-sm text-muted leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Roadmap"
              title="Go-To-Market & Growth Plan"
              description="A phased approach from strengthening our core to scaling internationally."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {roadmap.map((phase, i) => (
              <AnimatedSection key={phase.phase} delay={i * 0.15}>
                <div
                  className={`relative rounded-lg border p-6 h-full ${
                    phase.active
                      ? "border-accent bg-accent/5"
                      : "border-dashed border-border bg-background"
                  }`}
                >
                  {phase.active && (
                    <span className="absolute -top-3 left-6 inline-block rounded border border-accent bg-accent px-3 py-0.5 text-[10px] font-mono font-semibold text-white uppercase tracking-widest">
                      Current
                    </span>
                  )}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-accent font-semibold tracking-widest">
                      {phase.phase}
                    </span>
                    <span className="text-[11px] font-mono text-muted-dark ml-2 tracking-wider">
                      {phase.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
