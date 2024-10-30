"use client";
import { DownloadInput } from "@/components/DownloadInput";
import React, { useState } from "react";
import { convertFBVideo } from "./fb-down";
import { VideoData } from "fb-downloader-scrapper";
import { toast } from "sonner";
import DownloadDetails from "./DownloadDetails";

function FBDownloader() {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [videoData, setVideoData] = useState<VideoData>();

  const convertVideo = async () => {
    if (loading) return;
    if (searchValue.length < 1) return toast.warning("Enter video url");

    setLoading(true);
    const { data, error } = await convertFBVideo(searchValue);
    if (error) {
      toast.error(error);

      setLoading(false);
      return;
    }
    setVideoData(data);
    setLoading(false);
  };

  return (
    <div className="grid gap-10">
      {!videoData ? (
        <DownloadInput
          loading={loading}
          onConvertPress={convertVideo}
          setValue={setSearchValue}
          value={searchValue}
          placeHolder="Facebook video url"
        />
      ) : (
        <DownloadDetails data={videoData} />
      )}
    </div>
  );
}

export default FBDownloader;
