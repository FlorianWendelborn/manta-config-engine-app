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
		var preset = JSON.stringify(this.state.preset, null, 4);
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-preset-viewer">
					<div className="container">
						<h1>Preset Viewer</h1>
						<p>Shows Your Configuration In JSON. Useful mainly for debugging/contributing.</p>
						<a className="btn btn-success" href="https://github.com/dodekeract/manta-config-engine/blob/master/presets/default.json">View Default Preset On GitHub</a>
					</div>
				</div>
				<div className="container">
					<textarea className="form-control" readOnly rows="25">{preset}</textarea>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});
module.exports = Component;
