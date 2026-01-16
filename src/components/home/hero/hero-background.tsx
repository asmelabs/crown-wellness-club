"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const DEFAULT_VIDEO_SRC =
  "https://res.cloudinary.com/doep7sd3t/video/upload/v1760541508/crownvideoneedcompress_1_stgpxd.mp4";

interface HeroBackgroundProps {
  bgVideoUrl?: string;
}

export function HeroBackground({ bgVideoUrl }: HeroBackgroundProps) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Video Background */}
      <video
        autoPlay
        muted={isMuted}
        loop
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="auto"
        controls={false}
      >
        <source src={bgVideoUrl ?? DEFAULT_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Mute Button */}
      <Button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-30 text-white transition-all duration-300 hover:scale-105"
        variant="glassmorhpic"
        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        size="icon"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </Button>
    </>
  );
}
