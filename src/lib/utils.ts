import { ClassValue, clsx } from "clsx";
import { formatDuration, intervalToDuration } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMilliseconds(milliseconds: number) {
  // Convert milliseconds to a duration
  const duration = intervalToDuration({ start: 0, end: milliseconds });

  // Format the duration
  return formatDuration(duration, { format: ["minutes", "seconds"] });
}
