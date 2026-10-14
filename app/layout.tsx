import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Iamtec.cloud — Infraestructura en la nube, servidores y agentes IA',
  description:
    'Infraestructura cloud, servidores de alta capacidad, correo corporativo, páginas web, agentes de inteligencia artificial y consultoría IT. Tecnología poderosa, explicada simple.',
  metadataBase: new URL('https://iamtec.cloud'),
  openGraph: {
    title: 'Iamtec.cloud — Potencia sin complejidades',
    description: 'Infraestructura en la nube, servidores y agentes IA para tu empresa.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
