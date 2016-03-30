var Keyboard = require('./keyboard.jsx');

var store = require('../store');
var actions = require('../actions');

var Controls = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	remove: function () {
		actions.showRemoveDialog('layout', this.state.currentLayout, this.renderRemove());
	},
	render: function () {
		var layouts = this.state.preset.layouts;
		var layoutElements = [];
		for (var i = 0; i < layouts.length; i++) {
			layoutElements.push(<LayoutButton i={i} key={i} currentLayout={this.state.currentLayout}/>);
		}
		return (
			<div className="btn-toolbar" role="toolbar">
				<div className="btn-group" role="group">
					{layoutElements}
				</div>
				<div className="btn-group" role="group">
					<button onClick={actions.addLayout} type="button" className="btn btn-success"><i className="glyphicon glyphicon-plus"/> Layout</button>
					<button onClick={this.remove} type="button" className="btn btn-danger"><i className="glyphicon glyphicon-trash"/> Layout {this.state.currentLayout + 1}</button>
					<a href="#/settings/engine" type="button" className="btn btn-default" style={{textShadow: 'none'}}><i className="glyphicon glyphicon-transfer"/> Change Keyboard Layout</a>
				</div>
			</div>
		);
	},
	renderRemove: function () {
		return (
			<div>
				Layout {this.state.currentLayout + 1}
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var LayoutButton = React.createClass({
	clickHandler: function () {
		actions.changeLayout(this.props.i);
	},
	render: function () {
		var className = this.props.currentLayout === this.props.i ? ' active' : '';
		return (
			<button key={this.props.i} onClick={this.clickHandler} type="button" className={"btn btn-warning" + className}>Layout {(this.props.i + 1)}</button>
		);
	}
});

var Legend = React.createClass({
	render: function () {
		var legend = [
			['layout', 'duplicate', 'Layout'],
			['other', 'question-sign', 'Other'],
			['ability', 'font', 'Ability'],
			['item', 'italic', 'Item'],
			['communication', 'comment', 'Communication'],
			['unavailable', 'remove', 'Not Available'],
			['none', 'unchecked', 'None Set'],
			['command', 'console', 'Command'],
			['cycle', 'repeat', 'Cycle'],
			['basic', 'th-large', 'Basic'],
			['camera', 'camera', 'Camera'],
			['select', 'indent-left', 'Select'],
			['open', 'resize-full', 'Open']
		];

		var items = [];

		var index = 0;
		legend.forEach(function (data) {
			items.push(
				<LegendItem key={index++} name={data[0]} icon={data[1]} description={data[2]} />
			);
		});

		return (
			<div className="col-sm-8 legend">
				<h2>Color Legend</h2>
				<div className="row">
					{items}
				</div>
			</div>
		);
	}
});

var LegendItem = React.createClass({
	render: function () {
		return (
			<div className="col-sm-3 col-xs-6 item">
				<div className={'key-' + this.props.name}>
					<i className={'glyphicon glyphicon-' + this.props.icon}/> {this.props.description}
				</div>
			</div>
		);
	}
});

var Layouts = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		return (
			<div className="layouts margin-fix">
				<div className="jumbotron header">
					<div className="container">
						<h1>Layout Editor</h1>
						<p>
							Create multiple keyboard layouts with custom bindings.
						</p>
						<Controls/>
					</div>
				</div>
				<div className="jumbotron keyboard">
					<div className="container">
						<Keyboard state={this.state} interactive={true} invertFirstRow={false} uniqueID="layouts"/>
					</div>
				</div>
				<div className="container help">
					<div className="row">
						<Legend/>
						<div className="col-sm-4">
							<h2>Tips</h2>
							Note that you should disable <code>Input Button Code Is Scan Code</code> in the <a href="#/settings/engine">Manta Settings</a> if
							your native keyboard layout is listed in the Manta settings.
							<br/>
							<br/>
							If your autoexec doesn't work at all, try opening the console and enter <code>exec autoexec.cfg</code>. It should also be possible to add <code>+exec autoexec.cfg</code> in your launch options.
						</div>
					</div>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Layouts;
