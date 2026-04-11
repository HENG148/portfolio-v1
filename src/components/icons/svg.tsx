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

export default function GraduatedIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

export const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

export const SkeletonCard: React.FC = () => (
  <div className="flex gap-6 pb-12 animate-pulse">
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-neutral-700" />
      <div className="mt-2 w-px flex-1 bg-neutral-800" />
    </div>
    <div className="flex-1 space-y-3">
      <div className="h-4 w-1/3 rounded bg-neutral-800" />
      <div className="h-3 w-1/4 rounded bg-neutral-800" />
      <div className="h-3 w-full rounded bg-neutral-800" />
      <div className="h-3 w-5/6 rounded bg-neutral-800" />
    </div>
  </div>
)