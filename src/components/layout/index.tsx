import Footer from './Footer';
import Header from './Header';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="max-w-3xl px-5 m-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
