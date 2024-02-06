import { Suspense } from 'react';
import Link from 'next/link';

import styles from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '../../../lib/meals';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className="text-5xl mb-5">
          Delicious Monkfish themed recipes, created{' '}
          <span
            style={{ display: 'inline-block' }}
            className={styles.highlight}
          >
            by you
          </span>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
