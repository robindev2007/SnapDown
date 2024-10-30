"use client";
import { useTheme } from "next-themes";
import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { motion, useAnimationControls } from "framer-motion";
import { Button } from "../ui/button";

function HeaderThemeToggler() {
  const controls = useAnimationControls();
  const { theme, setTheme } = useTheme();

  const ThemeIcon = theme === "dark" ? IoMoonOutline : IoSunnyOutline;
  const toggleTheme = () => {
    setTheme(theme !== "dark" ? "dark" : "lite");
    controls.start({
      rotateZ: theme === "dark" ? [-30, 0] : [30, 0], // Rotate from -20 to 0
      opacity: [0, 1], // Fade in from 0 to 1
      transition: { duration: 0.2 }, // Duration for the transition
    });
  };

  return (
    <Button onClick={toggleTheme} variant={"ghost"} size={"icon"}>
      <motion.div animate={controls}>
        <ThemeIcon className="size- text-muted-foreground" />
      </motion.div>
    </Button>
  );
}

export default HeaderThemeToggler;
