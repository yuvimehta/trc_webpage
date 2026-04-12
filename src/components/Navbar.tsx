"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logos/company-logo.png"
              alt="TRC"
              width={140}
              height={40}
              className="h-45 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-mono uppercase tracking-wider transition-colors hover:text-foreground ${
                  pathname === link.href ? "text-accent" : "text-muted-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded border border-accent px-4 py-1.5 text-[13px] font-mono uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-white"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-mono uppercase tracking-wider py-2.5 transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center rounded border border-accent px-4 py-2.5 text-sm font-mono uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-white mt-3"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
