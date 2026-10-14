import { cn } from '@/lib/utils'

type Variant = 'color' | 'cyan'

const PALETTE: Record<Variant, Record<'top' | 'left' | 'right' | 'bottom' | 'cyan' | 'green' | 'orange' | 'red', string>> = {
  color: {
    top: '#00FF66',
    left: '#FF5E00',
    right: '#2F6BFF',
    bottom: '#5CC8FF',
    cyan: '#00F0FF',
    green: '#00FF66',
    orange: '#FF8A3D',
    red: '#FF3B5C',
  },
  cyan: {
    top: '#00F0FF',
    left: '#00F0FF',
    right: '#00F0FF',
    bottom: '#00F0FF',
    cyan: '#00F0FF',
    green: '#00F0FF',
    orange: '#00F0FF',
    red: '#00F0FF',
  },
}

const LEFT_DOTS = [58, 65, 72, 79]
const RIGHT_DOTS = [128, 135, 142]

function Bars({ y, color }: { y: number[]; color: string }) {
  return (
    <>
      {y.map((row) => (
        <g key={row}>
          <rect x="50" y={row} width="100" height="14" rx="7" stroke={color} />
          {LEFT_DOTS.map((cx) => (
            <circle key={`l${cx}`} cx={cx} cy={row + 7} r="2.2" fill={color} stroke="none" />
          ))}
          {RIGHT_DOTS.map((cx) => (
            <circle key={`r${cx}`} cx={cx} cy={row + 7} r="2.2" fill={color} stroke="none" />
          ))}
        </g>
      ))}
    </>
  )
}

export function IamtecIsotipo({
  variant = 'color',
  glow = true,
  className,
  title,
}: {
  variant?: Variant
  glow?: boolean
  className?: string
  title?: string
}) {
  const c = PALETTE[variant]
  return (
    <svg
      viewBox="20 12 160 176"
      fill="none"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(glow && 'drop-shadow-[0_0_6px_rgba(0,240,255,0.55)]', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {/* Capa superior: cómputo */}
      <path
        d="M40 52 a12 12 0 0 1 12 -12 H78 a22 22 0 0 1 44 0 H148 a12 12 0 0 1 12 12 v22 a12 12 0 0 1 -12 12 H52 a12 12 0 0 1 -12 -12 Z"
        stroke={c.top}
      />
      <Bars y={[46, 66]} color={c.top} />
      <circle cx="100" cy="30" r="5" stroke={c.orange} />
      <path d="M100 35 V88" stroke={c.top} />

      {/* Capa central: integración */}
      <path d="M100 88 H50 L37 100 L50 112 H100" stroke={c.left} />
      <path d="M100 88 H150 L163 100 L150 112 H100" stroke={c.right} />
      <path d="M50 100 H100" stroke={c.left} />
      <path d="M100 100 H150" stroke={c.right} />
      <circle cx="48" cy="100" r="4.5" stroke={c.cyan} fill="#0B0F19" />
      <path d="M64 92 L70 100 L64 108 L58 100 Z" stroke={c.left} fill="#0B0F19" />
      <circle cx="82" cy="100" r="4.5" stroke={c.green} fill="#0B0F19" />
      <circle cx="118" cy="100" r="4.5" stroke={c.orange} fill="#0B0F19" />
      <path d="M136 92 L142 100 L136 108 L130 100 Z" stroke={c.right} fill="#0B0F19" />
      <circle cx="152" cy="100" r="4.5" stroke={c.orange} fill="#0B0F19" />

      {/* Capa inferior: almacenamiento */}
      <path
        d="M40 126 a12 12 0 0 1 12 -12 H148 a12 12 0 0 1 12 12 v22 a12 12 0 0 1 -12 12 H122 a22 22 0 0 1 -44 0 H52 a12 12 0 0 1 -12 -12 Z"
        stroke={c.bottom}
      />
      <Bars y={[120, 140]} color={c.bottom} />
      <path d="M100 112 V165" stroke={c.bottom} />
      <circle cx="100" cy="170" r="5" stroke={c.red} />
    </svg>
  )
}
