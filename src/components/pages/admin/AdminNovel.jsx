import styles from './AdminNovel.module.scss';
import { AiFillTag, AiFillCalendar } from 'react-icons/ai';
import { HiPencilAlt } from 'react-icons/hi';

export default function AdminNovel() {
  return (
    <section className={styles.root}>
      <div className={styles.novelListOuter}>
        <h2>投稿作品一覧</h2>
        <div className={styles.novelListInner}>
          <ul>
            <li className={styles.novel}>
              <div className={styles.menuList}>
                <button>
                  <HiPencilAlt />
                  <span className={styles.iconText}>編集</span>
                </button>
              </div>
              <div className={styles.novelInfo}>
                <h3 className={styles.title}>幻想世界の案内人</h3>
                <p className={styles.summary}>
                  逢間紬は現代における世界の案内人。彼の元に現れるのは異界の曲者で、逢間の役目は彼らを『正しく』導くこと。「ぼくはこの世界が穏やかでないことを知っている。だからせめてぼくだけは、穏やかであろうと思っているんだ」。
                </p>
                <div className={styles.subInfo}>
                  <span className={styles.tags}>
                    <AiFillTag />
                    <span>キリザキ、奈優、腐向け、捏造、ラジオ</span>
                  </span>
                  <span className={styles.date}>
                    <AiFillCalendar />
                    <span>2021年02月25日 02:49更新</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
