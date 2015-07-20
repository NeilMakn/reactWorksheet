console.log('I want to do my todo');


var TodoItem = React.createClass({
    render: function() {
        var todos = this.props.todoItem.map(function(item,key){
            return <p key={key}>
            {item}<input id="checkbox1" type="checkbox"></input>
            </p>;
        });

        return <div>
        {todos}
        </div>;
    }
});


var App = React.createClass({

  getInitialState: function(){
      return {
          item: [],
          checkbox: false
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

  completeTodo: function() {
      this.setState{{
          ch
      }}
  }


  render: function(){

    return <div className="listView">
      <TodoItem todoItem={this.state.item}}/>
      <input type="text" ref="input" onKeyDown={this.keyHandler} placeholder="I need to..."></input>
      <button className="button" onClick={this.addNote} >Add</button>
    </div>;

  }
});

React.render(<App/>,document.body);
