var constants = require('./constants.js');
var trialSequence = [];
var validTrialSequence = [];
var queuedTargets = [];
var fullTestSequence = [];


function fullTestSequenceGenerator(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetSequence, targetPositions) {
   generateTrialSequence(targetSequence);
   queueTargetSequences(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetSequence);
   generateFullTestSequence(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetPositions);
   return fullTestSequence;
}


function generateTrialSequence(targetSequence) { // generate
   do {
      trialSequence = [];
      validTrialSequence = [];
      for (var x = 0; x < constants.base; x++) { // Populate trialSequence with 82 random 0-9 digits
         var digit = Math.floor(Math.random() * constants.numRange + 1);
         trialSequence.push(digit);
         if ((trialSequence[x] === targetSequence[0][2]) && (trialSequence[x - 1] === targetSequence[0][1]) && (trialSequence[x - 2] === targetSequence[0][0])) { // ONLY WORKS FOR 3 DIGITS IN TARGET
            console.debug("TrialSequence was not valid for seq#1 and had to be cleared!");
            console.log("Invalid trialSequence = " + trialSequence);
            trialSequence = [];
         }
         else if ((trialSequence[x] === targetSequence[1][2]) && (trialSequence[x - 1] === targetSequence[1][1]) && (trialSequence[x - 2] === targetSequence[1][0])) { // ONLY WORKS FOR 3 DIGITS IN TARGET
            console.debug("TrialSequence was not valid for seq#2 and had to be cleared!");
            console.log("Invalid trialSequence = " + trialSequence);
            trialSequence = [];
         }
         else if ((trialSequence[x] === targetSequence[2][2]) && (trialSequence[x - 1] === targetSequence[2][1]) && (trialSequence[x - 2] === targetSequence[2][0])) { // ONLY WORKS FOR 3 DIGITS IN TARGET
            console.debug("TrialSequence was not valid for seq#3 and had to be cleared!");
            console.log("Invalid trialSequence = " + trialSequence);
            trialSequence = [];
         }
         else {
            validTrialSequence.push(trialSequence[x]);
            console.debug("TrialSequence is valid!");
         }
      }
   }
   while (validTrialSequence.length !== constants.base); //verify

   console.log("validTrialSequence is " + validTrialSequence.length + "positions long: " + validTrialSequence);
   return validTrialSequence;
}


function queueTargetSequences(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetSequence) {
   queuedTargets = [];
   var temp = [];
   for (var n = 0; n < (numberOfTargets); n++) {
      for (var i = 0; i < (numberOfTargetTrials * targetTrialLength); i += targetTrialLength) {
   		temp.splice((i), 0, targetSequence[n]);
      }
   }

   for (var a = 0; a < temp.length; a++) { // push temp values into a 1D fullTestSequence array
      queuedTargets = queuedTargets.concat(temp[a]);
	}

   console.log("queuedTargets is " + queuedTargets.length + " positions long: " + queuedTargets);
   return queuedTargets;
}


function generateFullTestSequence(numberOfTargets, numberOfTargetTrials, targetTrialLength, targetPositions) {
   var temp = [];
   var goTrials = [];
	// temp = validTrialSequence.slice(); // What does this do?
   // for (var n = 0; n < numberOfTargets; n++) {
	// for (var x = 0; x < (numberOfTargets * numberOfTargetTrials); x++) {
   //    var pos = targetPositions[x];
	// 	temp.splice((pos), 0, queuedTargets[targetTrialLength * x], queuedTargets[targetTrialLength * x + 1], queuedTargets[targetTrialLength * x + 2]);
	// }
   // }
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
                  goTrial = queuedTargets.shift();
            		temp.push(goTrial);
                  break;
               case 2:
                  var go;
                  go = temp.length;
                  goTrials.push(go);
                  goTrial = queuedTargets.shift();
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
