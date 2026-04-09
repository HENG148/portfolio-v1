export const GridLogo = () => (
  <svg width={28} height={28} viewBox="0 0 28 28" fill="none" aria-hidden>
    {([
      [1,  1,  false],
      [17, 1,  false],
      [1,  17, true ],
      [17, 17, false],
    ] as [number, number, boolean][]).map(([x, y, filled]) => (
      <rect
        key={`${x} - ${y}`}
        x={x} y={y} width={10} height={10}
        stroke="currentColor" strokeWidth="1.5"
        fill={filled ? "currentColor" : "none"}
        fillOpacity={filled ? 0.2 : undefined}
      />
    ))}
  </svg>
)