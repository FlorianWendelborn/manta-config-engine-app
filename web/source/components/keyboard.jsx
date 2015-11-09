var store = require('../store');
var actions = require('../actions');

var manta = require('dota2-manta-config-engine');

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
					<Key name="Esc" span="1" identity="ESC"/>
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
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Print" span="1" identity=""/>
					<Key name="Lock" span="1" identity="SCROLLLOCK"/>
					<Key name="Pause" span="1" identity="PAUSE"/>
					<div className="custom-col span_5 key-empty">&nbsp;<br/>&nbsp;</div>
				</div>
				<div className="custom-row" style={{height: '20px'}}></div>
				<div className="custom-row">
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
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Insert" span="1" identity="INSERT"/>
					<Key name="Home" span="1" identity="HOME"/>
					<Key name="PUp" span="1" identity="PAGEUP"/>
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Num" span="1" identity="NUMLOCK"/>
					<Key name="/" span="1" identity="KP_/"/>
					<Key name="*" span="1" identity="KP_*"/>
					<Key name="-" span="1" identity="KP_-"/>
				</div>
				<div className="custom-row">
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
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="Delete" span="1" identity="DELETE"/>
					<Key name="End" span="1" identity="END"/>
					<Key name="PDown" span="1" identity="PAGEDOWN"/>
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="7'" span="1" identity="KP_7"/>
					<Key name="8'" span="1" identity="KP_8"/>
					<Key name="9'" span="1" identity="KP_9"/>
					<Key name="+" span="1" identity="KP_+"/>
				</div>
				<div className="custom-row">
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
					<div className="custom-col span_5 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="4'" span="1" identity="KP_4"/>
					<Key name="5'" span="1" identity="KP_5"/>
					<Key name="6'" span="1" identity="KP_6"/>
					<Key name="+" span="1" identity="KP_+"/>
				</div>
				<div className="custom-row">
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
					<div className="custom-col span_2 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="&uarr;" span="1" identity="UP"/>
					<div className="custom-col span_2 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="1'" span="1" identity="KP_1"/>
					<Key name="2'" span="1" identity="KP_2"/>
					<Key name="3'" span="1" identity="KP_3"/>
					<Key name="Enter" span="1" identity="ENTER"/>
				</div>
				<div className="custom-row" style={{marginBottom: '20px'}}>
					<Key name="Ctrl" span="1-5" identity=""/>
					<Key name="Win" span="1" identity=""/>
					<Key name="Alt" span="1" identity=""/>
					<Key name="Space" span="7" identity="SPACE"/>
					<Key name="Alt" span="1" identity=""/>
					<Key name="?" span="1" identity=""/>
					<Key name="?" span="1" identity=""/>
					<Key name="Ctrl" span="1-5" identity=""/>
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="&larr;" span="1" identity="LEFT"/>
					<Key name="&darr;" span="1" identity="DOWN"/>
					<Key name="&uarr;" span="1" identity="RIGHT"/>
					<div className="custom-col span_1 key-empty">&nbsp;<br/>&nbsp;</div>
					<Key name="0'" span="2" identity="KP_0"/>
					<Key name="." span="1" identity="KP_."/>
					<Key name="Enter" span="1" identity="ENTER"/>
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
	getKeybind: function (key) {
		var state = store.getState();
		var b = state.preset.layouts[state.currentLayout].keybinds[key];
		if (key === '') return ['key-todo', '?'];
		if (!b) return ['key-none', 'none'];
		switch (b[0]) {
			case "ability":
				var match = [1,2,3,4,5,'Ult']
				return ['key-ability', match[b[2]], b[1] + 'cast ability ' + match[b[2]]];
			break;
			case "item":
				switch (b[1]) {
					case "taunt":
						return ['key-item', 'taunt'];
					break;
					default: return ['key-item', parseInt(b[2])+1, b[1] + 'cast item ' + (parseInt(b[2])+1)];
				}
			break;
			case "chat":
				return ['key-communication', b[1], b[1] + '-chat: ' + b[2]];
			break;
			case "attack":
				return ['key-basic', 'attack', 'Attack'];
			break;
			case "stop":
				return ['key-basic', 'stop', 'Stop'];
			break;
			case "hold":
				return ['key-basic', 'hold', 'Hold Position'];
			break;
			case "voice":
				return ['key-communication', 'team', 'Voice-Chat: Team'];
			break;
			case "reload":
				return ['key-basic', (<span>&#8635;</span>), 'Reload the autoexec.'];
			break;
			case "chatwheel":
				return ['key-communication', 'CW-' + (parseInt(b[1])+1), 'Chatwheel ' + (parseInt(b[1])+1)];
			break;
			case "pause":
				return ['key-basic', 'pause', 'Pause the game.'];
			break;
			case "learn":
				return ['key-ability', 'stats', 'Learn Stats'];
			break;
			case "buy":
				return ['key-other', b[1], 'Buy ' + b[1]];
			break;
			case "open":
				return ['key-open', b[1], b[1]];
			break;
			case "view":
				return ['key-open', b[1], b[1]];
			break;
			case "select":
				if (b[1] === 'other-units') return ['key-select', 'other', 'Select All Other Units'];
				if (b[1] === 'controlgroup') return ['key-select', 'CG-' + b[2], 'Control-Group ' + b[2]];
				return ['key-select', b[1], 'Select ' + b[1]];
			break;
			case "phrase":
				return ['key-communication', 'phrase', manta.phrases[b[1]]];
			break;
			case "courier":
				return ['key-other', 'c:deliver', 'Courier: Deliver Items']
			break;
			case "command":
				return ['key-command', 'Command', 'Custom Command: ' + b[1]];
			break;
			case "layout":
				return ['key-layout', parseInt(b[1])+1, 'Switches To Layout ' + (parseInt(b[1])+1)];
			break;
			default: return ['key-other', '#', '-'];
		}
	},
	render: function () {
		var span = this.props.span;
		var keyBind = this.getKeybind(this.props.identity);
		var keyClass = keyBind[0] || '-';
		var keyFunction = keyBind[1] || '-';
		var keyTitle = keyBind[2] || '-';
		var keyName = this.props.name;
		return (
			<div onClick={this._onClick} className={"custom-col span_" + span + ' ' + keyClass} data-toggle="tooltip" data-placement="bottom" title={keyTitle}>{keyName}<br/>{keyFunction}</div>
		);
	},
	_onClick: function () {
		actions.changeBind(this.props.identity);
	}
});

module.exports = Component;
