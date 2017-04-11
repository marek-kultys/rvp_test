// import React from 'react';
// import './rvp.css';
//
// var arrayA = [7, 9, 7, 2, 2, 9, 6, 4, 2, 2];
// var arrayC = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//
// var CurrentNumber = React.createClass({
//     getInitialState: function() {
//         return {
//             DisplayedNumber: ''
//         };
//     },
//
//     updateNumber: function(NewNumber){
//         this.setState({
//             DisplayedNumber: NewNumber
//         });
//     },
//
//     render: function() {
//         return (
//             <h1>DisplayedNumber: 1</h1>
//         );
//     }
// });
//
//
// class RVPall extends React.Component {
//    render() {
//       return (
//          <div>
//             <h3>This is your current number:</h3>
//             <h1>{props.number}</h1>
//          </div>
//          // <div className="wrapper">
//          //    <RVPlink />
//          //    <RVPapp />
//          // </div>
//       );
//    }
// }
//
// function nextNumber() {
//    ReactDOM.render(
//       <Target number = 1 />
//    document.getElementById('root')
//    )
//
// }
//
//
//
// class RVPlink extends React.Component {
//    render() {
//       return (
//          <div className="container">
//             <div className="heading">
//                <h2><a href="http://www.cambridgecognition.com/academic/cantabsuite/attention-tests" target="_blank">Rapid Visual Information Processing (RVP) test</a></h2>
//             </div>
//          </div>
//       );
//    }
// }
//
// class RVPapp extends React.Component {
//    render() {
//       return (
//          <div className="container">
//             <AssessmentOutput />
//             <RVPtest />
//          </div>
//       );
//    }
// }
//
// class AssessmentOutput extends React.Component {
//    render() {
//       return (
//          <div className="assessment">
//             <AssessmentDisplay />
//             <AssessmentButton />
//          </div>
//       );
//    }
// }
//
// class RVPtest extends React.Component {
//    render() {
//       return (
//          <div className="tester">
//             <h6>This is testing output</h6>
//          </div>
//       );
//    }
// }
//
// class AssessmentDisplay extends React.Component {
//    render() {
//       return (
//          <div>
//             <AssessmentSequence />
//             <AssessmentTargets />
//          </div>
//       );
//    }
// }
//
// class AssessmentButton extends React.Component {
//    render() {
//       return (
//          <button className="start">
//             <h2>Start Assessment</h2>
//          </button>
//       );
//    }
// }
//
// class AssessmentSequence extends React.Component {
//    render() {
//       return (
//          <div className="sequence">
//             <CurrentNumber />
//          </div>
//       );
//    }
// }
//
// class AssessmentTargets extends React.Component {
//    render() {
//       return (
//          <div className="targets">
//             <Triplet set={arrayC[0][0] + " — " + arrayC[0][1] + " — " + arrayC[0][2]}/>
//             <Triplet set={arrayC[1][0] + " — " + arrayC[1][1] + " — " + arrayC[1][2]}/>
//             <Triplet set={arrayC[2][0] + " — " + arrayC[2][1] + " — " + arrayC[2][2]}/>
//          </div>
//       );
//    }
// }
//
// class DisplaySequence extends React.Component {
//    render() {
//       return (
//          <h1>{CurrentNumber}</h1>
//       );
//    }
// }
// 
// function Triplet(props) {
//    return (
//       <p>{props.set}</p>
//    );
// }
//
// function startCounting(props) {
//    CurrentNumber = arrayA[0];
//    return (
//       <CurrentNumber />
//    );
// }
//
//
//
//
// export default RVPall;