var Keyboard = require('./editor-keyboard.jsx');
var Controls = require('./editor-controls.jsx');
var Legend = require('./editor-legend.jsx');

var Component = React.createClass({
	render: function () {
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-layout-editor">
					<div className="container">
						<h1>Layout Editor</h1>
						<p>
							Create multiple keyboard layouts with custom bindings.
						</p>
	                	<Controls/>
					</div>
				</div>
				<div className="container">
	                <Keyboard/>
	                <br/>
	                <Legend/>
	            </div>
			</div>
		);
	}
});

module.exports = Component;
