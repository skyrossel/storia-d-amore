"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
// @ts-ignore
import useSound from "use-sound";

const PlayButton = () => {
  const soundUrl = "/music/new-west-those-eyes.mp3";

  const [isPlaying, setIsPlaying] = useState(false);

  const [playOn] = useSound(soundUrl, {
    onplay: () => setIsPlaying(true),
  });

  return (
    <button
      onClick={() => {
        if (!isPlaying) {
          playOn();
        }
      }}
      className={cn(
        "absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        isPlaying && "animate-custom-bounce",
      )}
    >
      <span
        className={cn(
          "mr-2 transition-opacity ",
          isPlaying ? "opacity-0" : "opacity-100",
        )}
      >
        Click
      </span>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={98}
        height={139}
        className="object-cover"
      />{" "}
      <span
        className={cn(
          "ml-2 transition-opacity",
          isPlaying ? "opacity-0" : "opacity-100",
        )}
      >
        on me
      </span>
    </button>
  );
};

export default PlayButton;
