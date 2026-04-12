import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "19+ enterprise clients including PG Electroplast, JBJ Technologies, and JJ Technoplast. 80% repeat order rate with live factory deployments.",
  openGraph: {
    title: "Clients & Partners — TRC Technologies",
    description:
      "Trusted by India's leading manufacturers with proven factory deployments.",
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
