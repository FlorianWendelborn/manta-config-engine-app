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
			<div className="container">
				<h3>Preset Manager:</h3>
				<textarea className="form-control" rows="35">{preset}</textarea>
				<br/>
				(#TODO make buttons work)
				<br/>
				<div className="btn-group">
					<button onClick={actions.exportPreset} type="button" className="btn btn-warning">Export Preset</button>
					<button onClick={actions.importPreset} type="button" className="btn btn-info">Import Preset</button>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});
module.exports = Component;
