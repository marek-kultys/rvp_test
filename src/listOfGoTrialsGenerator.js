var constants = require('./constants.js');


function listOfGoTrialsGenerator(numberOfTargets, numberOfTargetTrials, targetPositions) {
   var listOfGoTrials = [];
   for (var q = 0; q < (numberOfTargets * numberOfTargetTrials); q++) {
      var position = targetPositions[q];
      position += (q + 1) * (constants.seqLength - 1);
      listOfGoTrials.push(position);
   }

   console.log("listOfGoTrials is " + listOfGoTrials);
   return listOfGoTrials;
}


module.exports = listOfGoTrialsGenerator;



//       position += (q + 1) * (constants.seqLength - 1);
