import styles from './AdminNovel.module.scss';
import useSWR from 'swr';
import moment from 'moment';
import { fetcher } from '@/hooks/use-axios-fetcher';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PublicStatus } from '@/constants/publicStatus';

export default function AdminNovel() {
  const { data: apis } = useSWR(
    // ['https://6z511o13q8.execute-api.ap-northeast-1.amazonaws.com/dev/api/search/novel?select=id,title', { select: 'id, title' }],
    // ['https://6z511o13q8.execute-api.ap-northeast-1.amazonaws.com/dev/api/search/novel', 'id, title'],
    ['http://localhost:3001/dev/api/search/admin/novel', 'id, title'],
    fetcher
  );
  return (
    <section className={styles.root}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <h2>投稿作品一覧</h2>
          <div className={styles.articleWrapper}>
            {apis &&
              apis.data.map(novel => {
                const contentsLength = novel.contents.length || 0;
                const updatedAt = moment(novel.updated_at).format('YYYY-MM-DD hh:mm');
                const publicStatus = PublicStatus.filter(_item => _item['id'] === novel['public_status']);
                return (
                  <article className={styles.article}>
                    <div className={styles.articleInner}>
                      <p className={styles.articleTitle}>{novel.title}</p>
                      <div className={styles.articleActions}>
                        <button>
                          <MdKeyboardArrowDown />
                        </button>
                      </div>
                    </div>
                    <footer className={styles.sub}>
                      <span className={styles.subStatus}>{publicStatus.length && publicStatus[0]['name']}</span>
                      <span>{contentsLength}文字</span>
                      <span>{updatedAt}</span>
                    </footer>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
