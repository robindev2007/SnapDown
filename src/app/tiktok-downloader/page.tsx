import React from "react";
import TikTokMainPage from "./TikTokDownloaderPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Downloader - Download TikTok Video without Watermark",
  description:
    "Fastest TikTok video downloader! Save your TikTok videos in two taps, fast and free. With or without a watermark with MediaMaster TikTok mp4 video & audio downloader online",
  keywords: [
    "TikTok Downloader, TikTok Video Downloader, tk downloader,Online tiktok video downloader, TikTok video downloader online",
  ],
};

function TikTokDownloaderPage() {
  return <TikTokMainPage />;
}

export default TikTokDownloaderPage;
