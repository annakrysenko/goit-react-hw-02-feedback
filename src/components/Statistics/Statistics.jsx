import { Component } from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistic extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrap}>
          <p className={styles.item}>Good:</p>
          <span className={styles.span}></span>
          <p>{this.props.good}</p>
        </div>
        <div className={styles.wrap}>
          <p className={styles.item}>Neutral</p>
          <span className={styles.span}></span>
          <p>{this.props.neutral}</p>
        </div>
        <div className={styles.wrap}>
          <p className={styles.item}>Bad</p>
          <span className={styles.span}></span>
          <p>{this.props.bad}</p>
        </div>
        <div className={styles.wrap}>
          <p className={styles.item}>Total</p>
          <span className={styles.span}></span>
          <p>{this.props.total}</p>
        </div>
        <div className={styles.wrap}>
          <p className={styles.item}>Positive feedback:</p>
          {/* <span className={styles.span}></span> */}
          <p>{this.props.positivePercentage}%</p>
        </div>
      </div>
    );
  }
}
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
