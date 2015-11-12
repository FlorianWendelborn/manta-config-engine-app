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
					<Panel sets={['autoAttack', 'autoAttackAfterSpell', 'autoSelectSummonedUnits', 'unifiedUnitOrders']} preset={this.state.preset} title="Game"/>
					<Panel sets={['netgraph', 'playerNames', 'rangeFinder', 'heroFinder']} preset={this.state.preset} title="View"/>
					<Panel sets={['autoRepeatRightMouse', 'forceMovementDirection']} preset={this.state.preset} title="New Features"/>
					<Panel sets={['minimapProximityScale']} preset={this.state.preset} title="Minimap"/>
					<Panel sets={['cameraZoom', 'cameraMoveOnRespawn']} preset={this.state.preset} title="Camera"/>
					<Panel sets={['gridView']} preset={this.state.preset} title="Shop"/>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
