"use client";

import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

const clientLogos = [
  { name: "PG Electroplast", logo: "https://storage.googleapis.com/trc_web/assets/clientele/pg.png" },
  { name: "JBJ Technologies", logo: "https://storage.googleapis.com/trc_web/assets/clientele/jbj.png" },
  { name: "JJ Technoplast", logo: "https://storage.googleapis.com/trc_web/assets/clientele/jj_technoplast.png" },
  { name: "Hikrobot", logo: "https://storage.googleapis.com/trc_web/assets/clientele/hikrobot.png" },
  { name: "IIHL", logo: "https://storage.googleapis.com/trc_web/assets/clientele/iihl.png" },
  { name: "Zomato", logo: "https://storage.googleapis.com/trc_web/assets/clientele/zomato.png" },
  { name: "Ford", logo: "https://storage.googleapis.com/trc_web/assets/clientele/ford.png" },
  { name: "Tata", logo: "https://storage.googleapis.com/trc_web/assets/clientele/tata.png" },
  { name: "Crimson", logo: "https://storage.googleapis.com/trc_web/assets/clientele/crimson.png" },
  { name: "Cubamars", logo: "https://storage.googleapis.com/trc_web/assets/clientele/cubamars.png" },
  { name: "KB Components", logo: "https://storage.googleapis.com/trc_web/assets/clientele/KB_components.png" },
];

const testimonials = [
  {
    quote: "Our glue spraying process had chronic quality issues due to manual inconsistency and lack of skilled operators. After The Robotics Company integrated their cobot with our SPM, rejection rates dropped dramatically. What impressed us most was that their team understood our shop floor — they did not just sell us a robot, they solved our production problem. The system has been running flawlessly for months.",
    author: "Priya Subramaniam",
    role: "Head of Manufacturing — JJ Technoplast",
  },
  {
    quote: "We were struggling with manual loading on our pick-and-place line — inconsistent output, high rework, and operator fatigue. The Robotics Company deployed their cobot solution within a week and had us running 24x7 within the month. The speed of deployment and local after-sales support is unlike anything we have experienced from imported brands. Our productivity is up significantly and downtime is near zero.",
    author: "Rajiv Mehta",
    role: "VP Operations — PG Electroplast Limited (Public Listed)",
  },
  {
    quote: "Finding skilled operators for our machine tending and plasma treatment lines was becoming impossible. The Robotics Company came in, understood our exact requirements, and deployed a working solution in just two weeks. The robot now handles both pick-and-place and plasma treatment 24x7 with consistent quality we could never achieve manually. This is automation that actually makes sense for an Indian MSME like us.",
    author: "Anand Kumar",
    role: "Director — JBJ Technologies",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-gradient-to-br from-[#f0f7f4] via-background to-[#f5f0eb]">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Clients & Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6 text-foreground">
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
      <section className="py-24 lg:py-32 bg-white">
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
                <div className="rounded-2xl border border-border bg-background p-6 h-full flex flex-col">
                  <Quote size={20} className="text-accent/30 mb-4" />
                  <p className="text-sm text-muted leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-dark">
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
