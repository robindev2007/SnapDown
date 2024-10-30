import axios, { CancelToken } from "axios";
import { saveAs } from "file-saver";

const downloadFile = async ({
  fileName,
  url,
  setPercentComplete,
  setRemainingTime,
  setSpeed,
  setFileSize,
  cancelToken,
}: {
  url: string;
  fileName: string;
  setPercentComplete?: (percent: number) => void;
  setSpeed?: (speed: number) => void;
  setRemainingTime?: (time: number) => void;
  cancelToken?: CancelToken;
  setFileSize?: (size: number) => void;
}) => {
  const startTime = Date.now();

  try {
    // First, make a HEAD request to get the file size
    const headResponse = await axios.head(url, { cancelToken });
    const totalSize = parseInt(headResponse.headers["content-length"], 10);

    const totalSizeInMB = totalSize / (1024 * 1024);

    if (setFileSize) setFileSize(+totalSizeInMB.toFixed());

    // Start downloading the file
    const response = await axios.get(url, {
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        const current = progressEvent.loaded;

        const percentCompleted = Math.round((current / totalSize) * 100);
        if (setPercentComplete) setPercentComplete(percentCompleted);

        const elapsedTime = (Date.now() - startTime) / 1000;
        const speedInMBps =
          elapsedTime > 0 ? current / (1024 * 1024) / elapsedTime : 0;
        if (setSpeed) setSpeed(+speedInMBps.toFixed(2));

        const remainingBytes = totalSize - current;
        const remainingTime =
          speedInMBps > 0 ? remainingBytes / (speedInMBps * 1024 * 1024) : 0;
        if (setRemainingTime) setRemainingTime(+remainingTime.toFixed(2));
      },
      cancelToken: cancelToken,
    });

    const contentType =
      response.headers["content-type"] || "application/octet-stream";
    const blob = new Blob([response.data], { type: contentType });
    const downloadFileName = fileName || url.split("/").pop() || "download";
    saveAs(blob, downloadFileName);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Download canceled:", error.message);
    } else {
      console.error("Error downloading the file:", error);
    }
  }
};

export { downloadFile };
