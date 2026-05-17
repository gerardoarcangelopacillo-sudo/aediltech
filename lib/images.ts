/**
 * Remote reference imagery (Unsplash / Pexels).
 * Replace URLs here when moving to owned photography.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const images = {
  /** Technologies — robotic deposition cell */
  roboticPrinting: {
    src: unsplash("1565043585406-32d53281c162"),
    alt: "Industrial robotic arm operating in a precision manufacturing cell",
  },
  /** Technologies — large-format additive process */
  polymerLfam: {
    src: unsplash("1612815200920-2d02f1686622"),
    alt: "Large-format additive manufacturing deposition head in operation",
  },
  /** Applications — material / structural texture */
  concretePrinting: {
    src: unsplash("1618221196162-d05d2d97cad2"),
    alt: "Layered concrete material surface with industrial texture",
  },
  /** Applications — manufacturing floor */
  manufacturingCell: {
    src: unsplash("1504917596037-3226b08aea88"),
    alt: "Automated manufacturing environment with industrial equipment",
  },
  /** Applications — tooling / metal fabrication */
  industrialTooling: {
    src: unsplash("1581091226825-a6a2a5aee158"),
    alt: "Engineer monitoring robotic systems in an industrial facility",
  },
  /** Research — materials laboratory */
  researchMaterials: {
    src: unsplash("1532187863488-ab08e6fdc024"),
    alt: "Materials research laboratory with scientific instrumentation",
  },
  /** Applications — computational / grid aesthetic */
  computationalGrid: {
    src: unsplash("1558494949-ef010cbdcc31"),
    alt: "High-tech industrial workspace with digital manufacturing equipment",
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
