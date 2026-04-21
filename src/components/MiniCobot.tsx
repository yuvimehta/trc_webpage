"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import type { Group } from "three";
import { COBOT_MODEL_URL, retintMaterials } from "@/components/cobotMaterial";

function MiniCobotModel() {
  const { scene } = useGLTF(COBOT_MODEL_URL);
  const pivotRef = useRef<Group>(null);
  const modelRef = useRef<Group>(null);

  const preparedScene = useMemo(() => {
    const cloned = scene.clone(true);
    retintMaterials(cloned);
    return cloned;
  }, [scene]);

  useEffect(() => {
    if (!modelRef.current) return;
    const box = new Box3().setFromObject(preparedScene);
    const size = new Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    // Smaller visible cobot with room around it inside the 44 px disc.
    const scale = 1.1 / maxDim;

    // Apply scale to the inner modelRef. Do NOT re-center horizontally - the GLB
    // is authored with its base at local (0, 0, 0), so keeping x=z=0 makes the
    // outer pivot's Y-axis align exactly with the robot base.
    modelRef.current.scale.setScalar(scale);
    modelRef.current.position.x = 0;
    modelRef.current.position.z = 0;
    // Shift the model down so its vertical midpoint sits at y=0 for camera framing.
    modelRef.current.position.y = -(size.y * scale) / 2;
  }, [preparedScene]);

  useFrame((_, delta) => {
    if (!pivotRef.current) return;
    pivotRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={pivotRef}>
      <group ref={modelRef}>
        <primitive object={preparedScene} />
      </group>
    </group>
  );
}

export default function MiniCobot() {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 2.8], fov: 34 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 4]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-3, 2, -1]} intensity={0.35} />
      <Suspense fallback={null}>
        <MiniCobotModel />
      </Suspense>
    </Canvas>
  );
}
