import { Component } from 'react';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';
import { Section } from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
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
    this.setState(state => {
      return { total: state.good + state.neutral + state.bad };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return {
        percentage: Math.round((state.good / state.total) * 100),
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={
              (this.countPositiveFeedbackPercentage, this.countTotalFeedback)
            }
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.state.total > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.percentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
