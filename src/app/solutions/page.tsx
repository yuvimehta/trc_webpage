"use client";

import Link from "next/link";
import {
  ArrowRight,
  Grip,
  Cog,
  Flame,
  Droplets,
  Zap,
  Box,
  ClipboardCheck,
  Wrench,
  Rocket,
  Headset,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudyCard from "@/components/CaseStudyCard";

const services = [
  {
    icon: Grip,
    title: "Pick & Place",
    description: "High-speed material handling and sorting for production lines.",
  },
  {
    icon: Cog,
    title: "Machine Tending",
    description: "Automated loading/unloading of CNC, injection molding, and presses.",
  },
  {
    icon: Flame,
    title: "Welding",
    description: "Consistent, high-quality weld seams across complex geometries.",
  },
  {
    icon: Droplets,
    title: "Glue Dispensing",
    description: "Precision adhesive application for packaging and assembly.",
  },
  {
    icon: Zap,
    title: "Plasma Treatment",
    description: "Surface activation and treatment for improved adhesion and finishing.",
  },
  {
    icon: Box,
    title: "Special Purpose Machines",
    description: "Custom-engineered automation solutions for unique manufacturing needs.",
  },
];

const caseStudies = [
  {
    client: "PG Electroplast Ltd",
    industry: "Automotive Electronics",
    problem: "Manual pick & place causing throughput bottlenecks on the assembly line.",
    solution: "Deployed robotic pick & place with custom SPM integration. 1 week FAT.",
    result: "Production throughput increased. 2-3 week SAT cycle. Public listed company deployment.",
  },
  {
    client: "JBJ Technologies",
    industry: "Plastics Manufacturing",
    problem: "Inconsistent machine tending leading to cycle time variations.",
    solution: "Automated pick & place and machine tending with integrated vision. 2 week FAT.",
    result: "Consistent cycle times achieved. Repeat customer — came back for a second application.",
  },
  {
    client: "JJ Technoplast",
    industry: "Plastics / Packaging",
    problem: "Manual glue spraying causing inconsistent adhesive coverage and waste.",
    solution: "Precision robotic glue spraying with custom SPM. 3 week FAT.",
    result: "Uniform coverage, reduced adhesive waste. Repeat customer for ongoing production.",
  },
  {
    client: "JBJ Technologies",
    industry: "Surface Finishing",
    problem: "Manual plasma treatment introducing quality variability across batches.",
    solution: "Automated plasma treatment with custom SPM integration. 3 week FAT.",
    result: "Consistent surface finish quality. 2nd application from the same customer.",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Assess",
    description: "We study your production line, identify automation opportunities, and define requirements.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Design & Build",
    description: "Custom solution architecture with robot selection, tooling design, and integration planning.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy & Commission",
    description: "FAT in our facility, SAT at your site. Full commissioning with production validation.",
  },
  {
    icon: Headset,
    step: "04",
    title: "Support & Scale",
    description: "Ongoing maintenance, remote monitoring, and expansion support as your needs grow.",
  },
];

export default function SolutionsPage() {
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
                [ Solutions ]
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
                Industrial
                <br />
                <span className="text-accent">Automation Solutions</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-4">
                We deploy end-to-end robotic automation on Indian factory
                floors. From assessment to commissioning, our team handles the
                full lifecycle.
              </p>
              <p className="text-sm text-muted-dark leading-relaxed mb-8">
                19+ enterprise clients. 80% repeat rate. 4 live production deployments
                across automotive, electronics, plastics &amp; surface finishing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-6 py-3 text-sm font-mono uppercase tracking-wider text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/clients"
                  className="inline-flex items-center justify-center gap-2 rounded border border-border px-6 py-3 text-sm font-mono uppercase tracking-wider text-foreground transition-all hover:border-muted-dark hover:bg-card"
                >
                  View Deployments
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
              >
                <source src="/assets/logos/plasm.mp4" type="video/mp4" />
              </video>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-14 border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "19+", label: "Clients Served" },
                { value: "80%", label: "Repeat Rate" },
                { value: "4+", label: "Live Deployments" },
                { value: "< 5 wk", label: "Avg. SAT Cycle" },
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

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Services"
              title="What We Deploy"
              description="End-to-end automation solutions across the manufacturing value chain."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="group rounded-lg border border-dashed border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,59,48,0.05)] h-full">
                  <div className="mb-4 w-10 h-10 rounded border border-border bg-background flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <service.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Case Studies"
              title="Real-World Deployments"
              description="All deployments live and running in production — not prototypes."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {caseStudies.map((study, i) => (
              <CaseStudyCard
                key={`${study.client}-${study.industry}`}
                {...study}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Process"
              title="How We Work"
              description="A structured approach from assessment to ongoing support."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto mb-5 w-14 h-14 rounded border border-border bg-card flex items-center justify-center">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="block text-[11px] font-mono text-accent mb-2 tracking-widest">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Automate Your
              <br />
              <span className="text-accent">Factory Floor?</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted mb-8">
              Get a custom quote for your manufacturing application. Our team
              will assess your needs and propose the right solution.
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
