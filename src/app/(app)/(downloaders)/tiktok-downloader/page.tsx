import React from "react";
import TikTokMainPage from "./TikTokDownloaderPage";
import { Metadata } from "next";
import Container from "@/components/shared/Container";
import AboutSnapDownCard from "@/components/shared/AboutSnapDownCard";
import DownloaderFaq from "@/components/shared/DownloaderFaq";

export const metadata: Metadata = {
  title: "TikTok Downloader - Download TikTok Video without Watermark",
  description:
    "Fastest TikTok video downloader! Save your TikTok videos in two taps, fast and free. With or without a watermark with MediaMaster TikTok mp4 video & audio downloader online",
  keywords: [
    "TikTok Downloader, TikTok Video Downloader, tk downloader,Online tiktok video downloader, TikTok video downloader online",
  ],
};

const faqs = [
  {
    title: "Where are the downloaded videos stored?",
    answer:
      "Downloaded videos are typically saved in your system's Download folder, unless you've specified a different location in your browser's settings. This applies to all major operating systems and browsers.",
  },
  {
    title: "Are videos stored on your servers?",
    answer:
      "No, we do not store videos. Our service searches for direct URLs to videos hosted on Facebook's servers, allowing you to download directly without storing any content on our end.",
  },
  {
    title: "Is this video downloader service free?",
    answer:
      "Yes, our FB video downloader is completely free to use without any hidden fees or charges. Enjoy unlimited downloads through our user-friendly web application.",
  },
  {
    title: "What video qualities are supported?",
    answer:
      "Our downloader supports a range of video qualities, from SD to 4K, depending on the original upload quality. Choose the best quality available for a superior viewing experience.",
  },
  {
    title: "Can I use the downloader on mobile?",
    answer:
      "While our browser extension is designed for desktop use, mobile users can access our website or use the Android app to download Facebook videos directly to their devices.",
  },
];

function TikTokDownloaderPage() {
  return (
    <div className="">
      <Container className="grid gap-6">
        <div className="text-center">
          <h1 className="text-lg font-semibold">⚡️TikTok Video Downloader</h1>
        </div>
        <TikTokMainPage />
        <div className="mt-6"></div>

        <AboutSnapDownCard />
        <DownloaderFaq faqs={faqs} />
      </Container>
    </div>
  );
}

export default TikTokDownloaderPage;
