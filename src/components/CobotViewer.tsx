"use client";

import ModelViewer, { type CameraState } from "@/components/ModelViewer";

interface CobotViewerProps {
  fill?: boolean;
  initialCameraState?: CameraState;
  introTurns?: number;
  introDuration?: number;
}

export default function CobotViewer({
  fill = false,
  initialCameraState,
  introTurns,
  introDuration,
}: CobotViewerProps) {
  return (
    <ModelViewer
      fill={fill}
      initialCameraState={initialCameraState}
      introTurns={introTurns}
      introDuration={introDuration}
      applyRetint
      modelUrl="https://storage.googleapis.com/trc_web/assets/3d_files/cobot.glb"
    />
  );
}
