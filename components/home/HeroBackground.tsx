export function HeroBackground() {
  return (
    <div className="hero-ambient pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-ambient-base absolute inset-0" />
      <div className="hero-ambient-gradient absolute inset-0" />
      <div className="hero-ambient-grid absolute inset-0" />
      <div className="hero-ambient-mesh absolute inset-0" />
      <div className="hero-ambient-lines absolute inset-0" />
      <div className="hero-ambient-glow absolute inset-0" />
      <ul className="hero-ambient-particles absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </ul>
    </div>
  );
}
