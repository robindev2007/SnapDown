import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ToasterProvider from "@/components/toaster-provider";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapDown - Download Videos from facebook, youtube, tiktok, etc free",
  description:
    "Fast video all social media downloader! Save your videos in two taps, fast and free. HD, SD,  mp4 video & audio downloader online",

  verification: {
    google: "F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background antialiased`}>
        <main className="flex h-full min-h-screen flex-col scroll-smooth">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ToasterProvider richColors position="top-right" />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
