/**
 * Homepage section images in /public/images.
 * Replace SVG placeholders with JPG/PNG at the same basename when ready
 * (e.g. robotic-printing-placeholder.jpg).
 */
export const images = {
  roboticPrinting: "/images/robotic-printing-placeholder.svg",
  concretePrinting: "/images/concrete-printing-placeholder.svg",
  polymerLfam: "/images/polymer-lfam-placeholder.svg",
  researchMaterials: "/images/research-materials-placeholder.svg",
} as const;

/** JPG paths for production assets — swap `images` values when files are added. */
export const imagePathsJpg = {
  roboticPrinting: "/images/robotic-printing-placeholder.jpg",
  concretePrinting: "/images/concrete-printing-placeholder.jpg",
  polymerLfam: "/images/polymer-lfam-placeholder.jpg",
  researchMaterials: "/images/research-materials-placeholder.jpg",
} as const;
