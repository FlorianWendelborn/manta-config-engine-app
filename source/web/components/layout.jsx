var BindChanger = require('./dialogs/bind-changer.jsx');
var ConfirmDelete = require('./dialogs/confirm-delete.jsx');
var ErrorDialog = require('./dialogs/error.jsx');
var ChangelogDialog = require('./dialogs/changelog.jsx');

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
								<img src="images/icon.png" height="24" style={{float: 'left'}}/>&nbsp;<span style={{float: 'right'}}>Manta Config Engine</span>
							</ReactRouter.Link>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li><ReactRouter.Link activeClassName="active" to="/layouts"><i className="glyphicon glyphicon-duplicate"/> Layouts</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/chatwheels"><i className="glyphicon glyphicon-cd"/> Chatwheels</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/cycles"><i className="glyphicon glyphicon-repeat"/> Cycles</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/presets/load"><i className="glyphicon glyphicon-blackboard"/> Presets</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/custom-code"><i className="glyphicon glyphicon-qrcode"/> Custom Code</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/extensions/chatwheels"><i className="glyphicon glyphicon-link"/> Extensions</ReactRouter.Link></li>
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
				<ChangelogDialog/>
				<input type="file" id="file-input" onChange={actions.preset.importFile} className="hidden" accept="application/json"/>
			</div>
		);
	},
	componentDidMount: actions.changelog.open
});

module.exports = Layout;
