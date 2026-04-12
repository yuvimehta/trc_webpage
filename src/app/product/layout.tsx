import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — The TRC Cobot",
  description:
    "India's first Physical AI-native collaborative robot. Purpose-built for Indian manufacturing with AI-assisted programming, <72hr deployment, and 40-60% lower TCO.",
  openGraph: {
    title: "The TRC Cobot — India's Physical AI Collaborative Robot",
    description:
      "AI-native, purpose-built for India, deployable in under 72 hours.",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
