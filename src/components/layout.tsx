import Footer from './footer';
import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
