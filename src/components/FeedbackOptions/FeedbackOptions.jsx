import styles from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export const FeedbackOption = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className={`${styles.button} ${styles.good}`}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className={`${styles.button} ${styles.neutral}`}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className={`${styles.button} ${styles.bad}`}
      >
        Bad
      </button>
    </div>
  );
};
FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
