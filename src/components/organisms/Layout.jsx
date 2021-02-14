import Header from '@/components/organisms/Header';
import LeftMenu from '@/components/organisms/LeftMenu';
import Footer from '@/components/organisms/Footer';
import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <div className={styles.root}>
        <section className={styles.content}>
          <LeftMenu />
          <main>{children}</main>
        </section>
      </div>
    </>
  );
}

export default Layout;
