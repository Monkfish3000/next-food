import Meal from './Meal';
import styles from './mealsgrid.module.css';

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={id}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
