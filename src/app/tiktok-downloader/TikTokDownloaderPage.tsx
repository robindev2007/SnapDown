"use client";
import React, { useState } from "react";
import TikTokGuid from "./TikTokGuid";
import { useRouter } from "next/navigation";
import { DownloadInput } from "@/components/DownloadInput";
import { getTikTokVideoData } from "./download-video";
import { toast } from "sonner";
import { TiklydownRes } from "node-tiklydown";
import DownloadDetails from "./DownloadDetails";
import { MusicalDownResponse } from "@tobyg74/tiktok-api-dl/lib/types/downloader/musicaldown";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";

const TikTokMainPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [videoData, setVideoData] = useState<{
    data: MusicalDownResponse;
    result: TiklydownRes["result"];
  }>();

  const router = useRouter();

  const handleConvertPress = async () => {
    if (loading) return;
    if (!searchValue) {
      toast.warning("Enter url");
      return;
    }
    setLoading(true);

    const { data, result } = await getTikTokVideoData(searchValue);
    console.log({ data, result });
    if (
      !data.result?.videoHD &&
      !data.result?.videoWatermark &&
      !data.result?.music
    ) {
      toast.error("Something went worng");
      setLoading(false);
      return;
    }

    router.push("#downloader", {
      scroll: true,
    });

    setVideoData({ data, result });
    setLoading(false);
  };

  return (
    <div className="items-center flex flex-col scroll-smooth overflow-x-hidden max-w-screen-md p-4 mx-auto">
      <div className="h-full flex flex-col w-full gap-5">
        <h1 className="mb-1 text-center text-2xl font-semibold md:text-3xl">
          TikTok Video Downloader
        </h1>
        <p className="mx-auto mb-3 text-center md:max-w-[90%]">
          Download TikTok video for free without Watermark in HD
        </p>

        <DownloadInput
          setValue={(text) => setSearchValue(text)}
          value={searchValue}
          onConvertPress={handleConvertPress}
          loading={loading}
          showConvButton={!videoData?.data}
        />

        {loading && <Progress value={80} className="" />}

        {videoData?.data.result && (
          <DownloadDetails
            data={videoData.data.result}
            info={videoData.result}
          />
        )}
      </div>
      <TikTokGuid />
      <Footer />
    </div>
  );
};

export default TikTokMainPage;
