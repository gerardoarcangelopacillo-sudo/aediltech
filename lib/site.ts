export const siteConfig = {
  name: "Aediltech",
  brandTagline: "Advance Additive Manufacturing Technologies",
  tagline: "Advanced additive systems for built environments.",
  description:
    "Aediltech develops advanced additive manufacturing technologies, robotic systems and material solutions for architecture, construction, industry and design.",
  email: "info@aediltech.com",
} as const;

export const navLinks = [
  { label: "Company", href: "/company" },
  { label: "Technologies", href: "/technologies" },
  { label: "Solutions", href: "/solutions" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;

/** In-page anchors for the homepage fullscreen layout */
export const homeSectionLinks = [
  { label: "Technologies", href: "#technologies" },
  { label: "Solutions", href: "#solutions" },
  { label: "Applications", href: "#applications" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
] as const;

export const technologies = [
  {
    id: "large-format-am",
    index: "01",
    title: "Large-format additive manufacturing",
    description:
      "Scalable deposition platforms engineered for architectural scale, structural performance and continuous production.",
  },
  {
    id: "robotic-systems",
    index: "02",
    title: "Robotic deposition systems",
    description:
      "Multi-axis robotic cells with precision motion control for complex geometries and repeatable field deployment.",
  },
  {
    id: "material-solutions",
    index: "03",
    title: "Advanced material solutions",
    description:
      "Custom formulations developed for structural, thermal and environmental requirements across built applications.",
  },
  {
    id: "digital-fabrication",
    index: "04",
    title: "Digital fabrication workflows",
    description:
      "End-to-end toolchains from computational design to machine-ready deposition paths and quality validation.",
  },
  {
    id: "process-control",
    index: "05",
    title: "Process control & automation",
    description:
      "Closed-loop monitoring, sensor integration and adaptive parameters for stable, certifiable production.",
  },
] as const;

export const solutions = [
  {
    id: "architecture",
    index: "01",
    title: "Architecture & design",
    description:
      "Enable designers to move from digital models to full-scale built components with material-aware fabrication.",
  },
  {
    id: "construction",
    index: "02",
    title: "Construction & building",
    description:
      "On-site and off-site production systems that reduce lead times, waste and dependency on conventional supply chains.",
  },
  {
    id: "industry",
    index: "03",
    title: "Industrial production",
    description:
      "Automated deposition for tooling, fixtures and custom components across manufacturing environments.",
  },
  {
    id: "prototyping",
    index: "04",
    title: "Research & prototyping",
    description:
      "Flexible platforms for material testing, process development and rapid iteration at laboratory and pilot scale.",
  },
] as const;

export const applications = [
  {
    id: "facades",
    index: "01",
    title: "Facades & envelopes",
    description: "Large-scale printed cladding and structural skin systems.",
  },
  {
    id: "structures",
    index: "02",
    title: "Structural components",
    description: "Load-bearing elements and hybrid assemblies for built infrastructure.",
  },
  {
    id: "interiors",
    index: "03",
    title: "Interior elements",
    description: "Custom partitions, furniture and spatial components at architectural scale.",
  },
  {
    id: "infrastructure",
    index: "04",
    title: "Infrastructure",
    description: "Durable elements for civil, utility and industrial environments.",
  },
  {
    id: "tooling",
    index: "05",
    title: "Tooling & fixtures",
    description: "Rapid production of jigs, molds and industrial support systems.",
  },
  {
    id: "material-rd",
    index: "06",
    title: "Material R&D",
    description: "Pilot lines for formulation testing and process qualification.",
  },
] as const;
