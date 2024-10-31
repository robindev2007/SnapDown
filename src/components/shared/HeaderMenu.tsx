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
import { AiFillTikTok, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export const DownloaderDropdownOptions = () => {
  const menus = [
    {
      title: "Instragram Downloader",
      link: "/instagram-downloader",
      icon: AiFillInstagram,
    },
    {
      title: "Facebook Downloader",
      link: "/facebook-downloader",
      icon: AiFillFacebook,
    },
    {
      title: "Tiktok Downloader",
      link: "/tiktok-downloader",
      icon: AiFillTikTok,
    },
  ];
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
        {menus.map((menu) => (
          <DropdownMenuItem asChild key={menu.title}>
            <Link href={menu.link}>
              <menu.icon /> {menu.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
