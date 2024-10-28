import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiklydownRes } from "node-tiklydown";
import React from "react";
import { FaGrinStars } from "react-icons/fa";
import { MusicalDownResponse } from "@tobyg74/tiktok-api-dl/lib/types/downloader/musicaldown";
import Image from "next/image";
import { Alert } from "@/components/ui/alert";

function DownloadDetails({
  data,
  info,
}: {
  data?: MusicalDownResponse["result"];
  info: TiklydownRes["result"];
}) {
  const onClick = () => {};

  return (
    <div id="downloader" className="gap-4 flex flex-row w-full pt-5">
      <div className="flex flex-row gap-2 flex-1">
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
          <p className="text-xl font-bold line-clamp-2">
            {data?.author?.nickname}
          </p>
        </div>
      </div>

      <div className="flex flex-1 gap-3 flex-col">
        {data?.videoHD && (
          <Link href={data?.videoHD} download={"video.mp4"} target="_blank">
            <Button onClick={onClick} className="w-full">
              Withot watermark HD <FaGrinStars className="text-white" />{" "}
            </Button>
          </Link>
        )}
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

        <Alert className="gap-3 flex jub">
          <p>
            Likes:{" "}
            {info.stats.likeCount.length > 0 ? info.stats.likeCount : "__"}
          </p>
          <p>
            Plays:{" "}
            {info.stats.playCount.length > 0 ? info.stats.playCount : "__"}
          </p>
          <p>
            Comments:{" "}
            {info.stats.commentCount.length > 0
              ? info.stats.commentCount
              : "__"}
          </p>
        </Alert>
        <Link href={"/"} className="mt-3">
          <Button className="w-full" variant={"secondary"}>
            Download Another
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DownloadDetails;
