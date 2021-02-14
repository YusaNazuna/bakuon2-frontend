import { signIn } from 'next-auth/client';
import styles from './TwitterLoginButton.module.scss';
import { FaTwitter } from 'react-icons/fa';

function TwitterLoginButton() {
  return (
    <button className={styles.root} onClick={() => signIn('twitter')}>
      <span className={styles.icon}>
        <FaTwitter />
      </span>
      <span>ツイッターでログインする</span>
    </button>
  );
}

export default TwitterLoginButton;
