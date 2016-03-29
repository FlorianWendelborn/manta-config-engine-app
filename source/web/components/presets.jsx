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
		return (
			<div className="presets">
				<div className="jumbotron header">
					<div className="container">
						<h1>Presets</h1>
						<p>Shows your configuration in JSON. Also allows you to import and export presets.</p>
						<a className="btn btn-success" href="https://github.com/dodekeract/manta-config-engine/blob/master/presets/">
							<i className="glyphicon glyphicon-eye-open"/> View Available Presets On GitHub
						</a>
					</div>
				</div>
				<nav className="navbar navbar-inverse navbar-default navbar-static-top" style={{marginTop: '-30px'}}>
					<div className="container">
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><ReactRouter.Link activeClassName="active" to="/presets/load"><i className="glyphicon glyphicon-refresh"/> Load</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/presets/view"><i className="glyphicon glyphicon-eye-open"/> View </ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/presets/edit"><i className="glyphicon glyphicon-pencil"/> Edit</ReactRouter.Link></li>
							</ul>
							<div className="btn-group navbar-btn navbar-right" style={{marginRight: 0}} role="group">
								<button className="btn btn-info" onClick={actions.preset.import}>
									<i className="glyphicon glyphicon-import"/> Import Preset
								</button>
								<button className="btn btn-warning" onClick={actions.preset.export}>
									<i className="glyphicon glyphicon-export"/> Export Preset
								</button>
							</div>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});
module.exports = Component;
