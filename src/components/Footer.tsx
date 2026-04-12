import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe, ExternalLink, Share2 } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

const offerings = [
  "Collaborative Robots",
  "Automation Solutions",
  "Robotics-as-a-Service",
  "AI Programming",
  "Maintenance & Support",
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logos/company-logo.png"
                alt="TRC"
                width={140}
                height={40}
                className="h-45 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-dark leading-relaxed">
              India&apos;s Physical AI-native cobot platform — making factory
              automation accessible to 63M+ Indian MSMEs.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest mb-5 text-muted">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-dark hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest mb-5 text-muted">
              Offerings
            </h4>
            <ul className="space-y-2.5">
              {offerings.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest mb-5 text-muted">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:support@theroboticscompany.in"
                  className="text-sm text-muted-dark hover:text-accent transition-colors"
                >
                  support@theroboticscompany.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-dark">Delhi, India</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-dark hover:text-accent transition-colors" aria-label="LinkedIn">
                <Globe size={16} />
              </a>
              <a href="#" className="text-muted-dark hover:text-accent transition-colors" aria-label="Twitter">
                <ExternalLink size={16} />
              </a>
              <a href="#" className="text-muted-dark hover:text-accent transition-colors" aria-label="YouTube">
                <Share2 size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-dark font-mono tracking-wider">
            &copy; {new Date().getFullYear()} TRC Technologies Pvt Ltd
          </p>
          <p className="text-[11px] text-muted-dark font-mono tracking-wider">
            Built in India for Indian Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
