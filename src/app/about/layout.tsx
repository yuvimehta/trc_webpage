import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TRC Technologies — India's first Physical AI-native cobot platform building accessible factory automation for 63M+ MSMEs.",
  openGraph: {
    title: "About TRC Technologies",
    description:
      "Building India's automation revolution with AI-native collaborative robots.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
