// var InputBox = React.createClass({
//   getInitialState: function() {
//     return {
//       text: 'Type in here!'
//     };
//   },
//   updateText: function(evt) {
//     this.setState({
//       text: evt.currentTarget.value.replace('e',' ')
//     });
//   },
//
//   logMessage: function(){
//       console.log(this.state.text);
// 
//   },
//   render: function() {
//     return <div><input type='text' value={this.state.text} onChange={this.updateText} /><br/>
//     <button onClick={this.logMessage}>Change me bro</button></div>;
//   }
// });
//
// React.render(
//   <InputBox />,
//   document.body
// );
