"use client";

import Link from "next/link";
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
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import AnimatedSection from "@/components/AnimatedSection";

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

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
                [ Product ]
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
                The TRC
                <br />
                <span className="text-accent">Cobot</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-4">
                India&apos;s first Physical AI-native collaborative robot —
                purpose-built for Indian manufacturing with embedded intelligence,
                zero-complexity adoption, and dramatically lower total cost of ownership.
              </p>
              <p className="text-sm text-muted-dark leading-relaxed mb-8">
                Born from years of deploying automation solutions across Indian
                factories, we know the pain points. The TRC Cobot is our answer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-6 py-3 text-sm font-mono uppercase tracking-wider text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Image
                src="/assets/logos/Cobot.png"
                alt="TRC Cobot"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="py-14 border-y border-border bg-card">
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
                  <div className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-1 tracking-tighter">
                    {spec.value}
                  </div>
                  <div className="text-[11px] text-muted-dark font-mono uppercase tracking-widest">
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
                <div className="group rounded-lg border border-dashed border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,59,48,0.05)] h-full">
                  <div className="mb-4 w-10 h-10 rounded border border-border bg-background flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
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
            <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            {deploymentSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 inline-flex items-center justify-center w-14 h-14 rounded border border-border bg-background">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="block text-[11px] font-mono text-accent mb-2 tracking-widest">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
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
                src="/assets/block_program.png"
                alt="AI Programming Interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
                [ AI-Powered ]
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
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
                    className="rounded-lg border border-dashed border-border bg-card p-4"
                  >
                    <feature.icon size={18} className="text-accent mb-2" />
                    <h4 className="text-sm font-semibold mb-1">
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

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to See the
              <br />
              <span className="text-accent">TRC Cobot in Action?</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted mb-8">
              Get a custom demo for your manufacturing application. Our team
              will assess your needs and show you the right configuration.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-8 py-3 text-sm font-mono uppercase tracking-wider text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
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
