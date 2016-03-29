var Keyboard = require('./editor-keyboard.jsx');
var Controls = require('./editor-controls.jsx');
var Legend = require('./editor-legend.jsx');

var Component = React.createClass({
	render: function () {
		return (
			<div className="layout-editor margin-fix">
				<div className="jumbotron header">
					<div className="container">
						<h1>Layout Editor</h1>
						<p>
							Create multiple keyboard layouts with custom bindings.
						</p>
						<Controls/>
					</div>
				</div>
				<div className="jumbotron keyboard">
					<div className="container">
						<Keyboard/>
					</div>
				</div>
				<div className="container help">
					<br/>
					<div className="alert alert-danger">
						<h3 style={{marginTop: 0}}>Spring Cleaning Workaround</h3>
						If your autoexec doesn't work at all, try opening the console and enter <code>exec autoexec.cfg</code>. It should also be possible to add <code>+exec autoexec.cfg</code> in your launch options.<br/>
						Hope I made it possible to continue using Manta until I found out how to fix everything. If you're seeing any issue I didn't already catch, open an issue on GitHub or write me a reddit PM (/u/dodekerekt).<br/>
						Also I changed some layout-related things and how keys are unbound.
					</div>
					<div className="row">
						<Legend/>
						<div className="col-sm-4">
							<h2>Tips</h2>
							Note that you should disable <code>Input Button Code Is Scan Code</code> in the <a href="#/settings/engine">Manta Settings</a> if
							your native keyboard layout is listed in the Manta settings.
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Component;
