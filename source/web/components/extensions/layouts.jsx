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
		var layoutsList = [];
		for (var i = 0; i < this.state.layouts.length; i++) {
			layoutsList.push(
				<Item id={this.state.layouts[i]}/>
			);
		}
		return (
			<div className="container">
				<br/>
				<ul className="list-group">
					{layoutsList}
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
				{this.props.id} <a className="btn btn-default"><i className="glyphicon glyphicon-eye-open"/> Soon</a>
			</li>
		);
	}
});

module.exports = Component;
