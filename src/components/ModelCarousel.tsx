"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModelViewer from "@/components/ModelViewer";
import type { ModelViewerHandle, CameraState } from "@/components/ModelViewer";

interface ModelItem {
  url: string;
  label: string;
  scale?: number;
}

interface ModelCarouselProps {
  models: ModelItem[];
  enablePan?: boolean;
  showBorder?: boolean;
}

export default function ModelCarousel({
  models,
  enablePan = false,
  showBorder = false,
}: ModelCarouselProps) {
  const [index, setIndex] = useState(0);
  const viewerRef = useRef<ModelViewerHandle>(null);
  const savedStates = useRef<Map<number, CameraState>>(new Map());

  const switchTo = useCallback(
    (newIndex: number) => {
      // Save current camera state
      if (viewerRef.current) {
        savedStates.current.set(index, viewerRef.current.getCameraState());
      }
      setIndex(newIndex);
    },
    [index],
  );

  const prev = () => switchTo((index - 1 + models.length) % models.length);
  const next = () => switchTo((index + 1) % models.length);

  return (
    <div className="relative">
      <ModelViewer
        key={index}
        ref={viewerRef}
        modelUrl={models[index].url}
        enablePan={enablePan}
        showBorder={showBorder}
        scaleOverride={models[index].scale}
        initialCameraState={savedStates.current.get(index)}
      />

      {/* Label */}
      <div className="text-center mt-2">
        <span className="text-sm font-medium text-foreground">
          {models[index].label}
        </span>
        <span className="text-xs text-muted ml-2">
          {index + 1} / {models.length}
        </span>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-border shadow-md flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous model"
      >
        <ChevronLeft size={20} className="text-foreground" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-border shadow-md flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next model"
      >
        <ChevronRight size={20} className="text-foreground" />
      </button>
    </div>
  );
}
