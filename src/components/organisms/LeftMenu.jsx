import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import { AiFillHome, AiFillEdit } from 'react-icons/ai';
import { MdSettings } from 'react-icons/md';
import { LeftMenuFrontLists, LeftMenuAdminLists } from '@/constants/leftMenu';
import styles from './LeftMenu.module.scss';

export default function LeftMenu() {
  const [session, loading] = useSession();

  return (
    <nav className={styles.root}>
      <div className={styles.logo} style={{ backgroundImage: `url(${session.user.image})` }}>
        <span className={styles.logoText}>
          BAKUMATSU
          <br />
          STORY
        </span>
        <ul className={styles.logoMenu}>
          <li>
            <Link href="/admin/dashboard">
              <button>
                <MdSettings />
              </button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <button>
                <AiFillHome />
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.frontMenu}>
        <h4>Main Menu</h4>
        <div className={styles.frontMenuInner}>
          <ul>
            {LeftMenuFrontLists.map(item => (
              <Link href={item.url} key={item.id}>
                <li>
                  <div
                    className={styles.frontImageArea}
                    style={{ backgroundColor: item.backgroundColor, backgroundImage: `url(${item.backgroundImageUrl})` }}
                  ></div>
                  <div className={styles.frontText}>
                    <p>{item.title}</p>
                    <p>{item.message}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.adminMenu}>
        <h4>Admin Menu</h4>
        <ul>
          {LeftMenuAdminLists.map(item => (
            <Link href={item.url} key={item.id}>
              <li>
                <AiFillEdit />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <a
        href={`/api/auth/signout`}
        className={styles.logout}
        onClick={e => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign out
      </a>
      <footer className={styles.footer}>
        <p>© 2021 BAKUMATSU STORY</p>
        <p>Created Tsuki.</p>
      </footer>
    </nav>
  );
}
