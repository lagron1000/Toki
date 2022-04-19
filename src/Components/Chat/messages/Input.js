var createReactClass = require('create-react-class');
var newInput = createReactClass({getInitialState:function() {return{message: 'hello'};},
handleChange: function(event) {this.setState({message: event.target.value});},
render: function() {var message = this.state.message;
return <input type = "text" value ={message} onChange = {this.handleChange} />;}});