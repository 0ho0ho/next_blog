import Script from 'next/script';

import Layout from '@components/layout';
import * as gtag from '@lib/gtag';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import '@styles/index.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
};

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

export default RootLayout;
