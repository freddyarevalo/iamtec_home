const CX = 720
const CY = 600

function roundedRect(w: number, h: number, r: number) {
  const x = CX - w / 2
  const y = CY - h / 2
  return [
    `M${x + r} ${y}`,
    `H${x + w - r}`,
    `A${r} ${r} 0 0 1 ${x + w} ${y + r}`,
    `V${y + h - r}`,
    `A${r} ${r} 0 0 1 ${x + w - r} ${y + h}`,
    `H${x + r}`,
    `A${r} ${r} 0 0 1 ${x} ${y + h - r}`,
    `V${y + r}`,
    `A${r} ${r} 0 0 1 ${x + r} ${y}`,
    'Z',
  ].join(' ')
}

function pill(x: number, y: number, w: number, h = 56) {
  const r = h / 2
  return `M${x + r} ${y} H${x + w - r} A${r} ${r} 0 0 1 ${x + w - r} ${y + h} H${x + r} A${r} ${r} 0 0 1 ${x + r} ${y} Z`
}

type CircuitPath = { d: string; opacity: number; pulses?: { color: string; dur: number; begin: number }[] }

const CYAN = '#00F0FF'
const GREEN = '#00FF66'
const ORANGE = '#FF5E00'
const BLUE = '#3D7BFF'

const PATHS: CircuitPath[] = [
  { d: roundedRect(760, 440, 110), opacity: 0.55, pulses: [{ color: CYAN, dur: 9, begin: 0 }] },
  {
    d: roundedRect(940, 560, 140),
    opacity: 0.42,
    pulses: [
      { color: GREEN, dur: 12, begin: 1.5 },
      { color: CYAN, dur: 12, begin: 7.5 },
    ],
  },
  { d: roundedRect(1120, 680, 170), opacity: 0.3, pulses: [{ color: ORANGE, dur: 16, begin: 3 }] },
  { d: roundedRect(1300, 800, 200), opacity: 0.2, pulses: [{ color: CYAN, dur: 20, begin: 5 }] },
  { d: pill(180, 200, 420), opacity: 0.18 },
  { d: pill(840, 200, 420), opacity: 0.18 },
  { d: pill(240, 300, 330), opacity: 0.14, pulses: [{ color: CYAN, dur: 7, begin: 2 }] },
  { d: pill(870, 300, 330), opacity: 0.14, pulses: [{ color: BLUE, dur: 7, begin: 4 }] },
  {
    d: 'M0 520 H110 Q140 520 140 550 V640 Q140 670 170 670 H250',
    opacity: 0.45,
    pulses: [{ color: CYAN, dur: 5, begin: 0.5 }],
  },
  {
    d: 'M1440 520 H1330 Q1300 520 1300 550 V640 Q1300 670 1270 670 H1190',
    opacity: 0.45,
    pulses: [{ color: GREEN, dur: 5, begin: 2.5 }],
  },
  {
    d: 'M720 1000 V900 Q720 870 690 870 H640 Q610 870 610 840 V820',
    opacity: 0.5,
    pulses: [{ color: CYAN, dur: 4, begin: 1 }],
  },
  {
    d: 'M560 1000 V940 Q560 910 530 910 H420 Q390 910 390 880 V860',
    opacity: 0.4,
    pulses: [{ color: ORANGE, dur: 5, begin: 2 }],
  },
  {
    d: 'M880 1000 V940 Q880 910 910 910 H1020 Q1050 910 1050 880 V860',
    opacity: 0.4,
    pulses: [{ color: BLUE, dur: 5, begin: 3 }],
  },
  { d: 'M0 260 H60 Q90 260 90 290 V420', opacity: 0.3, pulses: [{ color: CYAN, dur: 6, begin: 1 }] },
  { d: 'M1440 260 H1380 Q1350 260 1350 290 V420', opacity: 0.3 },
]

const NODES: [number, number][] = [
  [250, 670],
  [1190, 670],
  [610, 820],
  [390, 860],
  [1050, 860],
  [90, 420],
  [1350, 420],
  [CX - 380, CY],
  [CX + 380, CY],
  [CX - 650, CY],
  [CX + 650, CY],
]

export function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 1000"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#circuit-glow)" stroke={CYAN} strokeWidth="2" strokeLinecap="round">
        {PATHS.map((p, i) => (
          <path key={i} id={`circuit-${i}`} d={p.d} strokeOpacity={p.opacity} />
        ))}
        {NODES.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="9" strokeOpacity="0.55" fill="#0B0F19" />
        ))}
      </g>

      <g filter="url(#pulse-glow)" className="data-pulse">
        {PATHS.flatMap((p, i) =>
          (p.pulses ?? []).map((pulse, j) => (
            <circle key={`${i}-${j}`} r="3.5" fill={pulse.color}>
              <animateMotion dur={`${pulse.dur}s`} begin={`-${pulse.begin}s`} repeatCount="indefinite" rotate="auto">
                <mpath href={`#circuit-${i}`} />
              </animateMotion>
            </circle>
          )),
        )}
      </g>
    </svg>
  )
}
