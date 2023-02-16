import { Component } from 'react';

export class FeedbackOption extends Component {
  render() {
    return (
      <>
        <button type="button" name="good" onClick={this.props.onLeaveFeedback}>
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.props.onLeaveFeedback}>
          Bad
        </button>
      </>
    );
  }
}
