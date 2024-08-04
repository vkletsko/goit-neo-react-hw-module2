import { useState, useEffect } from 'react';

import { Description, Options, Feedback, Notification } from '@components';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('saved-feedback');
    if (!savedFeedback) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }

    return JSON.parse(savedFeedback);
  });

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.bad + feedback.neutral + feedback.good;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <main>
      <Description />
      <Options
        options={feedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          options={feedback}
          totalPoints={totalFeedback}
          positivePoints={positiveFeedback}
        />
      )}
    </main>
  );
};
export default App;