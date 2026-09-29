import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dendra Adira Pratama — Backend Developer",
  description:
    "Personal portfolio of Dendra Adira Pratama. Aspiring Backend Developer focused on Node.js, Express.js, Prisma, MySQL, and scalable API architecture.",
  keywords: [
    "Dendra Adira Pratama",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "Prisma",
    "MySQL",
    "REST API",
    "Jakarta",
  ],
  authors: [{ name: "Dendra Adira Pratama" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0D11" },
    { media: "(prefers-color-scheme: light)", color: "#F4F1EA" },
  ],
};

/* Anti-FOUC: pasang tema sebelum paint pertama.
   Prioritas: localStorage (pilihan manual) → preferensi sistem. */
const themeInitScript = `
(function(){try{
  var stored = localStorage.getItem("theme");
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var light = stored ? stored === "light" : prefersLight;
  if (light) document.documentElement.classList.add("light");
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-screen bg-charcoal-900 text-offwhite-100 font-sans">
        {children}
      </body>
    </html>
  );
}
