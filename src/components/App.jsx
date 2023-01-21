import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import {Section} from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const handleFeedback = e => {
      const option = e.target.name;

      switch (option) {
        case 'good':
          setGood(state => state + 1);
          break;
        
        case 'bad':
          setBad(state => state + 1);
          break;

        case 'neutral':
          setNeutral(state => state + 1);
          break;
      
        default:
          alert(`No option called ${option}`);
          break;
      }

    }


    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
              let totalFeedback = countTotalFeedback();
              if (!totalFeedback) {
                  return 0;
              }
              return Math.round(good / totalFeedback * 100);
           };


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
                  options={['good', 'neutral', 'bad']} 
                  onLeaveFeedback={handleFeedback} 
                  />
              </Section>
              <Section title="Statistics">
                  {countTotalFeedback() !== 0 ? (
                    <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={countTotalFeedback()}
                      positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                  <Notification message="There is no feedback"/>
                )}
              </Section>
                </div>
              );
}
