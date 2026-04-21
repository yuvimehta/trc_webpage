"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Factory,
  Headset,
  IndianRupee,
  Clock,
  Layers,
  ArrowRight,
  Settings,
  Rocket,
  TrendingUp,
  Zap,
  Shield,
  Gauge,
  Check,
  X,
  Minus,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const CobotViewer = dynamic(() => import("@/components/CobotViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-muted text-sm">
      <span className="animate-pulse">Loading 3D model…</span>
    </div>
  ),
});

const differentiators = [
  {
    icon: Brain,
    title: "AI-Assisted Programming",
    description:
      "Deploy and program cobots in hours, not weeks. No robotics expertise needed — AI guides operators through setup.",
  },
  {
    icon: Factory,
    title: "Purpose-Built for India",
    description:
      "Designed for high-mix, low-volume production. Handles the complexity of Indian shop floors out of the box.",
  },
  {
    icon: Headset,
    title: "Full-Stack Local Support",
    description:
      "In-house application engineering, fast spare delivery, and AI-assisted maintenance for near-zero downtime.",
  },
  {
    icon: Layers,
    title: "RaaS Model Available",
    description:
      "Zero-CAPEX subscription removes the biggest barrier — upfront cost — for MSME adoption.",
  },
  {
    icon: IndianRupee,
    title: "40-60% Lower Total Cost",
    description:
      "India cost structure + local supply chain delivers dramatically lower TCO vs global and Chinese brands.",
  },
  {
    icon: Clock,
    title: "< 72-Hour Deployment",
    description:
      "FAT + SAT cycle completed in 1-5 weeks. Customers start generating ROI faster than any competitor.",
  },
];

const deploymentSteps = [
  {
    icon: Settings,
    step: "01",
    title: "Configure",
    description:
      "AI-assisted programming configures the cobot for your specific application. No robotics expertise needed.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Deploy",
    description:
      "FAT + SAT cycle completed in record time. Fastest deployment timeline in the Indian cobot market.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Generate ROI",
    description:
      "Start seeing returns immediately. Our customers achieve ROI faster than any competitor.",
  },
];

const aiFeatures = [
  {
    icon: Zap,
    title: "Zero-Code Setup",
    description:
      "Operators program complex tasks through an intuitive AI interface — no coding or robotics expertise required.",
  },
  {
    icon: Shield,
    title: "AI-Assisted Maintenance",
    description:
      "Predictive maintenance and remote diagnostics ensure near-zero downtime across deployments.",
  },
  {
    icon: Gauge,
    title: "Real-Time Optimization",
    description:
      "AI continuously optimizes robot trajectories and cycle times for maximum throughput.",
  },
  {
    icon: Layers,
    title: "Fleet Management",
    description:
      "Centralized dashboard to monitor, manage, and update all deployed cobots across facilities.",
  },
];

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
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10">
        <Check size={14} className="text-accent" />
      </span>
    );
  if (rating === "no")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-50">
        <X size={14} className="text-red-400" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-yellow-50">
      <Minus size={14} className="text-yellow-500" />
    </span>
  );
}

export default function ProductPage() {
  return (
    <>
      {/* Hero — full-bleed 3D with text overlay */}
      <section className="relative h-screen min-h-[620px] overflow-hidden bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)]">
        <div className="absolute inset-0">
          <CobotViewer
            fill
            introTurns={1}
            introDuration={3.2}
            initialCameraState={{
              position: [0.6, 1.55, 1.1],
              target: [-0.9, 1.35, 0],
            }}
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--background)]/80 via-[var(--background)]/25 to-transparent"
        />

        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
            <div className="max-w-xl pointer-events-auto">
              <AnimatedSection>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Product
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6 text-foreground">
                  The TRC
                  <br />
                  <span className="text-accent">Cobot</span>
                </h1>
                <p className="text-lg text-muted leading-relaxed mb-4">
                  India&apos;s first Physical AI-native collaborative robot —
                  purpose-built for Indian manufacturing with embedded
                  intelligence, zero-complexity adoption, and dramatically
                  lower total cost of ownership.
                </p>
                <p className="text-sm text-muted-dark leading-relaxed mb-8">
                  Born from years of deploying automation solutions across
                  Indian factories, we know the pain points. The TRC Cobot is
                  our answer.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="py-14 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "< 72hr", label: "Deployment Time" },
                { value: "40-60%", label: "Lower TCO" },
                { value: "1-5 wk", label: "FAT + SAT Cycle" },
                { value: "24/7", label: "Remote Monitoring" },
              ].map((spec) => (
                <div key={spec.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">
                    {spec.value}
                  </div>
                  <div className="text-sm text-muted">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Why TRC"
              title="Built Different"
              description="Every feature is informed by real factory deployments across India. Not a lab experiment — a production-ready tool."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="card-3d group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 h-full">
                  <div className="mb-4 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Deployment"
              title="From Zero to Production in Days"
              description="Our streamlined process gets cobots on your factory floor faster than anyone else in India."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            {deploymentSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="block text-xs font-semibold text-accent mb-2 tracking-widest">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Programming */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Image
                src="https://storage.googleapis.com/trc_web/assets/others/block_program.png"
                alt="AI Programming Interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl object-contain"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                AI-Powered
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6 text-foreground">
                Programming Made
                <br />
                <span className="text-accent">Effortless</span>
              </h2>
              <p className="text-base text-muted leading-relaxed mb-8">
                Our AI-assisted programming platform eliminates the need for
                robotics expertise. Operators configure complex manufacturing
                tasks through an intuitive interface — cutting deployment time
                from weeks to hours.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {aiFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="card-3d rounded-2xl border border-border bg-card p-4"
                  >
                    <feature.icon size={18} className="text-accent mb-2" />
                    <h4 className="text-sm font-semibold mb-1 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
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
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-border bg-background">
                    <th className="text-left py-4 px-4 text-xs font-semibold text-muted uppercase tracking-wider">
                      Feature
                    </th>
                    {competitors.map((c) => (
                      <th
                        key={c.name}
                        className={`text-center py-4 px-3 text-xs font-semibold uppercase tracking-wider ${
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
                      <td className="py-3.5 px-4 text-sm font-medium text-foreground">
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

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#f0f7f4] via-background to-[#f5f0eb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Ready to See the
              <br />
              <span className="text-accent">TRC Cobot in Action?</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted mb-8">
              Get a custom demo for your manufacturing application. Our team
              will assess your needs and show you the right configuration.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-on-accent transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
