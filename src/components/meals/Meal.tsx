import Link from 'next/link';
import Image from 'next/image';

import styles from './meal.module.css';

interface MealProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

const Meal = ({ title, slug, image, summary, creator }: MealProps) => {
  console.log(image);

  const imgUrl = `https://monkfish-next-food-bucker.s3.eu-central-1.amazonaws.com/${image}`;

  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={imgUrl} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View More</Link>
        </div>
      </div>
    </article>
  );
};

export default Meal;
