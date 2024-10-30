"use client";
import React, { useState } from "react";
import { DownloadInput } from "@/components/DownloadInput";
import { getTikTokVideoData } from "./download-video";
import { toast } from "sonner";
import { MusicalDownResponse } from "@tobyg74/tiktok-api-dl/lib/types/downloader/musicaldown";
import DownloadDetails from "./DownloadDetails";

const TikTokMainPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [videoData, setVideoData] = useState<MusicalDownResponse>();

  const handleConvertPress = async () => {
    if (loading) return;
    if (!searchValue) {
      toast.warning("Enter url");
      return;
    }
    setLoading(true);

    const { data, error } = await getTikTokVideoData(searchValue);

    if (error) {
      toast.error(error);
      setLoading(false);
      return;
    }

    setVideoData(data);

    setLoading(false);
  };

  return (
    <div className="flex h-full w-full flex-col gap-5">
      {!videoData ? (
        <DownloadInput
          setValue={(text) => setSearchValue(text)}
          value={searchValue}
          onConvertPress={handleConvertPress}
          loading={loading}
          placeHolder="TikTok video url"
          showConvertButton={!videoData}
        />
      ) : (
        <DownloadDetails data={videoData.result} />
      )}
    </div>
  );
};

export default TikTokMainPage;
