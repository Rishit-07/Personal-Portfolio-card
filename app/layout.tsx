import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import LiquidEther from "@/components/ui/LiquidEther";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sairishitsunku.dev"),
  title: {
    default: "Sai Rishit Sunku ",
    template: "%s | Sai Rishit Sunku",
  },
  description:
    "Portfolio of Sai Rishit Sunku, a Full Stack Developer building modern web applications, AI-powered products, and digital experiences.",
  keywords: [
    "Sai Rishit Sunku",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Products",
    "MERN Developer",
    "India",
  ],
  authors: [{ name: "Sai Rishit Sunku" }],
  creator: "Sai Rishit Sunku",
  openGraph: {
    title: "Sai Rishit Sunku | Full Stack Developer",
    description:
      "Building modern web applications, AI-powered products, and digital experiences.",
    type: "website",
    locale: "en_IN",
    url: "https://sairishitsunku.dev",
    siteName: "Sai Rishit Sunku",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Rishit Sunku | Full Stack Developer",
    description:
      "Building modern web applications, AI-powered products, and digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body suppressHydrationWarning className="grain relative isolate bg-background antialiased">
        <LiquidEther
          className="pointer-events-none fixed inset-0 z-20 opacity-[0.28] mix-blend-screen [filter:saturate(0.96)_contrast(1.02)]"
          colors={["#f5f5f5", "#d4d4d4", "#a3a3a3"]}
          mouseForce={18}
          cursorSize={140}
          resolution={0.55}
          isViscous={false}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={1800}
          autoRampDuration={0.55}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
