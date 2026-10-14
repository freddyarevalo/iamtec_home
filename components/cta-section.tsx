import { ArrowRight } from 'lucide-react'

const DEPLOY_STEPS = [
  { text: 'Provisionando servidor dedicado', status: 'OK' },
  { text: 'Configurando correo corporativo', status: 'OK' },
  { text: 'Desplegando sitio web', status: 'OK' },
  { text: 'Activando agente IA', status: 'LISTO' },
]

export function CtaSection() {
  return (
    <section id="contratar" aria-labelledby="cta-title" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-px translate-x-3 translate-y-3 rounded-[2rem] rounded-tr-[6rem] border border-matrix/30 md:translate-x-5 md:translate-y-5"
          />
          <div className="glass relative grid gap-10 overflow-hidden rounded-[2rem] rounded-tr-[6rem] border-cyan/30 p-8 shadow-[0_0_80px_-20px_rgba(0,240,255,0.45)] md:grid-cols-[1.3fr_1fr] md:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-cyan/20 blur-3xl"
            />
            <div className="relative">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-matrix">Comienza hoy</p>
              <h2 id="cta-title" className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Despliega tu infraestructura hoy
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted">
                Cuéntanos qué necesitas y nuestro equipo diseñará una solución a la medida: nube, servidores,
                correo, web y agentes IA en un solo lugar.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:ventas@iamtec.cloud"
                  className="cta-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-7 py-4 font-display font-semibold text-background transition-colors hover:bg-matrix"
                >
                  Contratar servicios
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 font-display font-medium text-foreground transition-colors hover:border-cyan/60 hover:text-cyan"
                >
                  Hablar con un experto
                </a>
              </div>
            </div>

            <div className="relative self-end rounded-2xl border border-white/10 bg-black/50 p-5 font-mono text-xs md:text-sm">
              <div className="mb-4 flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-plasma/80" />
                <span className="size-2.5 rounded-full bg-cyan/80" />
                <span className="size-2.5 rounded-full bg-matrix/80" />
              </div>
              <p className="text-muted">$ iamtec deploy --plan empresa</p>
              <ul className="mt-3 space-y-2">
                {DEPLOY_STEPS.map((step) => (
                  <li key={step.text} className="flex items-center justify-between gap-4">
                    <span className="text-foreground/85">{step.text}</span>
                    <span className="text-matrix">[{step.status}]</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-cyan">
                {'>'} Infraestructura en línea<span className="status-blink">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
