// fb-downloader-scrapper.d.ts
declare module "fb-downloader-scrapper" {
  interface VideoData {
    url: string;
    duration_ms: number;
    sd: string;
    hd: string;
    title: string;
    thumbnail: string;
  }

  export default function facebook(url: string): Promise<VideoData>;
}
