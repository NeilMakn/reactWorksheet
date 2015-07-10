
//set stateVaribles for components to keep track of them.
//this.setState add interactivity
var Stateful = React.createClass({displayName: "Stateful",
    getInitialState: function() {
        return {
            backcolor: '#0000FF'
        };
    },

    clickHandler: function() {

        this.setState({
            backcolor: '#DD3131'

        });
    },

    render:function () {
        var divStyle = {
          //current initial state is set here
            backgroundColor: this.state.backcolor,
            color: '#FFFFFF'
        };

        return React.createElement("div", {style: divStyle, onClick: this.clickHandler}, 
          "my color was set by getInitialState, but now when you click," + ' ' +
            "setState function will change my state."
          );
    }
});

React.render(React.createElement(Stateful, null), document.body);
//testing events

var Events = React.createClass({displayName: "Events",
    clickHandler: function(){
      console.log("clicked");
    },

    render: function() {
        return React.createElement("div", {onClick: this.clickHandler}, 
          "div is rendered and assigned clickHandler"
          );
    }

});

// React.render(<Events/>, document.body);

//mouseover
var guests = ['sally', 'bob', 'jack'];


var GuestList = React.createClass({displayName: "GuestList",
    guestHighlight: function() {
        console.log('person highlighted');
    },

    render: function () {
        guests = guests.map(function(guest, key){
            return React.createElement("li", {key: key}, guest);
        });

        return React.createElement("div", null, React.createElement("ul", {onMouseOver: this.guestHighlight}, guests));
    }
});

// React.render(<GuestList/>, document.body);
