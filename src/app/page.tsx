"use client";

import { useState } from "react";
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
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import StatCounter from "@/components/StatCounter";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
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

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero — Full Page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0f7f4] via-background to-[#f5f0eb]">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-8 bg-accent/10 px-4 py-1.5 rounded-full">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              19+ enterprise clients &middot; 80% repeat orders
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
              India&apos;s Physical AI
              <br />
              <span className="text-accent mt-2 inline-block">Collaborative Robot</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mx-auto max-w-xl text-base md:text-lg text-muted leading-relaxed mb-12">
              Making factory automation accessible to 63M+ Indian MSMEs.
              Plug-and-play deployment. Local support. 40-60% lower cost.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Our Robot
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
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
                <div className="rounded-2xl border border-border bg-white p-8 h-full transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                    <Cog size={24} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-3">
                    Services
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Automation Solutions
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    End-to-end industrial automation — from pick &amp; place to
                    welding, machine tending to plasma treatment. We deploy,
                    integrate, and support robotic solutions across Indian
                    factories.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    View Solutions <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link href="/product" className="block group">
                <div className="rounded-2xl border border-border bg-white p-8 h-full transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                    <Bot size={24} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-3">
                    Product
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    The TRC Cobot
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    India&apos;s first Physical AI-native collaborative robot.
                    Purpose-built for Indian shop floors with AI-assisted
                    programming, zero-CAPEX options, and 40-60% lower TCO.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Explore Product <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32 bg-white">
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
                <div className="group rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 h-full">
                  <div className="mb-4 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <problem.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              tag="Get in Touch"
              title="Let's Build Together"
              description="Whether you're looking to automate your factory floor or invest in India's manufacturing future — we'd love to hear from you."
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-border bg-background p-8">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="mx-auto w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <Send size={24} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        Message Sent
                      </h3>
                      <p className="text-muted">
                        We&apos;ve received your message and will get back to
                        you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2 text-foreground"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Your name"
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 text-foreground"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2 text-foreground"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          placeholder="Your company"
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium mb-2 text-foreground"
                        >
                          Interested In
                        </label>
                        <select
                          id="interest"
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="automation">Automation Solutions</option>
                          <option value="cobot">Purchasing a Cobot</option>
                          <option value="raas">Robotics-as-a-Service</option>
                          <option value="demo">Requesting a Demo</option>
                          <option value="partnership">Partnership / Distribution</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2 text-foreground"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          placeholder="Tell us about your manufacturing needs..."
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                      >
                        Send Message
                        <ArrowRight size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-6 text-foreground">Get in Touch</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <Mail size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-dark mb-0.5">
                            Email
                          </p>
                          <a
                            href="mailto:support@theroboticscompany.in"
                            className="text-sm text-muted hover:text-accent transition-colors"
                          >
                            support@theroboticscompany.in
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-dark mb-0.5">
                            Phone
                          </p>
                          <p className="text-sm text-muted">+91-9891270881</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-dark mb-0.5">
                            Office
                          </p>
                          <p className="text-sm text-muted">Noida, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
