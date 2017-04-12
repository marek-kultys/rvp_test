var numRange = 9
var trials = 100;
var seqPerMin = 5;
var seqLength = 3;
var targetSets = 3;
var pace = (100 * 100) / (trials); //change 1000 to 100 to speed up the test x10
var delay = 0.1 * pace;
var base = trials - targetSets * (seqPerMin * seqLength);

module.exports = {
   numRange: numRange,
   seqPerMin: seqPerMin,
   trials: trials,
   seqLength: seqLength,
   targetSets: targetSets,
   pace: pace,
   delay: delay,
   base: base,
}
