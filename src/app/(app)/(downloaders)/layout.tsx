import Footer from "@/components/Footer";
import React, { ReactNode } from "react";

function DownloadersLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default DownloadersLayout;
