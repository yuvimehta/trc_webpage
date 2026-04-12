"use client";

import { Building2, Handshake, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
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

const clients = [
  {
    name: "PG Electroplast Ltd",
    badge: "NSE Listed",
    industry: "Automotive Electronics",
  },
  {
    name: "JBJ Technologies",
    badge: "Repeat — 2 Applications",
    industry: "Plastics Manufacturing",
  },
  {
    name: "JJ Technoplast",
    badge: "Repeat Customer",
    industry: "Plastics / Packaging",
  },
];

const deployments = [
  {
    client: "PG Electroplast Ltd",
    application: "Pick & Place / SPM",
    industry: "Automotive Electronics",
    timeline: "1 wk FAT / 2-3 wk SAT",
    note: "Public Listed Co.",
  },
  {
    client: "JBJ Technologies",
    application: "Pick & Place / Machine Tending",
    industry: "Plastics Manufacturing",
    timeline: "2 wk FAT / 3-5 wk SAT",
    note: "Repeat Customer",
  },
  {
    client: "JJ Technoplast",
    application: "Glue Spraying / SPM",
    industry: "Plastics / Packaging",
    timeline: "3 wk FAT / 4-5 wk SAT",
    note: "Repeat Customer",
  },
  {
    client: "JBJ Technologies",
    application: "Plasma Treatment / SPM",
    industry: "Surface Finishing",
    timeline: "3 wk FAT / 3-4 wk SAT",
    note: "2nd Application",
  },
];

const partners = [
  { name: "Hito Robotics", type: "Ecosystem Partner" },
  { name: "xLogic", type: "SI Partner" },
  { name: "Airbound", type: "Distribution Partner" },
  { name: "IIHL", type: "Channel Partner" },
  { name: "Zomato Ecosystem", type: "Strategic Relationship" },
];

const testimonials = [
  {
    quote: "Customer testimonial placeholder — add real testimonial here.",
    author: "Client Name",
    role: "Designation, Company",
  },
  {
    quote: "Customer testimonial placeholder — add real testimonial here.",
    author: "Client Name",
    role: "Designation, Company",
  },
  {
    quote: "Customer testimonial placeholder — add real testimonial here.",
    author: "Client Name",
    role: "Designation, Company",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-subtle" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
              [ Clients & Partners ]
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
              Trusted by India&apos;s
              <br />
              <span className="text-accent">Leading Manufacturers</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
              19+ enterprise clients, 80% repeat order rate, and 4 proven
              factory deployments across automotive, electronics &amp; plastics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={clientLogos} />

      {/* Client Cards */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Active Clients"
              title="Enterprise Customers"
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((client, i) => (
              <AnimatedSection key={client.name} delay={i * 0.1}>
                <div className="group rounded-lg border border-dashed border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,59,48,0.05)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded border border-border bg-background flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors">
                      <Building2 size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{client.name}</h3>
                      <span className="inline-block mt-1 text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 rounded px-2 py-0.5 uppercase tracking-wider">
                        {client.badge}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted">{client.industry}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Live Deployments */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Deployments"
              title="Live Factory Deployments"
              description="All deployments live and running in production — not prototypes."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border bg-background">
                    {["Client", "Application", "Industry", "Timeline", "Note"].map(
                      (header) => (
                        <th
                          key={header}
                          className="text-left py-3.5 px-4 text-[11px] font-mono font-semibold text-muted-dark uppercase tracking-widest"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {deployments.map((d, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/50 hover:bg-card-hover transition-colors"
                    >
                      <td className="py-3.5 px-4 text-sm font-medium">
                        {d.client}
                      </td>
                      <td className="py-3.5 px-4 text-sm text-muted">
                        {d.application}
                      </td>
                      <td className="py-3.5 px-4 text-sm text-muted">
                        {d.industry}
                      </td>
                      <td className="py-3.5 px-4 text-[11px] text-muted font-mono tracking-wider">
                        {d.timeline}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 rounded px-2 py-0.5 uppercase tracking-wider">
                          {d.note}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Ecosystem"
              title="Partner Network"
              description="A growing ecosystem of channel partners, system integrators, and strategic allies."
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.08}>
                <div className="group rounded-lg border border-dashed border-border bg-card p-5 text-center transition-all hover:border-accent/30">
                  <div className="mx-auto w-10 h-10 rounded border border-border bg-background flex items-center justify-center mb-3 group-hover:border-accent/30 transition-colors">
                    <Handshake size={18} className="text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{partner.name}</h4>
                  <p className="text-[11px] text-muted-dark font-mono tracking-wider">
                    {partner.type}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Testimonials"
              title="What Our Clients Say"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-lg border border-dashed border-border bg-background p-6 h-full flex flex-col">
                  <Quote size={20} className="text-accent/20 mb-4" />
                  <p className="text-sm text-muted-dark leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-[11px] text-muted-dark font-mono tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
