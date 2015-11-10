var actions = require('../actions');

var store = require('../store');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var mSettings = ['netgraph', 'autoRepeatRightMouse', 'forceMovementDirection', 'unifiedUnitOrders', 'respawnCamera', 'disableAutoAttack', 'disableAutoAttackAfterSpell', 'rangefinder', 'playerNames', 'gridView', 'disableHeroFinder', 'disableZoom', 'minimapProximityScale'];
		var settings = [];
		for (var  i = 0; i < mSettings.length; i++) {
			settings.push(<Setting key={i} id={mSettings[i]} value={this.state.preset[mSettings[i]]} />);
		}
		return (
			<div className="container">
				<h3>Settings:</h3>
				<form>
					{settings}
				</form>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Setting = React.createClass({
	render: function () {
		var val = this.props.value ? 'checked' : 'unchecked';
		return (
			<div className="checkbox">
				<label>
					<input type="checkbox" id={'setting-' + this.props.id} onChange={actions.changeSetting} checked={val} /> {this.props.id}
				</label>
			</div>
		)
	}
});

module.exports = Component;
