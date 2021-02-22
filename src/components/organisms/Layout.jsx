import LeftMenu from '@/components/organisms/LeftMenu';
import AdminLeftMenu from '@/components/organisms/AdminLeftMenu';
import styles from './Layout.module.scss';

function Layout({ children, ...props }) {
  const isAdmin = props.isAdmin;
  return (
    <>
      <div className={styles.root}>
        <section className={styles.content}>
          {isAdmin ? <AdminLeftMenu /> : <LeftMenu />}
          <main className={styles.main}>{children}</main>
        </section>
      </div>
    </>
  );
}

export default Layout;
