import Layout from '@components/layout';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import '@styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://oungo.github.io'),
  title: {
    template: '%s - oungo',
    default: 'oungo',
  },
  description: '개발을 즐기는 프론트엔드 개발자입니다. 아무 글이나 끄적이고 있습니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    title: 'oungo',
    description: '개발을 즐기는 프론트엔드 개발자입니다. 아무 글이나 끄적이고 있습니다.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'oungo',
    description: '개발을 즐기는 프론트엔드 개발자입니다. 아무 글이나 끄적이고 있습니다.',
    images: {
      url: '/og-image.svg',
    },
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
