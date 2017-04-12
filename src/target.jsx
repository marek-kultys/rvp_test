import React from 'react';


var Target = function statelessFunctionComponentClass(props) {
   return (
      <div className="unit">
         <p className="name">Target sequences:</p>
         <div className="display grey-background targets">
            <h3>{props.targetSequence1}</h3>
            <h3>{props.targetSequence2}</h3>
            <h3>{props.targetSequence3}</h3>
         </div>
      </div>
   );
};


module.exports = Target;