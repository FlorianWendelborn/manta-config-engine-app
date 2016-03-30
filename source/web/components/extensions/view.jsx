var store = require('../../store');

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
			<div className="extensions">
				<div className="jumbotron header">
					<div className="container">
						<h1>Extensions</h1>
						<p>Import chatwheels, cycles and layouts other people shared.</p>
						<a className="btn btn-success" href="https://github.com/dodekeract/manta-config-engine/blob/master/extensions/">
							<i className="glyphicon glyphicon-eye-open"/> View Available Extensions On GitHub
						</a>
					</div>
				</div>
				<nav className="navbar navbar-inverse navbar-default navbar-static-top" style={{marginTop: '-30px'}}>
					<div className="container">
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><ReactRouter.Link activeClassName="active" to="/extensions/chatwheels"><i className="glyphicon glyphicon-cd"/> Chatwheels</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/extensions/cycles"><i className="glyphicon glyphicon-repeat"/> Cycles</ReactRouter.Link></li>
								<li><ReactRouter.Link activeClassName="active" to="/extensions/layouts"><i className="glyphicon glyphicon-duplicate"/> Layouts</ReactRouter.Link></li>
							</ul>
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
