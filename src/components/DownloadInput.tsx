import { FaPaste } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoLink } from "react-icons/io5";
import { motion } from "framer-motion";
import { TODO } from "../../types";

function DownloadInput({
  onConvertPress,
  value,
  loading,
  setValue,
  placeHolder,
  showConvertButton = true,
}: {
  onConvertPress: () => void;
  value: string;
  loading: boolean;
  placeHolder?: string;
  setValue: (text: string) => void;
  showConvertButton?: boolean;
}) {
  const onPastClick = async () => {
    const text = await navigator.clipboard.readText();
    setValue(text);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-row items-center overflow-hidden rounded-full border">
        <Button
          variant={"ghost"}
          size={"lg"}
          className="h-full rounded-full p-4 hover:bg-transparent"
        >
          <IoLink className="size-7 -rotate-45" />
        </Button>

        <input
          placeholder={placeHolder ?? "video url"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-12 w-full border-none bg-transparent outline-none"
        />
        <Button
          onClick={onPastClick}
          variant={"ghost"}
          className="h-full rounded-full p-4"
        >
          <FaPaste className="size-9 text-muted-foreground" />
        </Button>
      </div>

      {loading && <LoadingBar />}

      {showConvertButton && (
        <div className="flex gap-3">
          <Button
            className="w-full"
            onClick={onPastClick}
            loading={loading}
            variant={"secondary"}
          >
            Past URL
          </Button>
          <Button className="w-full" onClick={onConvertPress} loading={loading}>
            Download
          </Button>
        </div>
      )}
    </div>
  );
}

export { DownloadInput };

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = (value: number, delay: number) => {
      return new Promise((resolve: TODO) => {
        const timer = setTimeout(() => {
          setProgress(value);
          resolve();
        }, delay);

        return () => clearTimeout(timer);
      });
    };

    const runProgressUpdates = async () => {
      await updateProgress(49, 800);
      await updateProgress(80, 800);
      await updateProgress(98, 800);
    };

    runProgressUpdates();
  }, []);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <motion.div
        className="h-full rounded-l-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};
