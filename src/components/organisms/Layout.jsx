import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
