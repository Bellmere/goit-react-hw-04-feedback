import css from '../Feedback/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.feedBack__container}>
            <ul className={css.feedBackList}>
                {options.map((option, index) => (
                    <li className={css.feedBackItem} key={index}>
                    <button 
                        className={css.feedBackBtn}
                        onClick={() => onLeaveFeedback(option)}
                        >
                            {option}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  };