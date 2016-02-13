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
	addItem: function () {
		actions.addCycleItem(this.props.id);
	},
	remove: function () {
		actions.showRemoveDialog('cycle', this.props.id, this.renderRemove());
	},
	render: function () {
		var commands = [];
		for (var i = 0; i < this.props.data.length; i++) {
			commands.push(
				<Command key={i} data={this.props.data[i]} id={i} cycle={this.props.id} action={true}/>
			);
		}
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Cycle {this.props.id + 1}</h3>
				</div>
				<table className="table table-bordered text-center">
					<thead>
						<th className="text-center">#</th>
						<th className="text-center">Command</th>
						<th className="text-center custom-collapsing">Actions</th>
					</thead>
					<tbody>
						{commands}
					</tbody>
				</table>
				<div className="panel-footer">
					<div className="row">
						<div className="col-lg-6">
							<button className="btn btn-success" onClick={this.addItem}><i className="glyphicon glyphicon-plus"/> Command</button>
						</div>
						<div className="col-lg-6 text-right" onClick={this.remove}>
							<button className="btn btn-danger"><i className="glyphicon glyphicon-trash"/> Cycle</button>
						</div>
					</div>
				</div>
			</div>
		);
	},
	renderRemove: function () {
		var commands = [];
		for (var i = 0; i < this.props.data.length; i++) {
			commands.push(
				<Command key={i} data={this.props.data[i]} id={i} cycle={this.props.id} action={false}/>
			);
		}
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Cycle {this.props.id + 1}</h3>
				</div>
				<table className="table table-bordered text-center">
					<thead>
						<th className="text-center">#</th>
						<th className="text-center">Command</th>
					</thead>
					<tbody>
						{commands}
					</tbody>
				</table>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Command = React.createClass({
	moveUp: function () {
		actions.moveCycleUp(this.props.cycle, this.props.id);
	},
	moveDown: function () {
		actions.moveCycleDown(this.props.cycle, this.props.id);
	},
	remove: function () {
		actions.removeCycleItem(this.props.cycle, this.props.id);
	},
	render: function () {
		var action;
		if (this.props.action) {
			action = (
				<td style={{width: '123px'}}>
					<div className="btn-toolbar pull-right">
						<div className="btn-group">
							<button className="btn btn-default btn-sm" onClick={this.moveUp}>
								<span className="glyphicon glyphicon-arrow-up"/>
							</button>
							<button className="btn btn-default btn-sm" onClick={this.moveDown}>
								<span className="glyphicon glyphicon-arrow-down"/>
							</button>
						</div>
						<div className="btn-group">
							<button className="btn btn-danger btn-sm" onClick={this.remove}>
								<span className="glyphicon glyphicon-remove"/>
							</button>
						</div>
					</div>
				</td>
			);
		} else {
			action = '';
		}
		return (
			<tr>
				<td>{this.props.id + 1}</td>
				<td>{window.commandInfo(this.props.data)[2]}</td>
				{action}
			</tr>
		);
	}
});

module.exports = Component;
