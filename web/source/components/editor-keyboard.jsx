var store = require('../store');
var actions = require('../actions');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		return (
			<div className="custom-container custom-row">
				<div className="custom-row">
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Esc" span="1" identity="ESCAPE"/>
					<div className="custom-col span_1-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="F1" span="1" identity="F1"/>
					<Key name="F2" span="1" identity="F2"/>
					<Key name="F3" span="1" identity="F3"/>
					<Key name="F4" span="1" identity="F4"/>
					<div className="custom-col span_0-25 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="F5" span="1" identity="F5"/>
					<Key name="F6" span="1" identity="F6"/>
					<Key name="F7" span="1" identity="F7"/>
					<Key name="F8" span="1" identity="F8"/>
					<div className="custom-col span_0-25 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="F9" span="1" identity="F9"/>
					<Key name="F10" span="1" identity="F10"/>
					<Key name="F11" span="1" identity="F11"/>
					<Key name="F12" span="1" identity="F12"/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Print" span="1" identity=""/>
					<Key name="Lock" span="1" identity="SCROLLLOCK"/>
					<Key name="Pause" span="1" identity="PAUSE"/>
					<div className="custom-col span_4-5 key-empty">&nbsp;<br/>&nbsp;</div>
				</div>
				<div className="custom-row" style={{height: '20px'}}></div>
				<div className="custom-row">
					<Key name="" span="1" identity="hidden"/>
					<Key name="`" span="1" identity="`"/>
					<Key name="1" span="1" identity="1"/>
					<Key name="2" span="1" identity="2"/>
					<Key name="3" span="1" identity="3"/>
					<Key name="4" span="1" identity="4"/>
					<Key name="5" span="1" identity="5"/>
					<Key name="6" span="1" identity="6"/>
					<Key name="7" span="1" identity="7"/>
					<Key name="8" span="1" identity="8"/>
					<Key name="9" span="1" identity="9"/>
					<Key name="0" span="1" identity="0"/>
					<Key name="-" span="1" identity="-"/>
					<Key name="=" span="1" identity="KEYPAD_="/>
					<Key name="&larr;" span="2" identity="BACKSPACE"/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Insert" span="1" identity="INS"/>
					<Key name="Home" span="1" identity="HOME"/>
					<Key name="PUp" span="1" identity="PGUP"/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Num" span="1" identity="NUMLOCK"/>
					<Key name="/" span="1" identity="KP_DIVIDE"/>
					<Key name="*" span="1" identity="KP_MULTIPLY"/>
					<Key name="-" span="1" identity="KP_MINUS"/>
				</div>
				<div className="custom-row">
					<Key name="" span="1" identity="hidden"/>
					<Key name="Tab" span="1-5" identity="TAB"/>
					<Key name="Q" span="1" identity="Q"/>
					<Key name="W" span="1" identity="W"/>
					<Key name="E" span="1" identity="E"/>
					<Key name="R" span="1" identity="R"/>
					<Key name="T" span="1" identity="T"/>
					<Key name="Y" span="1" identity="Y"/>
					<Key name="U" span="1" identity="U"/>
					<Key name="I" span="1" identity="I"/>
					<Key name="O" span="1" identity="O"/>
					<Key name="P" span="1" identity="P"/>
					<Key name="[" span="1" identity="["/>
					<Key name="]" span="1" identity="]"/>
					<Key name="Enter" span="1-5" identity="ENTER"/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Delete" span="1" identity="DEL"/>
					<Key name="End" span="1" identity="END"/>
					<Key name="PDown" span="1" identity="PGDN"/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="7'" span="1" identity="KP_7"/>
					<Key name="8'" span="1" identity="KP_8"/>
					<Key name="9'" span="1" identity="KP_9"/>
					<Key name="+" span="1" identity="KP_PLUS"/>
				</div>
				<div className="custom-row">
					<Key name="" span="1" identity="hidden"/>
					<Key name="Caps Lock" span="1-75" identity="CAPSLOCK"/>
					<Key name="A" span="1" identity="A"/>
					<Key name="S" span="1" identity="S"/>
					<Key name="D" span="1" identity="D"/>
					<Key name="F" span="1" identity="F"/>
					<Key name="G" span="1" identity="G"/>
					<Key name="H" span="1" identity="H"/>
					<Key name="J" span="1" identity="J"/>
					<Key name="K" span="1" identity="K"/>
					<Key name="L" span="1" identity="L"/>
					<Key name=":" span="1" identity=";"/>
					<Key name="'" span="1" identity="'"/>
					<Key name="\" span="1" identity="#"/>
					<Key name="Enter" span="1-25" identity="ENTER"/>
					<div className="custom-col span_4 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="4'" span="1" identity="KP_4"/>
					<Key name="5'" span="1" identity="KP_5"/>
					<Key name="6'" span="1" identity="KP_6"/>
					<Key name="+" span="1" identity="KP_PLUS"/>
				</div>
				<div className="custom-row">
					<Key name="Mou4" span="1" identity="MOUSE4" title="Mouse Button 4"/>
					<Key name="Shift" span="1-25" identity=""/>
					<Key name="\" span="1" identity="\"/>
					<Key name="Z" span="1" identity="Z"/>
					<Key name="X" span="1" identity="X"/>
					<Key name="C" span="1" identity="C"/>
					<Key name="V" span="1" identity="V"/>
					<Key name="B" span="1" identity="B"/>
					<Key name="N" span="1" identity="N"/>
					<Key name="M" span="1" identity="M"/>
					<Key name="," span="1" identity="KP_,"/>
					<Key name="." span="1" identity="KP_."/>
					<Key name="/" span="1" identity="/"/>
					<Key name="Shift" span="2-75" identity=""/>
					<div className="custom-col span_1-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="&uarr;" span="1" identity="UP"/>
					<div className="custom-col span_1-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="1'" span="1" identity="KP_1"/>
					<Key name="2'" span="1" identity="KP_2"/>
					<Key name="3'" span="1" identity="KP_3"/>
					<Key name="Enter'" span="1" identity="KP_ENTER"/>
				</div>
				<div className="custom-row" style={{marginBottom: '20px'}}>
					<Key name="Mou5" span="1" identity="MOUSE5" title="Mouse Button 5"/>
					<Key name="Ctrl" span="1-5" identity=""/>
					<Key name="Win" span="1" identity=""/>
					<Key name="Alt" span="1-5" identity="ALT"/>
					<Key name="Space" span="6" identity="SPACE"/>
					<Key name="Alt" span="1-5" identity="ALT"/>
					<Key name="?" span="1" identity=""/>
					<Key name="?" span="1" identity=""/>
					<Key name="Ctrl" span="1-5" identity=""/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="&larr;" span="1" identity="LEFT"/>
					<Key name="&darr;" span="1" identity="DOWN"/>
					<Key name="&uarr;" span="1" identity="RIGHT"/>
					<div className="custom-col span_0-5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="0'" span="2" identity="KP_0"/>
					<Key name="." span="1" identity="KP_."/>
					<Key name="Enter'" span="1" identity="KP_ENTER"/>
				</div>
			</div>
		);
	},
	componentDidUpdate: function () {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip('destroy');
			$('[data-toggle="tooltip"]').tooltip();
		})
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Key = React.createClass({
	render: function () {
		var span = this.props.span;
		var keyBind = window.keyInfo(this.props.identity),
			keyClass, keyFunction, keyTitle;
		switch (this.props.identity) {
			case "ALT":
				if (!this.props.altAvailable) {
					keyClass = 'key-todo';
					keyFunction = '-';
					keyTitle = 'Need to remap Alt for this. #TODO'
				} else {
					keyClass = keyBind[0] || '-';
					keyFunction = keyBind[1] || '-';
					keyTitle = keyBind[2] || '-';
				}
			break;
			default:
				keyClass = keyBind[0] || '-';
				keyFunction = keyBind[1] || '-';
				keyTitle = keyBind[2] || '-';
		}
		var keyName = this.props.name;
		return (
			<div onClick={this._onClick} className={"custom-col span_" + span + ' ' + keyClass} data-toggle="tooltip" data-placement="top" title={keyTitle}>{keyName}<br/>{keyFunction}</div>
		);
	},
	_onClick: function () {
		actions.changeBind(this.props.identity);
	}
});

module.exports = Component;
