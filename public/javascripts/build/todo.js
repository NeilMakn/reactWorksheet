console.log('I want to do my todo');


var TodoItem = React.createClass({displayName: "TodoItem",
    render: function() {
        var todos = this.props.todoItem.map(function(item,key){
            return React.createElement("p", {key: key}, 
            item
            );
        });

        return React.createElement("div", null, 
        todos
        );
    }
});


var App = React.createClass({displayName: "App",

  getInitialState: function(){
      return {
          item: [],
          userInput: "Add a todo..."
      };
  },

  addNote: function(event){
    var items = this.state.item;
    console.log('event added action ' + event)
    var newItem = React.findDOMNode(this.refs.input);
    items.push(newItem.value);
    this.setState({
        item: items,
        userInput: ""
    });

  },


  render: function(){

    return React.createElement("div", {className: "listView"}, 
      React.createElement(TodoItem, {todoItem: this.state.item}), 
      React.createElement("input", {type: "text", ref: "input", placeholder: this.state.userInput}), 
      React.createElement("button", {onClick: this.addNote}, "Add")
    );

  }
});

React.render(React.createElement(App, null),document.body);
