import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/client';
import { HiSwitchHorizontal } from 'react-icons/hi';
import { IoLogOutOutline } from 'react-icons/io5';
import { LeftMenuAdminLists } from '@/constants/leftMenu';
import styles from './AdminLeftMenu.module.scss';

export default function AdminLeftMenu() {
  const [session, loading] = useSession();
  const router = useRouter();

  return (
    <nav className={styles.root}>
      <div className={styles.logo} style={{ backgroundImage: `url(${session.user.image})` }}>
        <ul className={styles.logoMenu}>
          <li>
            <Link href="/">
              <button>
                <HiSwitchHorizontal />
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.inner}>
        <div className={styles.menu}>
          <ul>
            {LeftMenuAdminLists.map(item => {
              const isCurrent = router.pathname.indexOf(item.id) !== -1;
              return (
                <Link href={item.url} key={item.id}>
                  <li className={`${isCurrent && styles.current}`}>
                    {item.icon}
                    <p className={`${styles.iconTitle}`}>{item.title}</p>
                  </li>
                </Link>
              );
            })}
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
          <IoLogOutOutline />
        </a>
      </div>
    </nav>
  );
}
