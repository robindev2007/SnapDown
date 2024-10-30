import React from "react";
import Container from "./Container";
import SiteLogo from "./WebsiteLogo";
import HeaderThemeToggler from "./HeaderThemeToggler";
import { DownloaderDropdownOptions } from "./HeaderMenu";

function Header() {
  return (
    <div className="sticky left-0 top-0 border-b border-border/20 bg-background">
      <Container className="flex items-center justify-between">
        <SiteLogo />
        <div className="flex gap-0">
          <HeaderThemeToggler />
          <DownloaderDropdownOptions />
        </div>
      </Container>
    </div>
  );
}

export default Header;
