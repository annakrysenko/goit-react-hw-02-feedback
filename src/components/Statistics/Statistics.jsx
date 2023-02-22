import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <p className={styles.item}>Good:</p>
        <span className={styles.span}></span>
        <p>{good}</p>
      </div>
      <div className={styles.wrap}>
        <p className={styles.item}>Neutral</p>
        <span className={styles.span}></span>
        <p>{neutral}</p>
      </div>
      <div className={styles.wrap}>
        <p className={styles.item}>Bad</p>
        <span className={styles.span}></span>
        <p>{bad}</p>
      </div>
      <div className={styles.wrap}>
        <p className={styles.item}>Total</p>
        <span className={styles.span}></span>
        <p>{total}</p>
      </div>
      <div className={styles.wrap}>
        <p className={styles.item}>Positive feedback:</p>
        <p>{positivePercentage}%</p>
      </div>
    </div>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
