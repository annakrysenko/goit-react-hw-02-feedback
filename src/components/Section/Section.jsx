import { Component } from 'react';
import styles from './Section.module.css';

export class Section extends Component {
  render() {
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
