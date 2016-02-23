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
			<div className="preset-viewer">
				<div className="jumbotron header">
					<div className="container">
						<h1>Preset Viewer</h1>
						<p>Shows your configuration in JSON. Also allows you to import and export presets.</p>
						<div className="btn-group" role="group">
							<a className="btn btn-success" href="https://github.com/dodekeract/manta-config-engine/blob/master/presets/">
								<i className="glyphicon glyphicon-eye-open"/> View Available Presets On GitHub
							</a>
							<button className="btn btn-info" onClick={actions.preset.import}>
								<i className="glyphicon glyphicon-import"/> Import Preset
							</button>
							<button className="btn btn-warning" onClick={actions.preset.export}>
								<i className="glyphicon glyphicon-export"/> Export Preset
							</button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-fire" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Be Careful Here</h4>
									Importing a preset <strong>will overwrite your current one</strong>. Make sure to export it first, if you want to use your current preset later.
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-cloud-download" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Get Presets From GitHub</h4>
									The GitHub repository contains some useful presets to get you started. You can visit it by using the green button above.
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-share" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Share Your Preset With The World</h4>
									Submit a <a href="https://github.com/dodekeract/manta-config-engine/pulls">pull-request</a> containing your <code>preset.json</code> to the <a href="https://github.com/dodekeract/manta-config-engine">Engine Repository</a>. Just make sure to give it a fitting name first.
								</div>
							</div>
						</div>
					</div>
					<br/>
					<textarea className="form-control" readOnly rows="20">{preset}</textarea>
					<br/>
					<div className="btn-group btn-group-justified" role="group">
						<div className="btn-group" role="group">
							<button className="btn btn-danger" onClick={actions.reset}>Completely Reset Manta. Reset all Layouts, Chatwheels & Settings.</button>
						</div>
						<div className="btn-group" role="group">
							<button className="btn btn-danger" onClick={actions.resetToBlank}>Reset To Blank Preset. Delete all Layouts, Chatwheels & Settings.</button>
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
module.exports = Component;
