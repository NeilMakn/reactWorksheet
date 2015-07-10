var InputBox = React.createClass({displayName: "InputBox",
    getInitialState: function() {
        return {
            text: "Type in here."
        };
    },

    updateText: function(evt) {
        this.setState({
            text: evt.currentTarget.value
        });
    },

    render: function () {
        return React.createElement("input", {type: "text", value: this.state.text, onChange: this.updateText});
    }


});

React.render(

    React.createElement(InputBox, null),
    document.body
);
