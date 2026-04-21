import { Color, Mesh, MeshStandardMaterial } from "three";
import type { Group, Material, Object3D } from "three";

export const COBOT_MODEL_URL =
  "https://storage.googleapis.com/trc_web/assets/3d_files/cobot.glb";

export function retintMaterials(root: Group | Object3D) {
  const seen = new Set<Material>();
  root.traverse((obj) => {
    const mesh = obj as Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((m) => {
      if (!m || seen.has(m)) return;
      seen.add(m);
      const std = m as MeshStandardMaterial;
      if (!std.color) return;
      const c = std.color;

      if (c.b > 0.22 && c.b > c.r + 0.05 && c.b > c.g + 0.05) {
        const darker = new Color(c.r, c.g, c.b).multiplyScalar(0.45);
        std.color.copy(darker);
        if (std.emissive) std.emissive.multiplyScalar(0.6);
        std.needsUpdate = true;
        return;
      }

      const isNearWhite =
        c.r > 0.75 &&
        c.g > 0.75 &&
        c.b > 0.75 &&
        Math.abs(c.r - c.g) < 0.08 &&
        Math.abs(c.g - c.b) < 0.08;
      if (isNearWhite) {
        std.color.setRGB(0.62, 0.6, 0.58);
        if (std.emissive) std.emissive.multiplyScalar(0.3);
        if (typeof std.metalness === "number") {
          std.metalness = Math.min(std.metalness, 0.15);
        }
        if (typeof std.roughness === "number") {
          std.roughness = Math.max(std.roughness, 0.7);
        }
        std.needsUpdate = true;
      }
    });
  });
}
