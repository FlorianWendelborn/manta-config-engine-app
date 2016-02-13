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
					<Panel title="Keyboard Layout" sets={['keyboardLayout', 'inputButtonCodeIsScanCode']} preset={this.state.preset} domain="engine"/>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
