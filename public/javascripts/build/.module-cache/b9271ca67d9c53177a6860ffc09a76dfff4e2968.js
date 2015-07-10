
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
          //current initial state is set here, you need to set this first before
          //calling this.setState. You can't change the state of something
          //that hasn't been set.
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
    getInitialState: function() {

        divColor: 'red'

    },


    mouseOver: function() {
        this.setState({
            divColor: 'blue'
        });
    },

    render: function () {
        guests = guests.map(function(guest, key){
            return React.createElement("li", {key: key}, guest);

        var divStyle = {
            backgroundColor: this.state.divColor
        }

        });

        return React.createElement("div", {style: divStyle}, React.createElement("ul", {onMouseOver: this.mouseOver}, guests));
    }
});

// React.render(<GuestList/>, document.body);
