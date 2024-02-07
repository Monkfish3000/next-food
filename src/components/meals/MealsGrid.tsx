import Meal from './Meal';
import styles from './mealsgrid.module.css';

// title, summary, instructions, creator, creator_email, image, slug

interface Meal {
  id: string;
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  image: string;
  slug: string;
}

interface MealsGridProps {
  meals: Meal[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
