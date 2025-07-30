import type { Metadata } from 'next';
import './globals.css';
import { PropsWithChildren } from 'react';
import { ThemeWrapper } from '~/components/theme-wrapper/ThemeWrapper';

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Meu projeto de Catálogo de peças',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
