import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero/hero-section'
import { ServicesBento } from '@/components/services/services-bento'
import { MetricsSection } from '@/components/metrics-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesBento />
        <MetricsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
