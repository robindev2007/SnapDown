import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

type containerProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};

function Container({ className, ...props }: containerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-lg p-3", className)}
      {...props}
    />
  );
}

export default Container;
