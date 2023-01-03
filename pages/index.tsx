import styles from '../styles/Home.module.scss'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={`${styles.container__item} ${styles.container__item_workers}`} >
          <Link href='/workers' className={`${styles.container__btn} ${styles.container__btn_workers}`}>
            Find workers
          </Link>
        </div>
        <div className={`${styles.container__item} ${styles.container__item_jobs}`} >
          <Link href='/jobs' className={`${styles.container__btn} ${styles.container__btn_jobs}`}>
            Find jobs
          </Link>
        </div>
      </div>
    </div>
  )
}