import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function AboutSnapDownCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About SnapDown</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          SnapDown is a user-friendly, web-based platform that enables secure
          video and audio downloads from popular social media sites like
          Facebook, Instagram, TikTok, and Twitter. It works on all devices
          without requiring software installation. SnapDown prioritizes user
          privacy and security, never storing downloaded content or personal
          information.
        </p>
      </CardContent>
    </Card>
  );
}

export default AboutSnapDownCard;
