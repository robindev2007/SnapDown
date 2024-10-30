import Header from "@/components/shared/Header";
import ScrollUpArrow from "@/components/shared/ScrollUpArrow";
import React, { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <ScrollUpArrow />
    </div>
  );
}

export default AppLayout;
