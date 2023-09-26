import Layout from '@components/layout';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import '@styles/index.css';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
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
