// console.log("props.js loaded");
//
// var Paragraphs = React.createClass({
//     render: function() {
//         var paragraphs = this.props.text.map(function(paragraph, index){
//             return <p key={index}>
//               {paragraph}
//               </p>;
//         });
//
//         return <div>
//         {paragraphs}
//         </div>;
//     }
// });
//
// var paragraphs = ["hello", "my friend", "these are paragaphs"];
//
//
// React.render(
//
//     <Paragraphs text={paragraphs}/>,
//     document.body
// );


//above we see that props can be passed and set for each componenet.
//can use props to set states of components.
//example below we are constructing an adding app.

// var Paragraphs = React.createClass({
//     render: function(){
//       //below is important. setting props.text to recv information
//       var paragraphs = this.props.text.map(function(paragraph, index){
//           return <p key={index}>
//             {paragraph}
//           </p>;
//       });
//
//       return <div>
//       {paragraphs}
//       </div>
//     }
// });
//
// var App = React.createClass({
//     getInitialState: function(){
//         return {
//             paragraphs: ['a paragraph', 'another paragraph', 'and another']
//         };
//     },
//
//     clickHandler: function(){
//         var paragraphs = this.state.paragraphs;
//         console.log(paragraphs);
//         paragraphs.push(paragraphs.length + 1);
//         this.setState({
//             paragraphs: paragraphs
//         });
//
//     },
//
//     render: function (){
//
//       //click handler will change app state, and thus update <Paragraph/> below
//       return <div onClick={this.clickHandler}>
//       <Paragraphs text={this.state.paragraphs} />
//       </div>;
//   //sending current state of of App componenet to paragraph in text={this.state.paragraphs}.
//     }
//
// });
//
// React.render(<App/>, document.body);
