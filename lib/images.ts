/**
 * Remote reference imagery (Pexels / Unsplash).
 * Replace URLs here when moving to owned photography.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

const pexels = (id: number, w = 1920) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  /** Technologies — robotic deposition cell */
  roboticPrinting: {
    src: pexels(16544056),
    alt: "Industrial robotic arm in a precision manufacturing environment",
  },
  /** Technologies — large-format additive process */
  polymerLfam: {
    src: pexels(4480501),
    alt: "Large-format additive manufacturing equipment in an industrial facility",
  },
  /** Applications — material / structural texture */
  concretePrinting: {
    src: pexels(2219026),
    alt: "Layered concrete material surface with industrial texture",
  },
  /** Applications — manufacturing floor */
  manufacturingCell: {
    src: pexels(373543),
    alt: "Automated manufacturing floor with industrial production equipment",
  },
  /** Applications — tooling / metal fabrication */
  industrialTooling: {
    src: pexels(5532717),
    alt: "Precision industrial machinery in a modern production environment",
  },
  /** Research — materials laboratory */
  researchMaterials: {
    src: pexels(4787780),
    alt: "Materials research laboratory with scientific instrumentation",
  },
  /** Applications — computational / grid aesthetic */
  computationalGrid: {
    src: pexels(1148820),
    alt: "High-tech industrial workspace with digital manufacturing systems",
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

/** Homepage application card imagery */
export const applicationImages: Record<
  | "facades"
  | "structures"
  | "interiors"
  | "infrastructure"
  | "tooling"
  | "material-rd",
  SiteImage
> = {
  facades: images.concretePrinting,
  structures: images.roboticPrinting,
  interiors: images.polymerLfam,
  infrastructure: images.manufacturingCell,
  tooling: images.industrialTooling,
  "material-rd": images.researchMaterials,
};
