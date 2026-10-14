const METRICS = [
  { value: '99.99', unit: '%', label: 'Uptime garantizado', detail: 'SLA respaldado por contrato', color: 'text-matrix' },
  { value: '<15', unit: 'ms', label: 'Latencia promedio', detail: 'Red troncal optimizada', color: 'text-cyan' },
  { value: '10', unit: 'Gbps', label: 'Red dedicada', detail: 'Ancho de banda por nodo', color: 'text-[#5C8DFF]' },
  { value: '24/7', unit: '', label: 'Soporte experto', detail: 'Humanos y agentes IA', color: 'text-plasma' },
]

export function MetricsSection() {
  return (
    <section
      id="rendimiento"
      aria-labelledby="rendimiento-title"
      className="relative scroll-mt-28 overflow-hidden border-y border-cyan/15 bg-black py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-60"
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-cyan">Diferenciadores</p>
            <h2 id="rendimiento-title" className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
              Rendimiento que se mide, no que se promete
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted">
            Monitoreamos cada nodo en tiempo real para que tu operación nunca se detenga.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col bg-black p-8 transition-colors hover:bg-surface/60">
              <dt className="order-2 mt-4">
                <span className="block font-display text-lg font-semibold text-foreground">{m.label}</span>
                <span className="mt-1 block text-sm text-muted">{m.detail}</span>
              </dt>
              <dd className={`order-1 font-display text-6xl font-bold leading-none tracking-tighter md:text-7xl ${m.color}`}>
                {m.value}
                {m.unit && <span className="ml-1 text-2xl font-medium text-foreground/70 md:text-3xl">{m.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
