var store = require('../../store');
var actions = require('../../actions');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var chatwheelList = [];
		for (var i = 0; i < this.state.chatwheels.length; i++) {
			chatwheelList.push(
				<Item id={this.state.chatwheels[i]}/>
			);
		}
		return (
			<div className="container">
				<br/>
				<ul className="list-group">
					{chatwheelList}
				</ul>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Item = React.createClass({
	render: function () {
		return (
			<li className="list-group-item">
				{this.props.id} <a href={'#/chatwheel/' + this.props.id} className="btn btn-default"><i className="glyphicon glyphicon-eye-open"/> View Chatwheel</a>
			</li>
		);
	}
});

module.exports = Component;
