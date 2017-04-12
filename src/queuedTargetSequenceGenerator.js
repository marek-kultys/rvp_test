var queuedTargetSequence = [];


function queuedTargetSequenceGenerator(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetSequence) {
   queuedTargetSequence = [];
   var temp = [];
   for (var n = 0; n < (numberOfTargets); n++) {
      for (var i = 0; i < (numberOfTargetTrials * targetTrialLength); i += targetTrialLength) {
   		temp.splice((i), 0, targetSequence[n]);
      }
   }

   for (var a = 0; a < temp.length; a++) { // push temp values into a 1D fullTestSequence array
      queuedTargetSequence = queuedTargetSequence.concat(temp[a]);
	}

   console.log("queuedTargetSequence is " + queuedTargetSequence.length + " positions long: " + queuedTargetSequence);
   return queuedTargetSequence;
}


module.exports = queuedTargetSequenceGenerator;
