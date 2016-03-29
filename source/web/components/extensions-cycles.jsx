var store = require('../store');
var actions = require('../actions');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var cyclesList = [];
		for (var i = 0; i < this.state.cycles.length; i++) {
			cyclesList.push(
				<Item id={this.state.cycles[i]}/>
			);
		}
		return (
			<div className="container">
				<br/>
				<ul className="list-group">
					{cyclesList}
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
				{this.props.id} <a href={'#/cycle/' + this.props.id} className="btn btn-default"><i className="glyphicon glyphicon-eye-open"/> View Cycle</a>
			</li>
		);
	}
});

module.exports = Component;
