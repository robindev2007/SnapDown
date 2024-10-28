"use server";

import Tiktok2 from "@tobyg74/tiktok-api-dl";
import { v4 } from "node-tiklydown";

export const getTikTokVideoData = async (url: string) => {
  const { result } = await v4(url);

  const data = await Tiktok2.Downloader(url, {
    version: "v3", //  version: "v1" | "v2" | "v3"
  });

  return { data, result };
};
