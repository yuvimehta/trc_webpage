import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/clients", label: "Clients" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* FOOTER LOGO SIZE — tweak `h-24` (Tailwind) to resize.
                  h-20 = 80px, h-24 = 96px, h-28 = 112px. */}
              <Image
                src="https://storage.googleapis.com/trc_web/assets/logos/TRCLogo.png"
                alt="TRC"
                width={200}
                height={60}
                className="logo-light h-42 w-auto object-contain"
              />
              <Image
                src="https://storage.googleapis.com/trc_web/assets/logos/TRCLogo.png"
                alt="TRC"
                width={200}
                height={60}
                className="logo-dark h-42 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              India&apos;s Physical AI-native cobot platform — making factory
              automation accessible to 63M+ Indian MSMEs.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-foreground">
              Offerings
            </h4>
            <ul className="space-y-2.5">
              {[
                "Collaborative Robots",
                "Automation Solutions",
                "Robotics-as-a-Service",
                "AI Programming",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:support@theroboticscompany.in"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  support@theroboticscompany.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted">+91-9891270881</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted">Noida, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} TRC Technologies Pvt Ltd
          </p>
          <p className="text-xs text-muted">
            Built in India for Indian Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
