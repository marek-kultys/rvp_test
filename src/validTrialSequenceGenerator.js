var constants = require('./constants.js');
var trialSequence = [];
var validTrialSequence = [];


function validTrialSequenceGenerator(targetSequence) { // generate
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


module.exports = validTrialSequenceGenerator;
