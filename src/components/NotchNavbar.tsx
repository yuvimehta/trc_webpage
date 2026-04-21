"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const MiniCobot = dynamic(() => import("@/components/MiniCobot"), {
  ssr: false,
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/clients", label: "Clients" },
];

const SCROLL_THRESHOLD = 80;

const PILL_H = 44;
const PILL_CORNER = 22;
const NOTCH_R = 22;
const DISC = 44;
const COLLAPSED_W = 92;
const EXPANDED_W = 520;

type Mode = "bar" | "notch";

const buildPath = (w: number, r: number) => {
  const cx = w / 2;
  return [
    `M ${PILL_CORNER} 0`,
    `L ${w - PILL_CORNER} 0`,
    `A ${PILL_CORNER} ${PILL_CORNER} 0 0 1 ${w} ${PILL_CORNER}`,
    `L ${w} ${PILL_H - PILL_CORNER}`,
    `A ${PILL_CORNER} ${PILL_CORNER} 0 0 1 ${w - PILL_CORNER} ${PILL_H}`,
    `L ${cx + r} ${PILL_H}`,
    `A ${r} ${r} 0 0 0 ${cx - r} ${PILL_H}`,
    `L ${PILL_CORNER} ${PILL_H}`,
    `A ${PILL_CORNER} ${PILL_CORNER} 0 0 1 0 ${PILL_H - PILL_CORNER}`,
    `L 0 ${PILL_CORNER}`,
    `A ${PILL_CORNER} ${PILL_CORNER} 0 0 1 ${PILL_CORNER} 0`,
    "Z",
  ].join(" ");
};

export default function NotchNavbar() {
  const [mode, setMode] = useState<Mode>("bar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setMode(y > SCROLL_THRESHOLD ? "notch" : "bar");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mode === "bar" && scrolled
          ? "bg-[var(--surface-overlay)] backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 lg:px-1">
        <div className="relative flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            {/* NAVBAR LOGO SIZE — tweak `h-20` (Tailwind) to resize.
                h-16 = 64px, h-20 = 80px, h-24 = 96px. Width is auto so
                the logo scales proportionally. */}
            <Image
              src="https://storage.googleapis.com/trc_web/assets/logos/trc_logo_black.png"
              alt="TRC"
              width={240}
              height={72}
              className="logo-light h-42 w-auto object-contain"
              priority
            />
            <Image
              src="https://storage.googleapis.com/trc_web/assets/logos/trc_logo_white.png"
              alt="TRC"
              width={240}
              height={72}
              className="logo-dark h-42 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            {mode === "bar" ? (
              <BarCenter pathname={pathname} />
            ) : (
              <NotchCenter pathname={pathname} />
            )}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-on-accent transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Get Quote
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--surface-overlay)] backdrop-blur-md border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium py-2.5 transition-colors hover:text-accent ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block w-full text-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-accent-light mt-3"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

interface CenterProps {
  pathname: string;
}

function BarCenter({ pathname }: CenterProps) {
  return (
    <div className="flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium transition-colors hover:text-accent ${
            pathname === link.href ? "text-accent" : "text-foreground/70"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

const containerVariants = {
  collapsed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 as const },
  },
  expanded: {
    transition: { staggerChildren: 0.05, delayChildren: 0.06 },
  },
};

const itemVariants = {
  collapsed: { opacity: 0, y: -6, transition: { duration: 0.12 } },
  expanded: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

function NotchCenter({ pathname }: CenterProps) {
  const [hovered, setHovered] = useState(false);
  const widthMV = useMotionValue(COLLAPSED_W);
  const notchMV = useMotionValue(NOTCH_R);
  const discYMV = useMotionValue(50);
  const liftMV = useMotionValue(0);
  const pathMV = useTransform([widthMV, notchMV], ([w, r]) =>
    buildPath(w as number, r as number),
  );
  const discYPercent = useTransform(discYMV, (v) => `${v}%`);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const sync = (w: number) => {
      if (svgRef.current) {
        svgRef.current.setAttribute("viewBox", `0 0 ${w} ${PILL_H}`);
      }
    };
    sync(widthMV.get());
    return widthMV.on("change", sync);
  }, [widthMV]);

  useEffect(() => {
    const spring = { type: "spring" as const, stiffness: 260, damping: 30 };
    const wCtl = animate(widthMV, hovered ? EXPANDED_W : COLLAPSED_W, spring);
    const nCtl = animate(notchMV, hovered ? 0 : NOTCH_R, spring);
    const dCtl = animate(discYMV, hovered ? 0 : 50, spring);
    const lCtl = animate(liftMV, hovered ? -2 : 0, spring);
    return () => {
      wCtl.stop();
      nCtl.stop();
      dCtl.stop();
      lCtl.stop();
    };
  }, [hovered, widthMV, notchMV, discYMV, liftMV]);

  return (
    <motion.div
      className="relative"
      style={{ height: PILL_H, width: widthMV, y: liftMV }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Capsule with concave bottom notch + gloss overlay */}
      <motion.svg
        ref={svgRef}
        className="absolute inset-0"
        style={{
          width: widthMV,
          height: PILL_H,
          filter:
            "drop-shadow(0 10px 24px rgba(0,0,0,0.22)) drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
          overflow: "visible",
        }}
        viewBox={`0 0 ${COLLAPSED_W} ${PILL_H}`}
      >
        <defs>
          <linearGradient id="pillGloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="var(--card)"
          stroke="var(--border)"
          strokeWidth={1}
          d={pathMV as unknown as string}
        />
        <motion.path
          fill="url(#pillGloss)"
          pointerEvents="none"
          d={pathMV as unknown as string}
        />
      </motion.svg>

      {/* Links in one centered row with uniform gap so the gap between
          Product <-> disc matches Home <-> Product (and similarly on the
          right). The aria-hidden spacer reserves the disc's footprint. */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center gap-5 px-5"
        style={{ pointerEvents: hovered ? "auto" : "none" }}
        variants={containerVariants}
        initial="collapsed"
        animate={hovered ? "expanded" : "collapsed"}
      >
        {leftLinks.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-accent ${
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground/75"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        <div aria-hidden style={{ width: DISC }} />

        {rightLinks.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-accent ${
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground/75"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Cobot disc - parked flush in the bottom notch; on hover it
          rises to the vertical center of the pill (discYMV: 50 -> 0). */}
      <motion.div
        className="absolute"
        style={{
          width: DISC,
          height: DISC,
          left: "50%",
          bottom: 0,
          x: "-50%",
          y: discYPercent,
        }}
      >
        <Link
          href="/"
          aria-label="Home"
          className="block w-full h-full rounded-full bg-card border border-border overflow-hidden shadow-sm"
        >
          <MiniCobot />
        </Link>
      </motion.div>
    </motion.div>
  );
}
