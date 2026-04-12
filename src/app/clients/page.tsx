"use client";

import { Quote } from "lucide-react";
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
