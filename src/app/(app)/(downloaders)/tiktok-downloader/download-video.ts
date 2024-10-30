"use server";

import TikDownn from "@tobyg74/tiktok-api-dl";

export const getTikTokVideoData = async (url: string) => {
  try {
    const data = await TikDownn.Downloader(url, {
      version: "v3", //  version: "v1" | "v2" | "v3"
    });

    if (data.status === "error") {
      return { error: data.message };
    }

    return { data };
  } catch {
    return { error: "Something went worng!" };
  }
};
