"use server";
import facebook from "fb-downloader-scrapper";

export const convertFBVideo = async (url: string) => {
  try {
    const data = await facebook(url);

    console.log({ data });

    return { data };
  } catch (error) {
    if (
      error ===
      "Unable to fetch video information at this time. Please try again"
    )
      return { error: "Invalid Tiktok URL. Make sure your url is correct!" };
    return { error: "Something went worng!" };
  }
};
