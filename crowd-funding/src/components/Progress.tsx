import React from "react";
import "../styles/progress.scss";

const Progress = () => {
  let currentProgress = {
    goal: 100000,
    currentFund: 89914,
    numberOfBackers: 5007,
    daysLeft: 56,
  };
  return (
    <div className="progress">
      <div className="progress-info">
        <div className="progress__funds">
          <div className="progress__funds--current">
            ${currentProgress.currentFund.toLocaleString()}
          </div>
          <div className="progress__funds--goal">
            of ${currentProgress.goal.toLocaleString()} backed
          </div>
        </div>
        <hr />
        <div className="progress__backers">
          <div className="progress__backers--number">
            {currentProgress.numberOfBackers.toLocaleString()}
          </div>
          <div className="progress__backers--label">total backers</div>
        </div>
        <hr />
        <div className="progress__days">
          <div className="progress__days--number">
            {currentProgress.daysLeft}
          </div>
          <div className="progress__days--label">days left</div>
        </div>
      </div>
      <div className="progress__bar-container">
        <div
          className="progress__bar"
          style={{
            width: calculatePercentage(
              currentProgress.currentFund,
              currentProgress.goal
            ),
          }}
        ></div>
      </div>
    </div>
  );
};

function calculatePercentage(a: number, b: number): string {
  return Math.floor((a / b) * 100) + "%";
}

export default Progress;
