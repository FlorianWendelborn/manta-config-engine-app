var Component = React.createClass({
	render: function () {
		return (
			<div className="settings">
				<div className="jumbotron header">
					<div className="container">
						<h1>Game Settings</h1>
						<p>Adjust the game's look &amp; feel to your needs. Especially useful when multiple people use the same PC.</p>
						<a className="btn btn-success" href="https://github.com/dodekeract/manta-config-engine-app/wiki/Settings">View Documentation</a>
					</div>
				</div>
				<nav className="navbar navbar-inverse navbar-default navbar-static-top" style={{marginTop: '-30px'}}>
					<div className="container">
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><ReactRouter.Link activeClassName="active" to="/settings/gameplay"><i className="glyphicon glyphicon-tower"/> Gameplay Settings</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/settings/performance"><i className="glyphicon glyphicon-scale"/> Performance Settings</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/settings/engine"><i className="glyphicon glyphicon-wrench"/> Manta Settings</ReactRouter.Link></li>
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Component;
