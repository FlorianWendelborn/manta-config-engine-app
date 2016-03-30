// external

var manta = require('dota2-manta-config-engine');

// internal

var store = require('./store');

// layout

﻿var Layout = require('./components/layout.jsx');

// home
var Home = require('./components/home.jsx');

// layouts
var Layouts = require('./components/layouts.jsx');

// chatwheels
var Chatwheel = require('./components/chatwheel.jsx');
var Chatwheels = require('./components/chatwheels.jsx').Chatwheels;

// cycles
var Cycle = require('./components/cycle.jsx');
var Cycles = require('./components/cycles/view.jsx');

// presets
var Preset = require('./components/preset.jsx');
var Presets = require('./components/presets.jsx');
var PresetsLoad = require('./components/presets-load.jsx');
var PresetsView = require('./components/presets-view.jsx');
var PresetsEdit = require('./components/presets-edit.jsx');

// custom-code
var CustomCode = require('./components/custom-code.jsx');

// extensions
var Extensions = require('./components/extensions/view.jsx');
var ExtensionsChatwheels = require('./components/extensions/chatwheels.jsx');
var ExtensionsCycles = require('./components/extensions/cycles.jsx');
var ExtensionsLayouts = require('./components/extensions/layouts.jsx');

// settings
var Settings = require('./components/settings.jsx');
var SettingsGameplay = require('./components/settings-gameplay.jsx');
var SettingsPerformance = require('./components/settings-performance.jsx');
var SettingsEngine = require('./components/settings-engine.jsx');

window.capitalize = function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

window.version = require('../../package.json').version;

