var correctHits = [];
var inCorrectHits = [];
var missedHits = [];

function fullTestSequenceGenerator(listOfGoTrials, allUserHits) {
   findCorrectHits(listOfGoTrials, allUserHits);
   findIncorrectHits(listOfGoTrials, allUserHits);
   findMissedHits(listOfGoTrials, allUserHits);
   return {
      correctHits: correctHits,
      inCorrectHits: inCorrectHits,
      missedHits: missedHits
   };
}

function findCorrectHits(listOfGoTrials, allUserHits) { // Calculate correct and incorrect hits
   for (var a = 0; a < allUserHits.length; a++) {
      var hit = allUserHits[a];
      if (listOfGoTrials.indexOf(hit) !== -1) {
         correctHits.push(hit);
      }
   }
   return correctHits;
}

function findIncorrectHits(listOfGoTrials, allUserHits) { // Calculate correct and incorrect hits
   for (var b = 0; b < allUserHits.length; b++) {
      var badHit = allUserHits[b];
      if (listOfGoTrials.indexOf(badHit) === -1) {
         inCorrectHits.push(badHit);
      }
   }
   return inCorrectHits;
}

function findMissedHits(listOfGoTrials, allUserHits) { // Calculate missed hits
   for (var c = 0; c < listOfGoTrials.length; c++) {
      var miss = listOfGoTrials[c];
      if (allUserHits.indexOf(miss) === -1) {
         missedHits.push(miss);
      }
   }
   return missedHits;
}


module.exports = fullTestSequenceGenerator;