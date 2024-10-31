import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { InstrDLType } from "./download-video";
import FileDownloaderWithProgress from "@/components/shared/FileDownloaderWithProgress";

function DownloadDetails({ data }: { data: InstrDLType }) {
  return (
    <div id="download-data" className="mt-6 flex flex-col gap-5 md:flex-row">
      {data?.thumbnail && (
        <Image
          src={data.thumbnail}
          height={1000}
          width={1000}
          alt={data.title}
          className="mx-auto max-h-[24rem] w-full max-w-[30%] overflow-hidden rounded-md object-contain md:col-span-1 md:max-w-[20%]"
        />
      )}

      <div className="col-span-3 flex w-full flex-col gap-3">
        {data.medias.map((media) => (
          <FileDownloaderWithProgress key={media.url} videoUrl={media.url}>
            Download {media.quality.toUpperCase()}{" "}
            {(media.size / (1024 * 1024)).toFixed(2)} MB
          </FileDownloaderWithProgress>
        ))}

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
