"use client";

import Image from "next/image";
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
              <Image
                src="/assets/about_render.png"
                alt="About TRC"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
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

    </>
  );
}
