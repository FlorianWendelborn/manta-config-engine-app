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
				<div className="custom-masonry">
					<Panel title="Minimap" sets={['minimapHeroSize', 'minimapRuneSize', 'minimapCreepScale', 'minimapProximityScale', 'minimapProximityScaleDistance', 'minimapProximityScaleMinimum', 'minimapShowHeroIcons', 'minimapAlwaysShowHeroIcons', 'minimapBackground', 'minimapSimpleColors', 'minimapMisclickTime', 'minimapRightClick', 'minimapTowerDefendDistance', 'minimapPingDuration']} preset={this.state.preset} domain="gameplay"/>
					<Panel title="Game" sets={['autoAttack', 'autoAttackAfterSpell', 'autoSelectSummonedUnits', 'unifiedUnitOrders', 'smartMultiUnitCast', 'smartDoubleTap']} preset={this.state.preset} domain="gameplay"/>
					<Panel title="View" sets={['netgraph', 'playerNames', 'rangeFinder', 'heroFinder']} preset={this.state.preset} domain="gameplay"/>
					<Panel title="Hidden Settings" sets={['autoRepeatRightMouse', 'forceMovementDirection', 'forceRightClickAttack']} preset={this.state.preset} domain="gameplay"/>
					<Panel title="Camera" sets={['cameraZoom', 'cameraMoveOnRespawn', 'cameraSpeed']} preset={this.state.preset} domain="gameplay"/>
					<Panel title="Shop" sets={['gridView']} preset={this.state.preset} domain="gameplay"/>
					<Panel title="Chat" sets={['muteChat']} preset={this.state.preset} domain="gameplay"/>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
