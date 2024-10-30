import React from "react";
import Container from "./shared/Container";
import Link from "next/link";

function Footer() {
  const footerOptions = [
    {
      title: "Tools",
      options: [
        {
          title: "TikTok Downloader",
          link: "/tiktok-downloader",
        },
        {
          title: "Facebook Downloader",
          link: "/facebook-downloader",
        },
      ],
    },
    {
      title: "Support",
      options: [
        {
          title: "Contact",
          link: "#",
        },
        {
          title: "FAQ",
          link: "#",
        },
      ],
    },
    {
      title: "General",
      options: [
        {
          title: "About",
          link: "#",
        },
        {
          title: "Privacy Policy",
          link: "#",
        },
      ],
    },
  ];

  return (
    <Container>
      <footer className="mt-10 flex flex-col gap-5 border-t border-border/70 pt-4">
        <FooterOptions allOptions={footerOptions} />
        <div className="mx-auto grid max-w-[80%] gap-2 py-5 text-center text-xs text-muted-foreground">
          <p>&copy; 2024 SnapDownloader</p>
          <p>
            SnapDown is not endorsed or certified by any social platform. All TM
            logos and trademarks displayed on this application are property of
            their own.
          </p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;

const FooterOptions = ({
  allOptions,
}: {
  allOptions: {
    title: string;
    options: {
      title: string;
      link: string;
    }[];
  }[];
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {allOptions.map((options) => (
        <div key={options.title} className="gap flex-col gap-1 text-sm">
          <h2 className="font-semibold">{options.title}</h2>
          <div className="flex flex-col gap-0.5">
            {options.options.map((option) => (
              <Link
                href={option.link}
                key={option.title}
                className="text-muted-foreground hover:underline"
              >
                {option.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
