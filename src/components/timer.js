// var React = require('react');
// var moment = require('moment');
// var connect = require('react-redux').connect;
// var actions = require('./actions');
//
// var clock = '';
// var depth = 0;
//
// var Timer = React.createClass({
//     onEndGame: function() {
//         this.props.dispatch(actions.timerStop());
//         this.props.dispatch(actions.fetchAddScore(this.props.state.username, this.props.state.id, this.props.state.score));
//         // this.props.dispatch(actions.showAfterContainer());
//     },
//
//     updateTimer: function() {
//
//     },
//
//     timer: function() {
//       depth += 1;
//       console.log("INCREASING DEPTH TO: ", depth);
//       var startTime = moment();
//       var timer = setInterval(function() {
//         var currentTime = moment();
//         var difference = currentTime.diff(startTime)
//         clock = Math.round(difference/1000);
//         if (difference >= 1000) {
//             console.log(clock);
//         }
//       }, 1000);
//       var that = this;
//       var timeout = setTimeout(function () {
//         clearInterval(timer);
//         that.onEndGame();
//         console.log("DECREASING DEPTH FROM: ", depth);
//         depth -= 1;
//       }, 20000 );
//     },
//
//     render: function() {
//         if (this.props.state.timer === true && depth === 0) {
//           this.timer();
//         }
//         return (
//             <p>{clock}</p>
//         );
//     }
// });
//
// var mapStateToProps = function(state, props) {
//     return {
//         state: state
//     };
// };
//
// var Container = connect(mapStateToProps)(Timer);
// module.exports = Container;
