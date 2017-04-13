var constants = require('./constants.js');
var targetPositions = [];
// var allPositions = [];
var temp = [];
var count = {};


function targetPositionsGenerator(numberOfTargets, numberOfTargetTrials) { // generator
   do {
      targetPositions = [];
      temp = [];
      count = {};
      for (var i = 0; i < (numberOfTargets * numberOfTargetTrials); i++) {
         var position = Math.floor(Math.random() * (constants.base + numberOfTargetTrials * numberOfTargets)); // generate random positions
         temp.push(position);
      }
      for (var y = 0; y < temp.length; y++) { // push temp values into 1D allPositions array
         targetPositions = targetPositions.concat(temp[y]);
      }
      targetPositions.forEach(positionSequenceValidator); // count unique values in the array
   }
   while (Object.keys(count).length !== numberOfTargets * numberOfTargetTrials); // validator

   console.debug("TargetPositions are valid!");

   targetPositions.sort(function(a, b){return a - b}); // order positions in ascending order

   console.log("targetPositions = " + targetPositions);

   return targetPositions;
}

function positionSequenceValidator(i) {
   count[i] = (count[i]||0)+1;
}


module.exports = targetPositionsGenerator;