import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { downloadFile } from "@/utils/file-saver";
import axios, { CancelTokenSource } from "axios"; // Import CancelTokenSource here

type FileDownloaderWithProgressProps = {
  videoUrl: string;
  children: ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  title?: string;
};

function FileDownloaderWithProgress({
  videoUrl,
  children,
  variant,
  title,
}: FileDownloaderWithProgressProps) {
  const [progress, setProgress] = useState(0);
  const [timeRemain, setTimeRemain] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [cancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null); // Use the imported type

  const handleDownloadFileClick = () => {
    if (downloading) return;
    setDownloading(true);

    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    downloadFile({
      url: videoUrl,
      fileName: title ?? "No title video",
      setPercentComplete: setProgress,
      setRemainingTime: setTimeRemain,
      setSpeed: setDownloadSpeed,
      setFileSize,
      cancelToken: source.token,
    }).finally(() => {
      setDownloading(false);
      setCancelTokenSource(null);
    });
  };

  const handleCancelDownload = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Download cancelled by user.");
      setDownloading(false);
      setCancelTokenSource(null);
    }
  };

  return (
    <div className="grid w-full gap-2">
      <Button
        variant={variant ?? "default"}
        onClick={handleDownloadFileClick}
        disabled={downloading}
      >
        {children}
      </Button>

      {downloading && (
        <div className="mb-3 flex flex-col items-center gap-3">
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-l-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-balance text-sm text-muted-foreground">
              Progress {progress} %
            </p>
            <p className="text-balance text-sm text-muted-foreground">
              Remain {timeRemain.toFixed()} sec
            </p>
            <p className="text-sm text-muted-foreground">
              Speed {downloadSpeed} MB/S
            </p>
            <p className="text-sm text-muted-foreground">Size {fileSize} MB</p>
          </div>
          <Button
            variant="destructive"
            onClick={handleCancelDownload}
            className="w-full"
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export default FileDownloaderWithProgress;
