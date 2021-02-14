import styles from './NoLogin.module.scss';
import TwitterLoginButton from '@/components/atoms/TwitterLoginButton';

function NoLogin({ children }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.root}>
        <div className={styles.inner}>
          <div className={styles.title}>BAKUMATSU STORY</div>
          <p className={styles.description}>ゲーム実況者「幕末志士」の会員による、会員のための創作投稿、交流サイトです。</p>
          <div className={styles.login}>
            <TwitterLoginButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default NoLogin;
