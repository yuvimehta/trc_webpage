import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "TRC Technologies — India's Physical AI Collaborative Robot",
    template: "%s | TRC Technologies",
  },
  description:
    "India's first Physical AI-native cobot platform — making factory automation accessible to 63M+ Indian MSMEs with plug-and-play deployment, local support, and 40–60% lower total cost.",
  keywords: [
    "cobot",
    "collaborative robot",
    "Indian manufacturing",
    "MSME automation",
    "robotics",
    "TRC Technologies",
    "Physical AI",
  ],
  openGraph: {
    title: "TRC Technologies — India's Physical AI Collaborative Robot",
    description:
      "Making factory automation accessible to 63M+ Indian MSMEs with AI-native cobots.",
    type: "website",
    locale: "en_IN",
    siteName: "TRC Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRC Technologies — India's Physical AI Collaborative Robot",
    description:
      "Making factory automation accessible to 63M+ Indian MSMEs with AI-native cobots.",
  },
};

const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem("trc_theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "dark" || stored === "light" ? stored : (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (_) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link
          rel="preload"
          href="https://storage.googleapis.com/trc_web/assets/3d_files/cobot.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-[60]">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
