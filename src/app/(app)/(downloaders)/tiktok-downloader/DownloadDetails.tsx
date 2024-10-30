import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaGrinStars } from "react-icons/fa";
import Image from "next/image";
import { MusicalDownResponse } from "@tobyg74/tiktok-api-dl/lib/types/downloader/musicaldown";

function DownloadDetails({ data }: { data: MusicalDownResponse["result"] }) {
  return (
    <div className="flex h-full w-full flex-row flex-wrap gap-10">
      <div className="flex flex-1 flex-row gap-2">
        {data?.author?.avatar && (
          <Image
            src={data?.author?.avatar}
            height={500}
            width={500}
            alt={data.author.nickname ?? ""}
            className="h-16 w-16 rounded-full object-cover"
          />
        )}

        <div className="flex flex-col">
          <p className="line-clamp-2 text-xl font-bold">
            {data?.author?.nickname}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {data?.videoHD && (
          <Link href={data?.videoHD} download={"video.mp4"} target="_blank">
            <Button className="w-full">
              Withot watermark HD <FaGrinStars className="text-white" />{" "}
            </Button>
          </Link>
        )}
        {/* {data?.videoSD && (
          <Link href={data?.videoSD} download={"video.mp4"} target="_blank">
            <Button className="w-full">Withot watermark SD</Button>
          </Link>
        )} */}
        {data?.videoWatermark && (
          <Link href={data.videoWatermark}>
            <Button className="w-full">Watermark</Button>
          </Link>
        )}

        {data?.music && (
          <>
            <p className="text-center">Audio</p>
            <Link href={data.music}>
              <Button className="w-full">Audio</Button>
            </Link>
          </>
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
  );
}

export default DownloadDetails;