window.commandInfo = function (c) {
	switch (c[0]) {
		case "ability":
			var shortMatch = [1, 2, 3, 4, 5, 'ult'];
			var longMatch = ['Ability 1', 'Ability 2', 'Ability 3', 'Ability 4', 'Ability 5', 'Ultimate'];
			if (c[2] === 'toggle') {
				return ['key-ability', c[1][0] + c[1][1] + '-to', 'Toggle Autocast'];
			} else {
				return ['key-ability', c[1][0] + c[1][1] + '-' + shortMatch[c[2]], capitalize(c[1]) + 'cast ' + longMatch[c[2]]];
			}
		break;
		case "item":
			switch (c[1]) {
				case "taunt":
					return ['key-item', 'taunt', 'Taunt Thy Enemies'];
				break;
				case "action":
					return ['key-item', 'action', 'Use Action Item'];
				break;
				default: return ['key-item', c[1][0] + c[1][1] + '-' + (parseInt(c[2], 10) + 1), capitalize(c[1]) + 'cast Item ' + (parseInt(c[2], 10) + 1)];
			}
		break;
		case "chat":
			var message = c[2] || '';

			var parts = message.split(
				new RegExp(':*:', 'g')
			);

			for (var i = 1; i < parts.length; i += 2) {
				for (var j in manta.data.emoticons) {
					if (parts[i] === j) {
						parts[i] = <img src={"https://raw.githubusercontent.com/bontscho/dota2-chat-emoticons/master/assets/images/" + j + "-24.gif"}/>;
					}
				}
			}

			return ['key-communication', c[1], <span>{c[1]}-chat: {parts}</span>];
		break;
		case 'grab-stash':
			return ['key-basic', 'stash', 'Grab Stash'];
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
		case "move":
			return ['key-basic', 'move', 'Move'];
		break;
		case "voice":
			return ['key-communication', 'team', 'Voice-Chat: Team'];
		break;
		case "reload":
			return ['key-basic', (<span>&#8635;</span>), 'Reload Autoexec'];
		break;
		case "chatwheel":
			return ['key-communication', 'cw-' + (parseInt(c[1], 10) + 1), 'Chatwheel ' + (parseInt(c[1], 10) + 1)];
		break;
		case "screenshot":
			return ['key-basic', 'screenshot', 'Take A Screenshot'];
		break;
		case "pause":
			return ['key-basic', 'pause', 'Pause Game'];
		break;
		case "learn":
			var matcher = {
				0: 'Ability 1',
				1: 'Ability 2',
				2: 'Ability 3',
				3: 'Ability 4',
				4: 'Ability 5',
				5: 'Ultimate',
				stats: 'Stats',
				ability: 'Mode'
			};
			var sMatcher = {
				0: 1,
				1: 2,
				2: 3,
				3: 4,
				4: 5,
				5: 'ult',
				stats: 'sta',
				ability: 'mod'
			};
			return ['key-ability', '↑' + sMatcher[c[1]], 'Learn ' + matcher[c[1]]];
		break;
		case "buy":
			switch (c[1]) {
				case 'sticky':
				case 'quick':
					return ['key-other', c[1], 'Buy ' + window.capitalize(c[1])];
				break;
				default:
					return ['key-other', manta.data.items[c[1]].name, 'Buy ' + manta.data.items[c[1]].name];
			}
		break;
		case "cycle":
			return ['key-cycle', (parseInt(c[1], 10) + 1), 'Cycle ' + (parseInt(c[1], 10) + 1)];
		break;
		case "open":
			var shortMatch = {
				console: 'cons',
				scoreboard: 'score',
				'shared-units': 'units'
			};
			if (shortMatch[c[1]]) {
				return ['key-open', shortMatch[c[1]], 'Open ' + window.capitalize(c[1])];
			} else {
				return ['key-open', c[1], 'Open ' + window.capitalize(c[1])];
			}
		break;
		case "view":
			switch (c[1]) {
				case 'recent-event':
					return ['key-camera', c[1], 'View Recent Event'];
				break;
				default:
					return ['key-camera', c[1], 'View ' + capitalize(c[1]) + ' (' + capitalize(c[2]) + ')'];
			}
		break;
		case "health":
			return ['key-other', 'H' + c[1], 'Healthbar Separator Every ' + c[1] + ' Hitpoints'];
		break;
		case "patrol":
			return ['key-basic', 'patrol', 'Patrol'];
		break;
		case "glyph":
			return ['key-basic', 'glyph', 'Use Glyph Of Fortification'];
		break;
		case "select":
			if (c[1] === 'other-units') return ['key-select', 'other', 'Select All Other Units'];
			if (c[1] === 'controlgroup') return ['key-select', 'cg-' + c[2], 'Control-Group ' + c[2]];
			if (c[1] === 'all-units') return ['key-select', 'all', 'Select All Units'];
			return ['key-select', c[1], 'Select ' + window.capitalize(c[1])];
		break;
		case "phrase":
			return ['key-communication', 'phrase', 'Phrase: ' + manta.data.phrases[c[1]]];
		break;
		case "camera":
			var matcher = {
				up: ['key-camera', <span>&uarr;</span>, 'Move Camera Up'],
				left: ['key-camera', <span>&larr;</span>, 'Move Camera Left'],
				down: ['key-camera', <span>&darr;</span>, 'Move Camera Down'],
				right: ['key-camera', <span>&rarr;</span>, 'Move Camera Right'],
				inspect: ['key-camera', 'inspect', 'Inspect Hero']
			};
			return matcher[c[1]];
		break;
		case "courier":
			switch (c[1]) {
				case "deliver":
					return ['key-other', 'c:deliver', 'Courier: Deliver Items'];
				break;
				case "burst":
					return ['key-other', 'c:burst', 'Courier: Speed Burst'];
				break;
			}
		break;
		case "command":
			return ['key-command', 'cmd', 'Custom Command: ' + c[1]];
		break;
		case "layout":
			return ['key-layout', parseInt(c[1], 10) + 1, 'Switches To Layout ' + (parseInt(c[1], 10) + 1)];
		break;
		default: return ['key-other', '#', '-'];
	}
};

window.matchSetting = manta.data.settings;

window.compareVersion = function (a, b) {
	if (!a) return -1;
	if (!b) return 1;

	var _a = a.split('.');
	var _b = b.split('.');

	var length = Math.max(_a.length, _b.length);

	for (var i = 0; i < length; i++) {
		var intA = parseInt(_a[i], 10);
		var intB = parseInt(_b[i], 10);
		if (intA < intB) {
			return -1;
		} else if (intA > intB) {
			return 1;
		}
	}

	return 0;
};

window.keyInfo = function (identity, state) {
	var b = state.preset.layouts[state.currentLayout].keybinds[identity];
	if (identity === state.preset.settings.engine.altKey) return ['key-basic', 'alt', 'Alt Modifier Key'];
	if (identity === false) return ['key-unavailable', '?', 'Key Not Available'];
	if (!b) return ['key-none', 'none', 'Not Bound'];
	return window.commandInfo(b);
};

window.onload = function () {
	ReactDOM.render((
		<ReactRouter.Router>
			<ReactRouter.Redirect from="/" to="home"/>
			<ReactRouter.Route path="/" component={Layout}>
				<ReactRouter.Route path="home" component={Home}/>
				<ReactRouter.Route path="layouts" component={Layouts}/>
				<ReactRouter.Route path="chatwheels" component={Chatwheels}/>
				<ReactRouter.Route path="cycles" component={Cycles}/>
				<ReactRouter.Route path="presets" component={Presets}>
					<ReactRouter.Route path="load" component={PresetsLoad}/>
					<ReactRouter.Route path="view" component={PresetsView}/>
					<ReactRouter.Route path="edit" component={PresetsEdit}/>
				</ReactRouter.Route>
				<ReactRouter.Route path="custom-code" component={CustomCode}/>
				<ReactRouter.Route path="extensions" component={Extensions}>
					<ReactRouter.Route path="chatwheels" component={ExtensionsChatwheels}/>
					<ReactRouter.Route path="cycles" component={ExtensionsCycles}/>
					<ReactRouter.Route path="layouts" component={ExtensionsLayouts}/>
				</ReactRouter.Route>
				<ReactRouter.Route path="settings" component={Settings}>
					<ReactRouter.Route path="gameplay" component={SettingsGameplay}/>
					<ReactRouter.Route path="performance" component={SettingsPerformance}/>
					<ReactRouter.Route path="engine" component={SettingsEngine}/>
				</ReactRouter.Route>
				{/* with id */}
				<ReactRouter.Route path="preset/:id" component={Preset}/>
				<ReactRouter.Route path="chatwheel/:id" component={Chatwheel}/>
				<ReactRouter.Route path="cycle/:id" component={Cycle}/>
			</ReactRouter.Route>
		</ReactRouter.Router>
	), document.getElementsByTagName('div')[0]);
};
