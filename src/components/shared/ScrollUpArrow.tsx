"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

function ScrollUpArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setIsVisible(false);
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 flex aspect-square shrink-0 animate-bounce cursor-pointer rounded-full border border-border/5 bg-muted p-4 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
        >
          <FaArrowUpLong className="text-muted-foreground" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollUpArrow;
