import { Mail, MapPin, Phone } from 'lucide-react'
import { IamtecIsotipo } from '@/components/iamtec-isotipo'

const SERVICES = ['Cloud', 'Servidores', 'Correo corporativo', 'Páginas web', 'Agentes IA', 'Consultoría IT']
const LEGAL = ['Términos de servicio', 'Política de privacidad', 'Acuerdo de nivel de servicio', 'Política de cookies']

export function SiteFooter() {
  return (
    <footer id="contacto" className="relative scroll-mt-28 overflow-hidden border-t border-white/10 pt-20">
      <IamtecIsotipo
        variant="cyan"
        glow={false}
        className="pointer-events-none absolute -bottom-24 -right-20 size-[28rem] opacity-[0.06] md:size-[36rem]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <IamtecIsotipo variant="cyan" className="size-10" />
            <span className="font-display text-xl font-bold tracking-wide">
              IAMTEC<span className="text-cyan">.CLOUD</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Tecnología poderosa, explicada simple. Infraestructura en la nube, servidores y agentes de
            inteligencia artificial para empresas que no se detienen.
          </p>
        </div>

        <FooterColumn title="Servicios" items={SERVICES} href="#servicios" />
        <FooterColumn title="Legal" items={LEGAL} href="#" />

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <a href="mailto:ventas@iamtec.cloud" className="flex items-center gap-2 transition-colors hover:text-cyan">
                <Mail className="size-4 text-cyan" aria-hidden />
                ventas@iamtec.cloud
              </a>
            </li>
            <li>
              <a href="tel:+10000000000" className="flex items-center gap-2 transition-colors hover:text-cyan">
                <Phone className="size-4 text-cyan" aria-hidden />
                +1 (000) 000-0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-cyan" aria-hidden />
              Latinoamérica · Operación global
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Iamtec.cloud. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="status-blink size-1.5 rounded-full bg-matrix" aria-hidden="true" />
            Todos los sistemas operativos
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items, href }: { title: string; items: string[]; href: string }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a href={href} className="text-muted transition-colors hover:text-cyan">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
