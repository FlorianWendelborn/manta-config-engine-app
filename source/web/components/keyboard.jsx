var store = require('../store');
var actions = require('../actions');
var ReactTooltip = require('../../../node_modules/react-tooltip/standalone/react-tooltip.min.js');

var Component = React.createClass({
	render: function () {
		var rows = [];
		for (var i = 0; i < this.props.state.keyboardLayout.rows.length; i++) {
			rows.push(<KeyRow inverted={this.props.invertFirstRow && i === 0} interactive={this.props.interactive} key={i} data={this.props.state.keyboardLayout.rows[i]} uniqueID={this.props.uniqueID + '-' + this.props.state.currentLayout + '-' + i} state={this.props.state}/>);
		}
		return (
			<div className="m-container">
				{rows}
			</div>
		);
	}
});

var KeyRow = React.createClass({
	render: function () {
		var style = {};
		if (this.props.data.type === 'separator') {
			return (
				<div className="custom-row" style={{height: '20px'}}></div>
			);
		} else {
			var keys = [];

			for (var i = 0; i < this.props.data.keys.length; i++) {
				var name = this.props.data.keys[i][0] || '';
				var identity = this.props.data.keys[i][1];
				var width = this.props.data.keys[i][2] || 1;
				keys.push(<Key inverted={this.props.inverted} interactive={this.props.interactive} name={name} identity={identity} width={width} key={i} uniqueID={this.props.uniqueID + '-' + i} state={this.props.state}/>);
			}

			return (
				<div className="custom-row">{keys}</div>
			);
		}
	}
});

var Key = React.createClass({
	render: function () {
		var span = this.props.width.toString().replace(/\./g, '-');
		if (this.props.name === 'empty') {
			return (<div className={"key key-empty span-" + span}>&nbsp;<br/>&nbsp;</div>);
		} else {
			var keyBind = window.keyInfo(this.props.identity, this.props.state);
			var keyClass;
			var keyFunction;
			var keyTitle;

			keyClass = keyBind[0] || '-';
			keyFunction = keyBind[1] || '-';
			keyTitle = keyBind[2] || '-';

			var keyName = this.props.name;

			var clickable = keyClass === 'key-unavailable' ? false : this._onClick;

			return (
				<span>
					<div className={"key span-" + span}>
						<div onClick={clickable} className={keyClass} data-tip data-for={this.props.uniqueID}>
							{keyName}<br/>{keyFunction}
						</div>
					</div>
					<ReactTooltip id={this.props.uniqueID} place={this.props.inverted ? 'bottom' : 'top'} type="dark" effect="solid">
						{keyTitle}
					</ReactTooltip>
				</span>
			);
		}
	},
	_onClick: function () {
		if (this.props.interactive) {
			if (this.props.identity === store.getState().preset.settings.engine.altKey) {
				actions.errorDialog.open('The alt-modifier must be bound to a key. If you want to use this key for something else, you first need to remap alt to a different key.');
			} else {
				actions.keybindingChanger.open(this.props.identity);
			}
		}
	}
});

module.exports = Component;
