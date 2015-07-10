
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


React.render(React.createElement(Events, null), document.body);
