import { VideoData } from "fb-downloader-scrapper";
import React from "react";
import { formatMilliseconds } from "@/lib/utils";
import Image from "next/image";
import { FaGrinStars } from "react-icons/fa";
import FileDownloaderWithProgress from "@/components/shared/FileDownloaderWithProgress";
import { Button } from "@/components/ui/button";

function DownloadDetails({ data }: { data: VideoData }) {
  const formattedDuration = formatMilliseconds(data?.duration_ms);

  return (
    <div id="download-data" className="mt-6 grid gap-4 md:grid-cols-5">
      <Image
        src={data.thumbnail}
        height={1000}
        width={1000}
        alt={data.title}
        className="mx-auto max-h-[24rem] w-full max-w-[60%] overflow-hidden rounded-md object-contain md:col-span-1 md:max-w-[100%]"
      />
      <div className="flex w-full grid-cols-5 flex-col gap-7 md:col-span-4 md:grid md:flex-row">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <p className="font-semibold">Title:</p>
            <p className="line-clamp-3 text-muted-foreground">{data.title}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Description:</p>
            <p className="text-muted-foreground">No video description...</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Duration:</p>
            <p className="text-muted-foreground">{formattedDuration}</p>
          </div>
        </div>
        <div className="col-span-3 flex w-full flex-col gap-3">
          {data?.hd && (
            <FileDownloaderWithProgress
              videoUrl={data.hd}
              title={data.title + " HD (SnapDown)"}
            >
              Withot watermark HD <FaGrinStars className="text-white" />{" "}
            </FileDownloaderWithProgress>
          )}
          {data?.sd && (
            <FileDownloaderWithProgress
              videoUrl={data.sd}
              variant="secondary"
              title={data.title + " SD (SnapDown)"}
            >
              Withot watermark SD
            </FileDownloaderWithProgress>
          )}
          <Button
            onClick={() => window.location.reload()}
            className="w-full"
            variant={"secondary"}
          >
            Download Another
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DownloadDetails;
