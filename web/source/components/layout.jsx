var BindChanger = require('./dialogs/bind-changer.jsx');
var ConfirmDelete = require('./dialogs/confirm-delete.jsx');

var actions = require('../actions');

var Component = React.createClass({
	render: function () {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
					<div className="container">
						<div className="navbar-header">
							<ReactRouter.Link activeClassName="active" className="navbar-brand" to="/">
								Manta-Config-Engine
							</ReactRouter.Link>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><ReactRouter.Link activeClassName="active" to="/editor"><i className="glyphicon glyphicon-duplicate"/> Layout Editor</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/chatwheels"><i className="glyphicon glyphicon-cd"/> Chatwheel Manager</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/cycle-builder"><i className="glyphicon glyphicon-repeat"/> Cycle Builder</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/preset"><i className="glyphicon glyphicon-blackboard"/> Preset Viewer</ReactRouter.Link></li>
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
			</div>
		);
	}
});

module.exports = Component;
