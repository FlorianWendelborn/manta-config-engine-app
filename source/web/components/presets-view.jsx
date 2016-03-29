var store = require('../store');
var actions = require('../actions');

var react = require('react');
var ReactMarkdown = require('react-markdown');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var preset = JSON.stringify(this.state.preset, null, 4);
		return (
			<div className="container">
				<br/>
				<textarea className="form-control" readOnly rows="25">{preset}</textarea>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
