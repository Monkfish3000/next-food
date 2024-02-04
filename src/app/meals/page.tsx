import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '../../../lib/meals';

export default async function Meals() {
  const meals = await getMeals();

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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
