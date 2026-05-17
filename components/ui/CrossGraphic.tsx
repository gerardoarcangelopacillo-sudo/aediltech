import Image from "next/image";

/** Official Aediltech symbol — unmodified brand asset, black on light backgrounds. */
const SYMBOL_ASPECT = 656.74 / 655.3;

type CrossGraphicProps = {
  className?: string;
  width?: number;
  priority?: boolean;
};

export function CrossGraphic({
  className = "",
  width = 160,
  priority = false,
}: CrossGraphicProps) {
  const height = Math.round(width * SYMBOL_ASPECT);

  return (
    <Image
      src="/logo/aediltech-symbol.svg"
      alt=""
      width={width}
      height={height}
      className={className}
      aria-hidden
      priority={priority}
    />
  );
}
