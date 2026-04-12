import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TRC Technologies for collaborative robot solutions, demos, partnerships, or investment opportunities. Based in Delhi, India.",
  openGraph: {
    title: "Contact — TRC Technologies",
    description:
      "Reach out for cobot solutions, demos, partnerships, or investment inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
