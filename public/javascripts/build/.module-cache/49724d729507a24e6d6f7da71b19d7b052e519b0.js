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
