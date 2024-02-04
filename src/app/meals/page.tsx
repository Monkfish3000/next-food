import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Monkfish themed recipes, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Browse the recipes, choose your favourites and cook away! Super easy!
          Super fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
