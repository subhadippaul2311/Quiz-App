import React, { Fragment } from 'react';
import result from './Quiz.module.css';

function QuizResult(props) {
  return (
    <Fragment>
      <div className={result.result}>
        <h1> Result </h1>
      </div>
      <div className={result.show_score}>
        Your Score:{props.score}
        <br />
        Total Score:{props.totalScore}
      </div>
      {props.score >= 12 ? (
        <h2 className={result.greet}>Hurray! You passed the test.</h2>
      ) : (
        <Fragment>
          <h2 className={result.greet}>Better luck for next time!!</h2>
        </Fragment>
      )}
      <button className={result.next_button} onClick={props.tryAgain}>
        Try Again
      </button>
    </Fragment>
  );
}

export default QuizResult;
