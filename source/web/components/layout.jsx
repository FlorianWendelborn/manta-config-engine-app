var BindChanger = require('./dialogs/bind-changer.jsx');
var ConfirmDelete = require('./dialogs/confirm-delete.jsx');
var ErrorDialog = require('./dialogs/error.jsx');

var actions = require('../actions');

var Layout = React.createClass({
	render: function () {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<ReactRouter.Link activeClassName="active" className="navbar-brand" to="/home">
								Manta Config Engine
							</ReactRouter.Link>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li><ReactRouter.Link activeClassName="active" to="/editor"><i className="glyphicon glyphicon-duplicate"/> Layout Editor</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/chatwheels"><i className="glyphicon glyphicon-cd"/> Chatwheel Manager</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/cycle-builder"><i className="glyphicon glyphicon-repeat"/> Cycle Builder</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/presets/load"><i className="glyphicon glyphicon-blackboard"/> Presets</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/custom-code"><i className="glyphicon glyphicon-qrcode"/> Custom Code</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/settings/gameplay"><i className="glyphicon glyphicon-compressed"/> Settings</ReactRouter.Link></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><a onClick={actions.download} href="javascript:void(0)"><i className="glyphicon glyphicon-save"></i> Download</a></li>
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
				<BindChanger/>
				<ConfirmDelete/>
				<ErrorDialog/>
				<input type="file" id="file-input" onChange={actions.preset.importFile} className="hidden" accept="application/json"/>
			</div>
		);
	}
});

module.exports = Layout;
