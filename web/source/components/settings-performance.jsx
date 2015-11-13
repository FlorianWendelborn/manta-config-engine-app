var store = require('../store');

var Panel = require('./settings-panel.jsx');

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
			<div className="container">
				<div className="row">
					<Panel domain="performance" sets={['ambientOcclusion', 'highQualityWater', 'highQualityDashboard', 'heightFog', 'worldLighting', 'additiveLightPass', 'specularBloom', 'specularHighlight', 'doubleShadowUpdates']} preset={this.state.preset} title="Quality"/>
					<Panel domain="performance" sets={['screenShake', 'animatePortrait', 'ambientCreatures']} preset={this.state.preset} title="Detail"/>
					<Panel domain="performance" sets={['multiCore', 'altTabIdle']} preset={this.state.preset} title="Hidden Features"/>
					<Panel domain="performance" sets={['serverForcePreload', 'clientForcePreload']} preset={this.state.preset} title="Optimizations"/>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
