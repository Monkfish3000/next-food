import { getMeal } from '../../../../lib/meals';
import Image from 'next/image';

import styles from './page.module.css';
import { notFound } from 'next/navigation';

interface MealDetailsParams {
  params: {
    slug: string;
  };
}

export default async function MealDetails({ params }: MealDetailsParams) {
  const meal = await getMeal(params.slug);

  if (!meal) notFound();

  let { image, title, creator, creator_email, summary, instructions } = meal;

  const imgUrl = `https://monkfish-next-food-bucker.s3.eu-central-1.amazonaws.com/${image}`;

  instructions = instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={imgUrl} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      ;
      <main className={styles.main}>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}
