"use client";

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import type { Group } from "three";
import { retintMaterials } from "@/components/cobotMaterial";

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

interface GLBModelProps {
  url: string;
  scaleOverride?: number;
  introTurns?: number;
  introDuration?: number;
  applyRetint?: boolean;
}

function GLBModel({
  url,
  scaleOverride,
  introTurns = 0,
  introDuration = 0,
  applyRetint = false,
}: GLBModelProps) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<Group>(null);
  const elapsedRef = useRef(0);
  const completedRef = useRef(introTurns <= 0 || introDuration <= 0);

  const preparedScene = useMemo(() => {
    if (!applyRetint) return scene;
    const cloned = scene.clone(true);
    retintMaterials(cloned);
    return cloned;
  }, [scene, applyRetint]);

  useEffect(() => {
    const box = new Box3().setFromObject(preparedScene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = (scaleOverride ?? 1) * (2 / maxDim);

    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale);
      groupRef.current.position.x = -center.x * scale;
      groupRef.current.position.z = -center.z * scale;
      groupRef.current.position.y = -box.min.y * scale;
    }
  }, [preparedScene, scaleOverride]);

  useEffect(() => {
    elapsedRef.current = 0;
    completedRef.current = introTurns <= 0 || introDuration <= 0;
    if (groupRef.current && !completedRef.current) {
      groupRef.current.rotation.y = -Math.PI * 2 * introTurns;
    }
  }, [introTurns, introDuration]);

  useFrame((_, delta) => {
    if (!groupRef.current || completedRef.current) return;
    elapsedRef.current += delta;
    const t = Math.min(elapsedRef.current / introDuration, 1);
    const totalSpin = Math.PI * 2 * introTurns;
    groupRef.current.rotation.y = -totalSpin + totalSpin * easeOutQuart(t);
    if (t >= 1) {
      groupRef.current.rotation.y = 0;
      completedRef.current = true;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={preparedScene} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8c7c78" wireframe />
    </mesh>
  );
}

export interface CameraState {
  position: [number, number, number];
  target: [number, number, number];
}

export interface ModelViewerHandle {
  getCameraState: () => CameraState;
}

interface ModelViewerProps {
  modelUrl: string;
  className?: string;
  enablePan?: boolean;
  showBorder?: boolean;
  scaleOverride?: number;
  initialCameraState?: CameraState;
  fill?: boolean;
  introTurns?: number;
  introDuration?: number;
  applyRetint?: boolean;
}

function CameraStateManager({
  stateRef,
  initialCameraState,
}: {
  stateRef: React.RefObject<{ getCameraState: () => CameraState } | null>;
  initialCameraState?: CameraState;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<React.ComponentRef<typeof OrbitControls>>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialCameraState && !initialized.current) {
      camera.position.set(...initialCameraState.position);
      if (controlsRef.current) {
        controlsRef.current.target.set(...initialCameraState.target);
        controlsRef.current.update();
      }
      initialized.current = true;
    }
  }, [camera, initialCameraState]);

  useEffect(() => {
    if (stateRef && "current" in stateRef) {
      (stateRef as React.MutableRefObject<{ getCameraState: () => CameraState } | null>).current = {
        getCameraState: () => ({
          position: [camera.position.x, camera.position.y, camera.position.z],
          target: controlsRef.current
            ? [
                controlsRef.current.target.x,
                controlsRef.current.target.y,
                controlsRef.current.target.z,
              ]
            : [0, 1, 0],
        }),
      };
    }
  });

  return null;
}

const ModelViewer = forwardRef<ModelViewerHandle, ModelViewerProps>(
  function ModelViewer(
    {
      modelUrl,
      className = "",
      enablePan = false,
      showBorder = false,
      scaleOverride,
      initialCameraState,
      fill = false,
      introTurns = 0,
      introDuration = 0,
      applyRetint = false,
    },
    ref,
  ) {
    const internalRef = useRef<{ getCameraState: () => CameraState } | null>(null);

    useImperativeHandle(ref, () => ({
      getCameraState: () =>
        internalRef.current?.getCameraState() ?? {
          position: [3, 2.5, 3],
          target: [0, 1, 0],
        },
    }));

    const sizeClasses = fill
      ? "w-full h-full"
      : "w-full aspect-[4/3] max-h-[600px] min-h-[400px]";

    return (
      <div
        className={`relative ${sizeClasses} overflow-hidden ${showBorder ? "rounded-2xl bg-gradient-to-br from-[#f5efe4] to-[#e6d9c8] border border-border" : ""} ${className}`}
      >
        <Canvas
          camera={{ position: initialCameraState?.position ?? [3, 2.5, 3], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ width: "100%", height: "100%", background: "transparent" }}
        >
          <CameraStateManager stateRef={internalRef} initialCameraState={initialCameraState} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 8, 5]} intensity={0.3} />
          <directionalLight position={[-5, 5, -3]} intensity={1.8} />
          <directionalLight position={[0, -2, 5]} intensity={0.4} />
          <Suspense fallback={<LoadingFallback />}>
            <GLBModel
              url={modelUrl}
              scaleOverride={scaleOverride}
              introTurns={introTurns}
              introDuration={introDuration}
              applyRetint={applyRetint}
            />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={enablePan}
            enableZoom={true}
            maxDistance={200}
            target={initialCameraState?.target ?? [0, 1, 0]}
          />
        </Canvas>
        <div
          className={
            fill
              ? "absolute bottom-2 right-3 pointer-events-none"
              : "text-center py-2"
          }
        >
          <span className="text-xs text-muted select-none">
            Drag to rotate · Scroll to zoom{enablePan ? " · Right-click to pan" : ""}
          </span>
        </div>
      </div>
    );
  },
);

export default ModelViewer;
