"use client";
import React, { useState } from "react";
import { DownloadInput } from "@/components/DownloadInput";
import { getTikTokVideoData, InstrDLType } from "./download-video";
import { toast } from "sonner";
import DownloadDetails from "./DownloadDetails";

const IntraDownloader = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [videoData, setVideoData] = useState<InstrDLType>();

  const handleConvertPress = async () => {
    if (loading) return;
    if (!searchValue) {
      toast.warning("Enter url");
      return;
    }
    setLoading(true);

    const { data, error } = await getTikTokVideoData(searchValue);

    if (error) {
      // toast.error(error);
      console.log(error);
      setLoading(false);
      return;
    }

    console.log(data);
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
          placeHolder="Instragram video or reels url"
          showConvertButton={!videoData}
        />
      ) : (
        <DownloadDetails data={videoData} />
      )}
    </div>
  );
};

export default IntraDownloader;
