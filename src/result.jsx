import React from 'react';


var Result = function statelessFunctionComponentClass(props) {
   return (
      <div className="unit">
         <p className="name underline">{props.testFinished ? "Your results:" : null}</p>
         <div className="display">
            <h5 id="results1">{props.testFinished ? "Correct hits: " + props.correctHits.length : null}</h5>
            <h6 id="results1list">{props.testFinished ? "Positions: " + props.correctHits.join(", ") : null}</h6>
            <h5 id="results2">{props.testFinished ? "Incorrect hits: " + props.inCorrectHits.length : null}</h5>
            <h6 id="results2list">{props.testFinished ? "Positions: " + props.inCorrectHits.join(", ") : null}</h6>
            <h5 id="results3">{props.testFinished ? "Missed hits: " + props.missedHits.length : null}</h5>
            <h6 id="results3list">{props.testFinished ? "Positions: " + props.missedHits.join(", ") : null}</h6>
         </div>
      </div>
   );
};


module.exports = Result;