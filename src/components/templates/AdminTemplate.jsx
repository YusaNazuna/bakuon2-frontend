import styles from './AdminTemplate.module.scss';

function AdminTemplate({ children, ...props }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.tag}>BAKUMATSU STORY 管理画面</div>
        <h3 className={styles.displayTitle}>{props.title}</h3>
      </header>
      <div className={styles.contents}>{children}</div>
    </div>
  );
}

export default AdminTemplate;
