/**
 * Paths match files in /public/images exactly.
 * To swap in JPG/PNG later, add the file and update the path here.
 */
export const images = {
  roboticPrinting: "/images/robotic-printing-placeholder.svg",
  concretePrinting: "/images/concrete-printing-placeholder.svg",
  polymerLfam: "/images/polymer-lfam-placeholder.svg",
  researchMaterials: "/images/research-materials-placeholder.svg",
} as const;

export type ImageKey = keyof typeof images;
