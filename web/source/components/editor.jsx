var Keyboard = require('./keyboard.jsx');
var LayoutControls = require('./layout-controls.jsx');
var Legend = require('./legend.jsx');

var Component = React.createClass({
	render: function () {
		return (
			<div className="container">
                <LayoutControls/>
                <br/>
                <Keyboard/>
                <br/>
                <Legend/>
            </div>
		);
	}
});

module.exports = Component;
