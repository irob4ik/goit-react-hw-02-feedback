import React, { Component } from 'react';

import Statistics from './components/statistics/Statistics';
import Section from './components/section/Section';

import styles from './container.module.css';

class App extends Component {
  state = {
    good: 100,
    neutral: 10,
    bad: 0
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = ((good / (good + neutral + bad))*100).toFixed(0) + "%";
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          
        </Section>

        <Section title="Statistics">
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={percentage}
          />   
        </Section>
      </div>
    );
  }
}
export default App;
