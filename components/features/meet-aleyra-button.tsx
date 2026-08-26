"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { VideoPopup } from "@/components/features/video-popup";

export function MeetAleyraButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsPopupOpen(true)}
        className="group inline-flex items-center gap-1.5 text-[0.95rem] md:text-[1.15rem] font-semibold tracking-[0.02em] text-cherry-red border-b-[1.5px] border-light-taupe pb-[2px] hover:text-deep-cocoa hover:border-deep-cocoa transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-offset-2 active:opacity-80 cursor-pointer bg-transparent"
      >
        <span>Meet Aleyra With Chezer</span>
        <PlayCircle
          className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] transition-transform duration-200 group-hover:scale-110 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </button>

      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
