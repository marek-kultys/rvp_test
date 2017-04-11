var constants = require('./constants.js');
var targetPositions = [];
// var allPositions = [];
var temp = [];
var count = {};


function targetPositionsGenerator(numberOfTargets, numberOfTargetTrials) { // generator
   do {
      targetPositions = [];
      // allPositions = [];
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

   // Break into separate sub-sets for each target sequence

   // for (var set = 0; set < numberOfTargets; set++) {
   //    targetPositions[set] = allPositions.slice(numberOfTargetTrials * set, numberOfTargetTrials * (set + 1));
   //    targetPositions[set].sort(function(a, b){return a - b}); // order positions in ascending order
   //    console.log("targetPositions[" + set + "] = " + targetPositions[set]);
   // }

   // Add full composite sequence to last item

   targetPositions.sort(function(a, b){return a - b}); // order positions in ascending order
   // targetPositions[numberOfTargets] = allPositions; // add all position as final element to targetPositions object

   console.log("targetPositions = " + targetPositions);

   return targetPositions;
}

function positionSequenceValidator(i) {
   count[i] = (count[i]||0)+1;
}


module.exports = targetPositionsGenerator;


// while (temp.indexOf(num) !== -1); //prevent duplicates