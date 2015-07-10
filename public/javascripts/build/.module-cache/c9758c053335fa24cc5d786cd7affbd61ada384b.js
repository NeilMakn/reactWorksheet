
//set stateVaribles for components to keep track of them.
var Stateful = React.createClass({displayName: "Stateful",
    getInitialState: function() {
        return {
            backcolor: '#0000FF'
        };
    },

    render:function () {
        var divStyle = {
            backgroundColor: this.state.backcolor,
            color: '#FFFFFF'
        };

        return React.createElement("div", {style: divStyle}, 
          "Hello, this is the color change"
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
            return React.createElement("li", {key: key, onClick: this.guestHighlight}, guest);
        });

        return React.createElement("div", {onClick: this.guestHighlight}, React.createElement("ul", null, guests));
    }
});

React.render(React.createElement(GuestList, null), document.body);
