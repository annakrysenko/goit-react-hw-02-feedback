import { Component } from 'react';
import styles from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export class FeedbackOption extends Component {
  render() {
    return (
      <div className={styles.container}>
        <button
          type="button"
          name="good"
          onClick={this.props.onLeaveFeedback}
          className={`${styles.button} ${styles.good}`}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={this.props.onLeaveFeedback}
          className={`${styles.button} ${styles.neutral}`}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          onClick={this.props.onLeaveFeedback}
          className={`${styles.button} ${styles.bad}`}
        >
          Bad
        </button>
      </div>
    );
  }
}
FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
