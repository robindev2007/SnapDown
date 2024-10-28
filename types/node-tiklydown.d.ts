// node-tiklydown.d.ts
declare module "node-tiklydown" {
  // Define the TiklydownRes type based on the expected response structure
  export interface TiklydownRes {
    status: number;
    result: Result;
  }

  export interface Result {
    desc: string;
    author: Author;
    type: string;
    content: Content;
    stats: Stats;
    audio: Audio;
  }

  export interface Author {
    username: string;
    url: string;
    avatar: string;
    nickname: string;
  }

  export interface Content {
    noWatermark: string;
    watermark: string;
  }

  export interface Stats {
    playCount: string;
    likeCount: string;
    commentCount: string;
    saveCount: string;
    shareCount: string;
  }

  export interface Audio {
    name: string;
    url: string;
  }

  export function v4(tiktok_url: string): Promise<TiklydownRes>;
}
