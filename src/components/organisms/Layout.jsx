import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
