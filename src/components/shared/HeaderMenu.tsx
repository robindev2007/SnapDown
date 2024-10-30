import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBars } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { AiFillTikTok, AiFillFacebook } from "react-icons/ai";

export const DownloaderDropdownOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="">
          <FaBars className="size-6 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel>Downloaders</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/tiktok-downloader"}>
            <AiFillTikTok /> Tiktok Downloader
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/facebook-downloader"}>
            <AiFillFacebook /> Facebook Downloader
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
