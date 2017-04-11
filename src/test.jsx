import React from 'react';


var Test = function statelessFunctionComponentClass(props) {
   return (
      <div className="unit">
         <p className="name">Current number in sequence:</p>
         <div className="display grey-background">
            <button className={props.testFinished ? null : props.testLaunched ? "button-trigger" : null} onClick={props.onClick}>
               <h1 id="digit">{props.testFinished ? "End" : props.testLaunched ? props.fullTestSequence : "Start"}</h1>
            </button>
         </div>
      </div>
   );
};


module.exports = Test;