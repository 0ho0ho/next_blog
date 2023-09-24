import Footer from './footer';
import Header from './header';

type Properties = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Properties) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
