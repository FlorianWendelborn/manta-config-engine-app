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
	remove: function () {
		actions.showRemoveDialog('layout', this.state.currentLayout, this.renderRemove());
	},
	render: function () {
		var layouts = this.state.preset.layouts;
		var layoutElements = [];
		for (var i = 0; i < layouts.length; i++) {
			layoutElements.push(<Layout i={i} currentLayout={this.state.currentLayout}/>);
		}
		return (
			<div className="btn-toolbar" role="toolbar">
				<div className="btn-group" role="group">
					{layoutElements}
				</div>
				<div className="btn-group" role="group">
					<button onClick={actions.addLayout} type="button" className="btn btn-success">Add Layout</button>
					<button onClick={this.remove} type="button" className="btn btn-danger">Remove Layout {this.state.currentLayout + 1}</button>
					<a href="#/settings/engine" type="button" className="btn btn-default" style={{textShadow: 'none'}}>Change Keyboard Layout</a>
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

var Layout = React.createClass({
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

module.exports = Component;
