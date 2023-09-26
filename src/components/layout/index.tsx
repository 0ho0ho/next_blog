import Footer from './footer';
import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="max-w-5xl px-5 m-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
