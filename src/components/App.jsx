import { Component } from 'react';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';
import { Section } from './Section/Section';
import Notification from './Notification/Notification';
import styles from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const name = event.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percent;
  };

  render() {
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
