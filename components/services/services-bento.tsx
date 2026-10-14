import type { CSSProperties, ReactNode } from 'react'
import { Bot, Cloud, Globe, Mail, Server, Compass, CheckCircle2, ShieldCheck, Gauge, Workflow } from 'lucide-react'
import { IamtecIsotipo } from '@/components/iamtec-isotipo'
import { cn } from '@/lib/utils'

const GLOW = {
  cyan: '#00F0FF',
  blue: '#0044FF',
  green: '#00FF66',
  orange: '#FF5E00',
} as const

function BentoCard({
  glow,
  className,
  children,
}: {
  glow: keyof typeof GLOW
  className?: string
  children: ReactNode
}) {
  return (
    <article
      tabIndex={0}
      style={{ '--glow': GLOW[glow] } as CSSProperties}
      className={cn(
        'glow-card group relative flex flex-col overflow-hidden rounded-2xl p-6 outline-none md:p-7',
        className,
      )}
    >
      {children}
    </article>
  )
}

function CardHeading({ icon, title, tag, accent }: { icon: ReactNode; title: string; tag?: string; accent: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={cn('inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5', accent)}>
          {icon}
        </span>
        <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">{title}</h3>
      </div>
      {tag && <span className="text-[11px] uppercase tracking-[0.2em] text-muted">{tag}</span>}
    </div>
  )
}

const AI_LOGS = [
  '[agente] Ticket #4821 clasificado → soporte',
  '[agente] Respuesta enviada en 1.2s',
  '[agente] Lead calificado y agendado',
  '[agente] Reporte semanal generado',
]

export function ServicesBento() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-cyan">Servicios</p>
          <h2 id="servicios-title" className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
            Un panel de mando para toda tu operación digital
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            Desde la nube hasta los agentes de IA: cada servicio está diseñado para conectarse con los demás y
            escalar contigo, sin complejidad técnica.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Cloud */}
          <BentoCard glow="cyan" className="md:col-span-2 lg:row-span-2">
            <CardHeading icon={<Cloud className="size-5" aria-hidden />} title="Cloud" tag="Infraestructura" accent="text-cyan" />
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Instancias escalables bajo demanda, redes privadas y respaldos automáticos. Tu infraestructura
              crece al ritmo de tu negocio.
            </p>
            <div className="my-8 flex flex-1 items-center justify-center">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.2),transparent_65%)] blur-xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-60"
                />
                <IamtecIsotipo className="size-40 transition-transform duration-500 group-hover:scale-105 md:size-48" />
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
              <Stat label="Instancias" value="115/120" />
              <Stat label="Throughput" value="4.2 TB/s" />
              <Stat label="Pipeline" value="OK" valueClass="text-matrix" />
            </dl>
          </BentoCard>

          {/* Agentes IA */}
          <BentoCard glow="orange" className="md:col-span-2">
            <CardHeading icon={<Bot className="size-5" aria-hidden />} title="Agentes IA" tag="Automatización" accent="text-plasma" />
            <p className="mt-4 leading-relaxed text-muted">
              Agentes inteligentes que atienden clientes, califican leads y automatizan procesos 24/7.
            </p>
            <ul className="mt-5 space-y-1.5 rounded-xl border border-white/5 bg-black/30 p-4 font-mono text-xs" aria-label="Actividad reciente de agentes">
              {AI_LOGS.map((line) => (
                <li key={line} className="truncate text-plasma/90">
                  {line}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Servidores */}
          <BentoCard glow="blue">
            <CardHeading icon={<Server className="size-5" aria-hidden />} title="Servidores" accent="text-[#5C8DFF]" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Hardware de alta capacidad con NVMe y monitoreo continuo.
            </p>
            <div className="mt-auto pt-6">
              <div className="flex justify-between text-xs text-muted">
                <span>Carga promedio</span>
                <span className="font-display text-foreground">42%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[42%] rounded-full bg-[#2F6BFF] shadow-[0_0_10px_#0044FF]" />
              </div>
            </div>
          </BentoCard>

          {/* Correo */}
          <BentoCard glow="cyan">
            <CardHeading icon={<Mail className="size-5" aria-hidden />} title="Correo" accent="text-cyan" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Correo con tu dominio, antispam avanzado y cifrado de extremo a extremo.
            </p>
            <p className="mt-auto flex items-center gap-2 pt-6 text-xs text-muted">
              <ShieldCheck className="size-4 text-matrix" aria-hidden />
              SPF · DKIM · DMARC activos
            </p>
          </BentoCard>

          {/* Páginas Web */}
          <BentoCard glow="blue" className="md:col-span-2">
            <CardHeading icon={<Globe className="size-5" aria-hidden />} title="Páginas Web" tag="Desarrollo" accent="text-[#5C8DFF]" />
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              Sitios rápidos, seguros y optimizados para buscadores, alojados en nuestra propia infraestructura.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              {[
                { icon: Gauge, text: 'Lighthouse 98' },
                { icon: ShieldCheck, text: 'SSL incluido' },
                { icon: Globe, text: 'CDN global' },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground">
                  <Icon className="size-3.5 text-cyan" aria-hidden />
                  {text}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Consultoría IT */}
          <BentoCard glow="green" className="md:col-span-2">
            <CardHeading icon={<Compass className="size-5" aria-hidden />} title="Consultoría IT" tag="Estrategia" accent="text-matrix" />
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              Auditorías, migraciones y arquitectura tecnológica con un equipo que habla tu idioma.
            </p>
            <ul className="mt-auto grid grid-cols-1 gap-2 pt-6 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, text: 'Auditoría' },
                { icon: Workflow, text: 'Migración' },
                { icon: Compass, text: 'Roadmap IT' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 rounded-lg border border-white/5 bg-matrix/5 px-3 py-2 text-sm text-foreground">
                  <Icon className="size-4 text-matrix" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.15em] text-muted">{label}</dt>
      <dd className={cn('mt-1 font-display text-lg font-semibold text-foreground', valueClass)}>{value}</dd>
    </div>
  )
}
