import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dra. Luísa Mendes | Geriatria e Longevidade',
  description: 'Cuidado médico focado em longevidade e qualidade de vida. O privilégio de envelhecer com saúde, autonomia e propósito.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
