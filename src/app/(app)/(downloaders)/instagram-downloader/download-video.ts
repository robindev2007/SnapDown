"use server";

import axios from "axios";
import qs from "qs";
import { TODO } from "../../../../../types";

export const getTikTokVideoData = async (url: string) => {
  try {
    const BASE_URL = "https://aiovd.com/wp-json/aio-dl/video-data/";

    const dataBody = qs.stringify({
      url: url,
      token: "0d1a286f793e99721ae2b508c53abf74cc88d27e6ad7daedcaee8ef0ae749b8c",
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BASE_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataBody,
    };

    const { data } = await axios.request(config);

    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export interface InstrDLType {
  url: string;
  title: string;
  thumbnail: string;
  duration: TODO;
  source: string;
  medias: InstraDLMedia[];
  sid: string;
}

export interface InstraDLMedia {
  url: string;
  quality: string;
  extension: string;
  size: number;
  formattedSize: string;
  videoAvailable: boolean;
  audioAvailable: boolean;
  chunked: boolean;
  cached: boolean;
  requiresRendering: boolean;
}
