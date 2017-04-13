var constants = require('./constants.js');
var fullTestSequence = [];


function fullTestSequenceGenerator(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetPositions, validTrialSequence, queuedTargetSequence) {
   var temp = [];
   var goTrials = [];

   for (var n = 0; n < (constants.trials - numberOfTargets * numberOfTargetTrials * (targetTrialLength - 1)); n++) {
      if (targetPositions.indexOf(n) === -1) {
         // console.log("Normal Trial");
         var trial;
         trial = validTrialSequence.shift();
   		temp.push(trial);
         // console.log(temp);
      }
      else {
         // console.log("Go Trial");
         for (var t = 0; t < targetTrialLength; t++) {
            var goTrial;
            switch (t) {
               default:
                  goTrial = queuedTargetSequence.shift();
            		temp.push(goTrial);
                  break;
               case 2:
                  var go;
                  go = temp.length;
                  goTrials.push(go);
                  goTrial = queuedTargetSequence.shift();
                  temp.push(goTrial);
                  break;
            }
         }
         // console.log(temp);
      }
   }
   console.log("goTrials = " + goTrials);
	for (var i = 0; i < temp.length; i++) { // push temp values into a 1D fullTestSequence array
      fullTestSequence = fullTestSequence.concat(temp[i]);
	}

   console.log("fullTestSequence is " + fullTestSequence.length + " positions long: " + fullTestSequence);
   return fullTestSequence;
}


module.exports = fullTestSequenceGenerator;
