import React, {Component} from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import {Section} from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
    

  handleFeedback = e => {
    this.setState((prevState) => ({
      [e]: prevState[e] + 1
    }));
  };

  countTotalFeedback = () => {
      const {good, neutral, bad,} = this.state;
      let total = good + neutral + bad;
      return total;
  };

  countPositiveFeedbackPercentage = () => {
      const {good} = this.state;
      let totalFeedback = this.countTotalFeedback();
      if (!totalFeedback) {
          return 0;
      }
      return Math.round(good / totalFeedback * 100);
  };

  render() {
      const {good, neutral, bad,} = this.state;
        return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}
          >
        <Section title='Please leave feedback'>
            <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.handleFeedback} 
            />
        </Section>
        <Section title="Statistics">
            {this.countTotalFeedback() !== 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
          </div>
        );
  }
}
