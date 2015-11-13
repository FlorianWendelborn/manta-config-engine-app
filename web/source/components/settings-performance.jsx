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
					<Panel title="Quality" sets={['ambientOcclusion', 'highQualityWater', 'highQualityDashboard', 'heightFog', 'worldLighting', 'additiveLightPass', 'specularBloom', 'specularHighlight', 'doubleShadowUpdates', 'shadowQuality']} preset={this.state.preset} domain="performance"/>
					<Panel title="Hidden Features" sets={['multiCore', 'altTabIdle', 'gpuLevel', 'cpuLevel', 'gpuMemoryLevel', 'memoryLevel']} preset={this.state.preset} domain="performance"/>
					<Panel title="Optimizations" sets={['serverForcePreload', 'clientForcePreload']} preset={this.state.preset} domain="performance"/>
					<Panel title="Detail" sets={['screenShake', 'animatePortrait', 'ambientCreatures', 'levelOfDetail']} preset={this.state.preset} domain="performance"/>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
