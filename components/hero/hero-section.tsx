import { ArrowRight } from 'lucide-react'
import { CircuitBackground } from '@/components/hero/circuit-background'
import { IamtecIsotipo } from '@/components/iamtec-isotipo'
import { cn } from '@/lib/utils'

const LAYER_LABELS = [
  { label: 'Cómputo', detail: 'Servidores', className: 'text-matrix', dot: 'bg-matrix' },
  { label: 'Red híbrida', detail: 'Fabric global', className: 'text-[#5C8DFF]', dot: 'bg-[#5C8DFF]' },
  { label: 'Data lake', detail: 'Almacenamiento', className: 'text-sky', dot: 'bg-sky' },
] as const

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-grid relative isolate overflow-hidden pb-24 pt-36 md:pt-44"
    >
      <CircuitBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(11,15,25,0.2)_0%,rgba(11,15,25,0.85)_70%,#0B0F19_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <p className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted">
          <span className="status-blink size-2 rounded-full bg-matrix shadow-[0_0_8px_#00FF66]" aria-hidden="true" />
          Todos los sistemas operativos
        </p>

        <h1
          id="hero-title"
          className="neon-text mx-auto mt-6 max-w-5xl text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Infraestructura en la Nube, <span className="text-cyan">Potencia sin Complejidades</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
          Servidores de alta capacidad, correo corporativo, páginas web y agentes de inteligencia artificial
          operando en un solo ecosistema. Tecnología poderosa, explicada simple.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contratar"
            className="cta-glow group inline-flex items-center gap-2 rounded-xl bg-cyan/10 px-7 py-4 font-display text-base font-semibold text-cyan transition-colors hover:text-matrix focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            Despliega tu infraestructura
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center rounded-xl border border-white/15 px-7 py-4 font-display text-base font-medium text-foreground transition-colors hover:border-cyan/60 hover:text-cyan"
          >
            Explorar servicios
          </a>
        </div>

        <div className="relative mx-auto mt-20 grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden flex-col items-end gap-8 text-right md:flex">
            <div className="glass rounded-xl px-4 py-3 text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Estado del sistema</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-matrix">99.99%</span>
                <span className="text-xs text-muted">uptime</span>
              </div>
              <div className="mt-2 h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-matrix shadow-[0_0_8px_#00FF66]" />
              </div>
            </div>
            <LayerLabel label="Agentes IA" detail="Integración inteligente" className="text-plasma" dot="bg-plasma" align="right" />
          </div>

          <div className="relative mx-auto">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.18),transparent_65%)] blur-2xl"
            />
            <IamtecIsotipo className="size-64 md:size-80" title="Isotipo de Iamtec: capas de cómputo, integración y almacenamiento" />
          </div>

          <div className="hidden flex-col items-start gap-8 text-left md:flex">
            {LAYER_LABELS.map((l) => (
              <LayerLabel key={l.label} label={l.label} detail={l.detail} className={l.className} dot={l.dot} align="left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LayerLabel({
  label,
  detail,
  className,
  dot,
  align,
}: {
  label: string
  detail: string
  className: string
  dot: string
  align: 'left' | 'right'
}) {
  return (
    <div className={cn('flex items-center gap-3', align === 'right' && 'flex-row-reverse')}>
      <span className="flex items-center" aria-hidden="true">
        {align === 'right' && <span className={cn('h-px w-10 opacity-60', dot)} />}
        <span className={cn('size-2 rounded-full', dot)} />
        {align === 'left' && <span className={cn('h-px w-10 opacity-60', dot)} />}
      </span>
      <div>
        <p className={cn('font-display text-lg font-semibold uppercase tracking-wide', className)}>{label}</p>
        <p className="text-xs text-muted">{detail}</p>
      </div>
    </div>
  )
}
