//
// //set stateVaribles for components to keep track of them.
// //this.setState add interactivity
// var Stateful = React.createClass({
//     getInitialState: function() {
//         return {
//             backcolor: '#0000FF'
//         };
//     },
//
//     clickHandler: function() {
//
//         this.setState({
//             backcolor: '#DD3131'
//
//         });
//     },
//
//     render:function () {
//         var divStyle = {
//           //current initial state is set here, you need to set this first before
//           //calling this.setState. You can't change the state of something
//           //that hasn't been set.
//             backgroundColor: this.state.backcolor,
//             color: '#FFFFFF'
//         };
//
//         return <div style={divStyle} onClick={this.clickHandler}>
//           my color was set by getInitialState, but now when you click,
//             setState function will change my state.
//           </div>;
//     }
// });
//
// // React.render(<Stateful/>, document.body);
// //testing events
//
// var Events = React.createClass({
//     clickHandler: function(){
//       console.log("clicked");
//     },
//
//     render: function() {
//         return <div onClick={this.clickHandler}>
//           div is rendered and assigned clickHandler
//           </div>;
//     }
//
// });
//
// // React.render(<Events/>, document.body);
//
// //mouseover
// var guests = ['sally', 'bob', 'jack'];
//
//
// var GuestList = React.createClass({
//     getInitialState: function() {
//       return {
//           divColor: 'red',
//           color: 'black',
//           height: 10
//       };
//
//     },
//
//
//     mouseOver: function() {
//         this.setState({
//             divColor: 'blue',
//         });
//     },
//
//     mouseOut: function(){
//         this.setState({
//             divColor: 'red'
//         });
//     },
//
//
//     onClick: function() {
//         this.setState({
//             color: 'white',
//             height: 34
//         });
//
//     },
//
//     render: function () {
//
//         // guests = guests.map(function(guest, key){
//         //     return <li key={key}>{guest}</li>;
//         // });
//
//         var divStyle = {
//             backgroundColor: this.state.divColor,
//             height: this.state.height,
//             color: this.state.color
//         };
//
//
//         return <div style={divStyle} onClick={this.onClick}>
//         <ul onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
//           <li>hi</li>
//         </ul>
//         </div>;
//     }
// });
//
//
//
// React.render(<GuestList/>, document.body);
