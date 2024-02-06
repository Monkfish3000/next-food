import { getMeal } from '../../../../lib/meals';
import Image from 'next/image';

import styles from './page.module.css';

export default function MealDetails({ params }) {
  const meal = getMeal(params.slug);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${'EMAIL'}`}>NAME</a>
          </p>
          <p className={styles.summary}>Summary</p>
        </div>
      </header>
      ;
      <main className={styles.main}>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: '...',
          }}
        ></p>
      </main>
    </>
  );
}
