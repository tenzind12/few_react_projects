import PropTypes from 'prop-types';
function FeedbackStats({ feedback }) {
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

FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
