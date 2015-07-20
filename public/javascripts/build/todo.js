console.log('I want to do my todo');


var TodoItem = React.createClass({displayName: "TodoItem",
    render: function() {
        var todos = this.props.todoItem.map(function(item,key){
            return React.createElement("p", {key: key}, 
            item, React.createElement("input", {id: "checkbox1", type: "checkbox"})
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
      };
  },

  addNote: function(event){
    var items = this.state.item;

    console.log('event added action ' + event);
    var newItem = React.findDOMNode(this.refs.input);
    newItem.value.length > 0 ? items.push(newItem.value) : console.error("empty todo add");

    this.setState({
        item: items,
    }, function(){
        newItem.value = "";
        newItem.focus();
    });

  },

  keyHandler: function(event) {
      if (event.key === "Enter") {
        this.addNote();
      }
  },


  render: function(){

    return React.createElement("div", {className: "listView"}, 
      React.createElement(TodoItem, {todoItem: this.state.item}), 
      React.createElement("input", {type: "text", ref: "input", onKeyDown: this.keyHandler, placeholder: "I need to..."}), 
      React.createElement("button", {className: "button", onClick: this.addNote}, "Add")
    );

  }
});

React.render(React.createElement(App, null),document.body);
