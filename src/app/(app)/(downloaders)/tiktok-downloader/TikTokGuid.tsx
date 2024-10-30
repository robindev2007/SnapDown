import Image from "next/image";
import React from "react";

const serviceList = [
  {
    name: "Unlimited Download",
    description:
      "Download as many videos as you need - without any limits. For Free.",
    imgSrc: "/images/limit.png",
  },

  {
    name: "Without  Watermark",
    description: "Download TikTok without watermark or remove a TT logo.",
    imgSrc: "/images/support.png",
  },
  {
    name: "MP4 and MP3",
    description: "Save videos in HD quality, convert TikTok to mp4 or mp3.",
    imgSrc: "/images/free.png",
  },
];

function TikTokGuid() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols- gap-8 px-4">
      {serviceList.map((service) => (
        <div key={service.name} className="p-3 rounded-md gap-3 flex flex-col">
          <div className="items-center justify-center flex gap-4">
            <Image
              src={service.imgSrc}
              height={200}
              width={200}
              alt=""
              className="size-6"
            />
            <h2 className="text-xl font-bold">{service.name}</h2>
          </div>

          <p className="text-muted-foreground text-center">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TikTokGuid;
