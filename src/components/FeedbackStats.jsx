import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const average = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h1>Average ratings: {isNaN(average) ? 0 : average}</h1>
    </div>
  );
}

export default FeedbackStats;
