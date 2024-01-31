import Header from './Header';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="max-w-screen-md px-5 py-20 m-auto">{children}</main>
    </>
  );
};

export default Layout;
