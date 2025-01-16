// at the very end, check all parts of code with VERIFY tag

import React from 'react';
import ReactDOM from 'react-dom';
import 'rvp.css';
var Target = require('target.jsx');
var Test = require('test.jsx');
var Result = require('result.jsx');
var constants = require('constants.js');
var targetSequenceGenerator = require('targetSequenceGenerator.js');
var targetPositionsGenerator = require('targetPositionsGenerator.js');
var validTrialSequenceGenerator = require('validTrialSequenceGenerator.js');
var queuedTargetSequenceGenerator = require('queuedTargetSequenceGenerator.js');
var fullTestSequenceGenerator = require('fullTestSequenceGenerator.js');
var listOfGoTrialsGenerator = require('listOfGoTrialsGenerator.js');
var fullTestResultsGenerator = require('fullTestResultsGenerator.js');
var allUserHits = [];
var correctHits = [];
var inCorrectHits = [];
var missedHits = [];


var TestContainer = React.createClass({
   getInitialState: function() { // set initial state
      return {
         testLaunched: false,
         testFinished: false,
         position: 0,
         goTrial: false,
         userHits: [],
      }
   },

   componentWillMount: function() {
      this.targetSequence = targetSequenceGenerator(constants.targetSets);

      this.targetPositions = targetPositionsGenerator(constants.targetSets, constants.seqPerMin);

      this.validTrialSequence = validTrialSequenceGenerator(this.targetSequence);

      this.queuedTargetSequence = queuedTargetSequenceGenerator(constants.targetSets, constants.seqPerMin, constants.seqLength, this.targetSequence);

      this.fullTestSequence = fullTestSequenceGenerator(constants.targetSets, constants.seqPerMin, constants.seqLength, this.targetPositions, this.validTrialSequence, this.queuedTargetSequence);

      this.listOfGoTrials = listOfGoTrialsGenerator(constants.targetSets, constants.seqPerMin, this.targetPositions);
   },

   toggleTest: function() {
      if (this.state.position === 0) {
         this.setState({ // toggle testLaunched state
            testLaunched: true,
         });
      }
      this.buttonActive();
   },

   buttonActive: function() {
      if (this.state.testLaunched === false && this.state.testFinished === false && this.state.position === 0) {
         this.positionInterval = setInterval(() => this.runFullTestSequence(), constants.pace); // if test not running, start test
         console.debug("Test Launched");
      }
      else {
         if (this.state.userHits.indexOf(this.state.position) === -1) { //prevent duplicate entries
            this.setState({
               userHits: this.state.userHits.concat([this.state.position]), // add current position to userHits
            });
         }
      }
   },

   runFullTestSequence: function() {
      this.setState({ // increment position state
         position: this.state.position + 1,
      });
      this.checkIfGoTrial();
      disappearSequenceDigit(); // disappear the trial
      this.positionFadeOut = setTimeout(() => showSequenceDigit(), constants.delay); // and then wait for delay until showing it again
      if (this.state.position >= constants.trials) { // limit the position of displayed position in a sequence and reset counter once limit reached
         this.concludeTestSequence();
         clearInterval(this.positionInterval);
         this.setState({
            testFinished: true,
         });
      }
   },

   checkIfGoTrial: function() {
      if (this.listOfGoTrials.indexOf(this.state.position) >= 0) {
         this.setState({
            goTrial: true,
         });
      }
      else {
         this.setState({
            goTrial: false,
         });
      }
   },

   concludeTestSequence: function() {
      allUserHits = this.state.userHits;
      console.debug("allUserHits = " + allUserHits);
      this.fullTestResults = fullTestResultsGenerator(this.listOfGoTrials, allUserHits);
      correctHits = this.fullTestResults.correctHits;
      inCorrectHits = this.fullTestResults.inCorrectHits;
      missedHits = this.fullTestResults.missedHits;
      console.log("correctHits = " + correctHits);
      console.log("inCorrectHits = " + inCorrectHits);
      console.log("missedHits = " + missedHits);
   },

   render: function() {
      return (
         <div className="app">
            <Target targetSequence1={this.targetSequence[0].join(" — ")} targetSequence2={this.targetSequence[1].join(" — ")} targetSequence3={this.targetSequence[2].join(" — ")} />
            <Test onClick={this.toggleTest} testLaunched={this.state.testLaunched} testFinished={this.state.testFinished} fullTestSequence={this.fullTestSequence[this.state.position]} />
            <Result testFinished={this.state.testFinished} correctHits={correctHits} inCorrectHits={inCorrectHits} missedHits={missedHits} />
         </div>
      )
   }
});


function disappearSequenceDigit() { // change opacity of digit to 0.1
   document.getElementById("digit").className = "pulse0";
}

function showSequenceDigit() { // change opacity of digit to 1
   document.getElementById("digit").className = "pulse1";
}


ReactDOM.render(<TestContainer />, document.getElementById('root'));
