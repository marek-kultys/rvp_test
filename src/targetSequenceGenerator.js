var constants = require('./constants.js');
var targetSequence = {};
var temp = [];
var count = {};


function targetSequenceGenerator(numberOfGenerations) { // generator
   targetSequence = {};

   for (var n = 0; n < numberOfGenerations; n++) {
      do {
         temp = [];
         count = {};
      	for (var x = 0; x < constants.seqLength; x++) {
      		var digit = Math.floor(Math.random() * constants.numRange); // generate random digits
      		temp.push(digit);
      	}

         temp.forEach(targetSequenceValidator); // count unique values in the array
         targetSequence[n] = temp;
      }
      while (Object.keys(count).length === 1); // validator
   }

   console.debug("TargetSequences are valid!");
   console.log(targetSequence);
   for (var a = 0; a < constants.targetSets; a++) {
      console.log("targetSequence[" + a + "] = " + targetSequence[a]);
   };
   return targetSequence;
}

function targetSequenceValidator(i) {
   count[i] = (count[i]||0)+1;
}


module.exports = targetSequenceGenerator;