"use client";

import { useState, useEffect, useRef } from "react";

interface VideoCarouselProps {
  videos: string[];
  interval?: number;
  className?: string;
}

export default function VideoCarousel({
  videos,
  interval = 15000,
  className = "",
}: VideoCarouselProps) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [videos.length, interval]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === active) {
          video.play().catch(() => {});
        }
      }
    });
  }, [active]);

  return (
    <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${className}`}>
      {videos.map((src, i) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[i] = el; }}
          autoPlay={i === 0}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
