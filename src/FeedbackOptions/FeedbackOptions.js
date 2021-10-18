// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }){
  
    return (
      <ul className={`list ${s.feedbackList}`}>
        {options.map(option => (
          <li key={option}>
            <button
              className={s.button}
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

export default FeedbackOptions;
