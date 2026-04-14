"use client";

import { Suspense, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import type { Group } from "three";

function GLBModel({ url, scaleOverride }: { url: string; scaleOverride?: number }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    const box = new Box3().setFromObject(scene);
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
  }, [scene, scaleOverride]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3ecf8e" wireframe />
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

    return (
      <div
        className={`w-full aspect-[4/3] max-h-[600px] min-h-[400px] overflow-hidden ${showBorder ? "rounded-2xl bg-gradient-to-br from-[#d6e4dc] to-[#c8d4c8] border border-border" : ""} ${className}`}
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
            <GLBModel url={modelUrl} scaleOverride={scaleOverride} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={enablePan}
            enableZoom={true}
            maxDistance={200}
            target={initialCameraState?.target ?? [0, 1, 0]}
          />
        </Canvas>
        <div className="text-center py-2">
          <span className="text-xs text-muted select-none">
            Drag to rotate · Scroll to zoom{enablePan ? " · Right-click to pan" : ""}
          </span>
        </div>
      </div>
    );
  },
);

export default ModelViewer;
