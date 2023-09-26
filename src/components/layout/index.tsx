import Footer from './Footer';
import Header from './Header';

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
