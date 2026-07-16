export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#12142b" />
      <path d="M10 12h20v5H23v13h-6V17h-7z" fill="#3d5bfd" />
      <circle cx="26.5" cy="27.5" r="3" fill="#22d3ee" />
    </svg>
  )
}

export function Avatar({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#12142b" />
      <text
        x="27"
        y="41"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="24"
        fill="#6b82ff"
      >
        TY
      </text>
      <circle cx="47" cy="45" r="4" fill="#22d3ee" />
    </svg>
  )
}

export default function Logo({ size = 32, withText = true }) {
  return (
    <div className="logo-lockup">
      <LogoMark size={size} />
      {withText && (
        <span className="logo-text">
          TYESS<small>GROUP</small>
        </span>
      )}
    </div>
  )
}
