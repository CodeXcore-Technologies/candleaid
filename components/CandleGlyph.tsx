export default function CandleGlyph({ size = 32, glow = false }: { size?: number; glow?: boolean }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 32 48"
      fill="none"
      style={{ filter: glow ? 'drop-shadow(0 0 8px #FF8C42)' : 'none' }}
    >
      <rect x="11" y="24" width="10" height="20" rx="1" fill="#C4A882" />
      <rect x="12" y="25" width="2" height="18" rx="1" fill="rgba(255,255,255,0.25)" />
      <path d="M16 24 Q17 20 16 18" stroke="#5C3D25" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 18 C16 18 12 14 13 10 C13.5 7 15 5 16 2 C17 5 19 7 19 10 C20 14 16 18 16 18Z" fill={`url(#flameGrad-${size})`} />
      {glow && <ellipse cx="16" cy="12" rx="8" ry="10" fill="#FF8C42" fillOpacity="0.12" />}
      <defs>
        <linearGradient id={`flameGrad-${size}`} x1="16" y1="2" x2="16" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD166" />
          <stop offset="0.5" stopColor="#FF8C42" />
          <stop offset="1" stopColor="#C1502E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
