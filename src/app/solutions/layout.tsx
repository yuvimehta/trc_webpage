import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — Industrial Automation",
  description:
    "End-to-end industrial automation solutions — pick & place, machine tending, welding, glue dispensing, plasma treatment, and custom SPM. 19+ clients, 80% repeat rate.",
  openGraph: {
    title: "Automation Solutions — TRC Technologies",
    description:
      "Industrial automation services for Indian manufacturing. From assessment to deployment.",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
