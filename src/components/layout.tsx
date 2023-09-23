import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Properties = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Properties) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
