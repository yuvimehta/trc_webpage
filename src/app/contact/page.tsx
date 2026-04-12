"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-subtle" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
              [ Contact ]
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
              Let&apos;s Build India&apos;s
              <br />
              <span className="text-accent">Automation Revolution</span>
              <br />
              Together.
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
              Whether you&apos;re looking to automate your factory floor or
              invest in India&apos;s manufacturing future — we&apos;d love to
              hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="rounded-lg border border-border bg-background p-8">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="mx-auto w-14 h-14 rounded border border-accent/30 bg-accent/10 flex items-center justify-center mb-6">
                        <Send size={24} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
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
                            className="block text-[11px] font-mono font-medium uppercase tracking-widest mb-2 text-muted"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Your name"
                            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[11px] font-mono font-medium uppercase tracking-widest mb-2 text-muted"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="you@company.com"
                            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-[11px] font-mono font-medium uppercase tracking-widest mb-2 text-muted"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          placeholder="Your company"
                          className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-[11px] font-mono font-medium uppercase tracking-widest mb-2 text-muted"
                        >
                          Interested In
                        </label>
                        <select
                          id="interest"
                          className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="automation">Automation Solutions</option>
                          <option value="cobot">Purchasing a Cobot</option>
                          <option value="raas">Robotics-as-a-Service</option>
                          <option value="demo">Requesting a Demo</option>
                          <option value="partnership">Partnership / Distribution</option>
                          <option value="investment">Investment Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[11px] font-mono font-medium uppercase tracking-widest mb-2 text-muted"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          placeholder="Tell us about your manufacturing needs..."
                          className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-8 py-3 text-sm font-mono uppercase tracking-wider text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                      >
                        Send Message
                        <ArrowRight size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded border border-border bg-background flex items-center justify-center shrink-0">
                          <Mail size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[11px] font-mono font-medium uppercase tracking-widest text-muted mb-0.5">
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
                        <div className="w-10 h-10 rounded border border-border bg-background flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[11px] font-mono font-medium uppercase tracking-widest text-muted mb-0.5">
                            Office
                          </p>
                          <p className="text-sm text-muted">Delhi, India</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded border border-border bg-background flex items-center justify-center shrink-0">
                          <Phone size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[11px] font-mono font-medium uppercase tracking-widest text-muted mb-0.5">
                            Phone
                          </p>
                          <p className="text-sm text-muted">
                          +91-9891270881
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-dashed border-border bg-background p-6">
                    <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted mb-4">
                      TRC Technologies Pvt Ltd
                    </h4>
                    <p className="text-sm text-muted leading-relaxed mb-5">
                      The Robotics Company — India&apos;s Physical AI-native
                      collaborative robot platform, built for Indian manufacturing.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <span className="text-2xl font-bold font-mono text-foreground tracking-tighter">
                          19+
                        </span>
                        <p className="text-[10px] text-muted-dark font-mono uppercase tracking-widest">
                          Clients
                        </p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold font-mono text-foreground tracking-tighter">
                          80%
                        </span>
                        <p className="text-[10px] text-muted-dark font-mono uppercase tracking-widest">
                          Repeat Rate
                        </p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold font-mono text-foreground tracking-tighter">
                          115%
                        </span>
                        <p className="text-[10px] text-muted-dark font-mono uppercase tracking-widest">
                          YoY Growth
                        </p>
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
