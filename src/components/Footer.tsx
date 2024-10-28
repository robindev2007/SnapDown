import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mt-5">
      <p className="text-muted-foreground">
        developed by Robin email:{" "}
        <Link className="text-primary" href={"mailto:prodev.robin@gmail.com"}>
          prodev.robin@gmail.com
        </Link>
      </p>
    </div>
  );
}

export default Footer;
