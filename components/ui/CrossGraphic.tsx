type CrossGraphicProps = {
  className?: string;
  size?: number;
};

export function CrossGraphic({ className = "", size = 220 }: CrossGraphicProps) {
  const arm = size * 0.45;
  const stroke = size * 0.016;
  const hatch = size * 0.058;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x={0} y={arm} width={arm} height={hatch} fill="currentColor" />
      <rect x={size - arm} y={arm} width={arm} height={hatch} fill="currentColor" />
      <rect x={arm} y={0} width={hatch} height={arm} fill="currentColor" />
      <rect x={arm} y={size - arm} width={hatch} height={arm} fill="currentColor" />
      <polyline
        points={`0,${arm} ${arm},${arm} ${arm},0`}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={`${size},${arm} ${size - arm},${arm} ${size - arm},0`}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={`0,${size - arm} ${arm},${size - arm} ${arm},${size}`}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={`${size},${size - arm} ${size - arm},${size - arm} ${size - arm},${size}`}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.014}
        stroke="currentColor"
        strokeWidth={stroke * 1.5}
      />
    </svg>
  );
}
