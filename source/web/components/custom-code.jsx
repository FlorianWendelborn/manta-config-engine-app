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
		var customCode = this.state.preset.custom;
		return (
			<div className="custom-code">
				<div className="jumbotron header">
					<div className="container">
						<h1>Custom Code</h1>
						<p>
							Add your own autoexec code directly to Manta.
						</p>
						<a className="btn btn-success" href="https://github.com/dodekeract/manta-config-engine-app/wiki/Custom-Code">View Documentation</a>
					</div>
				</div>
				<div className="container">
					<textarea onChange={this._change} className="form-control" rows="20" value={customCode}></textarea>
				</div>
			</div>
		);
	},
	_change: function (e) {
		actions.customCode.update(e.target.value);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
