import DownloaderFaq from "@/components/shared/DownloaderFaq";
import FBDownloader from "./FBDownloader";
import Container from "@/components/shared/Container";
import AboutSnapDownCard from "@/components/shared/AboutSnapDownCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Downloader - Download Facebook Videos in HD",
  description: "Fast facebook video downloader, HD, SD 4k download fore free",
  keywords: [
    "Facebook Downloader, Facebook Video Downloader, fb downloader,Online Facebook video downloader, Facebook video downloader online",
    "fb dn",
    "fb downloader online",
    "fb video downloader",
    "free facebook dwonloader",
  ],
};

function YtDownloaderPage() {
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
  return (
    <div className="">
      <Container className="grid gap-6">
        <div className="text-center">
          <h1 className="text-lg font-semibold">
            ⚡️Face Book Video Downloader
          </h1>
        </div>
        <FBDownloader />
        <div className="mt-6"></div>
        <AboutSnapDownCard />
        <DownloaderFaq faqs={faqs} />
      </Container>
    </div>
  );
}

export default YtDownloaderPage;
