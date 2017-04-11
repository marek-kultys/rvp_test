import React from 'react';


var Result = function statelessFunctionComponentClass(props) {
   return (
      <div className="unit">
         <p className="name underline">{props.testFinished ? "Your results:" : null}</p>
         <h5 id="results1">{props.testFinished ? "Number of correct hits: " + props.correctHits.length : null}</h5>
         <h6 id="results1list">{props.testFinished ? props.correctHits.join(", ") : null}</h6>
         <h5 id="results2">{props.testFinished ? "Number of incorrect hits: " + props.inCorrectHits.length : null}</h5>
         <h6 id="results2list">{props.testFinished ? props.inCorrectHits.join(", ") : null}</h6>
         <h5 id="results3">{props.testFinished ? "Number of missed hits: " + props.missedHits.length : null}</h5>
         <h6 id="results3list">{props.testFinished ? props.missedHits.join(", ") : null}</h6>
      </div>
   );
};


module.exports = Result;