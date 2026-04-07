
import type {Metadata} from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import { JsonLd } from '@/components/seo/JsonLd';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  style: ['normal', 'italic'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dra. Vanessa Diniz | Geriatria e Longevidade Premium em Belo Horizonte',
  description: 'Médica Geriatra e de Cuidados Paliativos em BH (Prado). Focada em envelhecimento ativo, autonomia e dignidade. Consultas domiciliares e em consultório.',
  keywords: ['Geriatra BH', 'Belo Horizonte', 'Médica de idoso BH', 'Alzheimer BH', 'Parkinson BH', 'Cuidado Paliativo BH', 'Envelhecimento saudável', 'Instituto Hiraki', 'Prado'],
  authors: [{ name: 'Dra. Vanessa Diniz' }],
  creator: 'Dra. Vanessa Diniz',
  publisher: 'Dra. Vanessa Diniz',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Dra. Vanessa Diniz | Geriatria e Longevidade em Belo Horizonte',
    description: 'Cuidado geriátrico especializado para uma vida ativa e com autonomia. Conheça a abordagem da Dra. Vanessa Diniz.',
    url: 'https://dravanessadiniz.com.br', // Adaptado se necessário
    siteName: 'Dra. Vanessa Diniz Geriatria',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Vanessa Diniz | Geriatria Premium em BH',
    description: 'Especialista em saúde do idoso, demências e cuidados paliativos.',
  },
  alternates: {
    canonical: '/',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${cormorant.variable} ${montserrat.variable}`}>
      <head>
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        <JsonLd />
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-NP63PDRW" />
    </html>
  );
}
