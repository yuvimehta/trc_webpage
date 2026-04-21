"use client";

import dynamic from "next/dynamic";
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
import AnimatedSection from "@/components/AnimatedSection";
import VideoCarousel from "@/components/VideoCarousel";

const ModelCarousel = dynamic(() => import("@/components/ModelCarousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] max-h-[600px] min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse text-muted text-sm">Loading 3D model…</div>
    </div>
  ),
});

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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-gradient-to-br from-[#f0f7f4] via-background to-[#f5f0eb]">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6 text-foreground">
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
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/clients"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  View Deployments
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <VideoCarousel
                videos={[
                  "https://storage.googleapis.com/trc_web/assets/logos/plasm.mp4",
                  "https://storage.googleapis.com/trc_web/assets/3d_files/glue_spray.mp4",
                ]}
                interval={15000}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-14 bg-card border-y border-border">
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
                <div className="card-3d group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 h-full">
                  <div className="mb-4 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <service.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">
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
                  <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="block text-xs font-semibold text-accent mb-2 tracking-widest">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deployments 3D Viewer */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Our Solutions in Action"
              title="Real Deployments, Real Results"
              description="From plug-and-play cobots to custom SPM integrations — explore our production-ready automation solutions deployed across Indian factories."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ModelCarousel
              models={[
                { url: "https://storage.googleapis.com/trc_web/assets/3d_files/jbj_compress.glb", label: "JBJ Technologies" },
                { url: "https://storage.googleapis.com/trc_web/assets/3d_files/bosch_compress.glb", label: "Bosch" },
              ]}
              enablePan
              showBorder
            />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Ready to Automate Your
              <br />
              <span className="text-accent">Factory Floor?</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted mb-8">
              Get a custom quote for your manufacturing application. Our team
              will assess your needs and propose the right solution.
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
