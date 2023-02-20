import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={styles.text}>{message}</p>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
