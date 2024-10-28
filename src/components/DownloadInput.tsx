import { FaPaste } from "react-icons/fa6";
import React from "react";
import { Button } from "@/components/ui/button";

function DownloadInput({
  onConvertPress,
  value,
  loading,
  setValue,
  showConvButton = true,
}: {
  onConvertPress: () => void;
  value: string;
  loading: boolean;
  showConvButton?: boolean;
  setValue: (text: string) => void;
}) {
  const onPastClick = async () => {
    const text = await navigator.clipboard.readText();
    setValue(text);
  };

  return (
    <div className="flex md:gap-3 gap-2 w-full md:flex-row flex-col">
      <div className="flex-row flex border-[3px] border-primary rounded-md w-full items-center pr-1">
        <input
          placeholder="Download"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-10 outline-none border-none bg-transparent pl-3"
        />
        <Button onClick={onPastClick} size={"icon"} className="h-8 shadow-xl">
          <FaPaste />
        </Button>
      </div>
      {showConvButton && (
        <Button
          onClick={onConvertPress}
          size={"lg"}
          className="md:h-auto"
          loading={loading}>
          Download
        </Button>
      )}
    </div>
  );
}

export { DownloadInput };
