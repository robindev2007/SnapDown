import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TikTok Downloader - Download TikTok Video without watermark",
  description:
    "Fastest TikTok video downloader! Save your TikTok videos in two taps, fast and free. With or without a watermark with MediaMaster TikTok mp4 video & audio downloader online",

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
      <body className={`${inter.className} antialiased bg-background dark`}>
        <main className="min-h-screen overflow-x-hidden h-full flex flex-col">
          <Toaster richColors position="top-right" theme="dark" />
          {children}
        </main>
      </body>
    </html>
  );
}
