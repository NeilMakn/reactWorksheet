var InputBox = React.createClass({
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
        return <input type="text" value={this.state.text} onChange={this.updateText}/>;
    }


});

React.render(

    <InputBox/>,
    document.body
);
