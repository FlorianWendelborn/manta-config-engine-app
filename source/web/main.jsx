var Layout = require('./components/layout.jsx');
var Editor = require('./components/editor.jsx');
var Home = require('./components/home.jsx');
var Preset = require('./components/preset.jsx');
var Chatwheels = require('./components/chatwheels.jsx');
var CycleBuilder = require('./components/cycle-builder.jsx');

var Settings = require('./components/settings.jsx');
var SettingsGameplay = require('./components/settings-gameplay.jsx');
var SettingsPerformance = require('./components/settings-performance.jsx');
var SettingsEngine = require('./components/settings-engine.jsx');

var manta = require('dota2-manta-config-engine');

var store = require('./store');

window.commandInfo = function (c) {
	switch (c[0]) {
		case "ability":
			var match = [1, 2, 3, 4, 5, 'Ult'];
			if (c[2] === 'toggle') {
				return ['key-ability', c[1][0] + c[1][1] + '-to', 'Toggle Autocast'];
			} else {
				return ['key-ability', c[1][0] + c[1][1] + '-' + match[c[2]], c[1] + 'cast ability ' + match[c[2]]];
			}
		break;
		case "item":
			switch (c[1]) {
				case "taunt":
					return ['key-item', 'taunt', 'Taunt thy enemies.'];
				break;
				default: return ['key-item', c[1][0] + c[1][1] + '-' + (parseInt(c[2]) + 1), c[1] + 'cast item ' + (parseInt(c[2]) + 1)];
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
			return ['key-basic', (<span>&#8635;</span>), 'Reload the autoexec.'];
		break;
		case "chatwheel":
			return ['key-communication', 'CW-' + (parseInt(c[1]) + 1), 'Chatwheel ' + (parseInt(c[1]) + 1)];
		break;
		case "pause":
			return ['key-basic', 'pause', 'Pause the game.'];
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
			return ['key-other', c[1], 'Buy ' + c[1]];
		break;
		case "cycle":
			return ['key-cycle', (parseInt(c[1]) + 1), 'Cycle ' + (parseInt(c[1]) + 1)];
		break;
		case "open":
			return ['key-open', c[1], c[1]];
		break;
		case "view":
			return ['key-camera', c[1], 'View ' + c[1] + ' (' + c[2] + ')'];
		break;
		case "health":
			return ['key-other', 'H' + c[1], 'Healthbar separator every ' + c[1] + ' HP'];
		break;
		case "glyph":
			return ['key-basic', 'glyph', 'Use Glyph Of Fortification'];
		break;
		case "select":
			if (c[1] === 'other-units') return ['key-select', 'other', 'Select All Other Units'];
			if (c[1] === 'controlgroup') return ['key-select', 'CG-' + c[2], 'Control-Group ' + c[2]];
			if (c[1] === 'all-units') return ['key-select', 'all', 'Select All Units'];
			return ['key-select', c[1], 'Select ' + c[1]];
		break;
		case "phrase":
			return ['key-communication', 'phrase', 'Phrase: ' + manta.data.phrases[c[1]]];
		break;
		case "camera":
			var matcher = {
				up: ['key-camera', <span>&uarr;</span>, 'Move Camera Up'],
				left: ['key-camera', <span>&larr;</span>, 'Move Camera Left'],
				down: ['key-camera', <span>&darr;</span>, 'Move Camera Down'],
				right: ['key-camera', <span>&rarr;</span>, 'Move Camera Right']
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
			return ['key-command', 'Command', 'Custom Command: ' + c[1]];
		break;
		case "layout":
			return ['key-layout', parseInt(c[1]) + 1, 'Switches To Layout ' + (parseInt(c[1]) + 1)];
		break;
		default: return ['key-other', '#', '-'];
	}
};

window.matchSetting = manta.data.settings;

window.keyInfo = function (identity) {
	var state = store.getState();
	var b = state.preset.layouts[state.currentLayout].keybinds[identity];
	if (identity === state.preset.settings.engine.altKey) return ['key-basic', 'alt', 'Alt Modifier Key'];
	if (identity === false) return ['key-unavailable', '?', 'Key not available.'];
	if (identity === 'hidden') return ['key-hidden', <span>&nbsp;</span>, 'Might be used for additional weird key bindings later.'];
	if (!b) return ['key-none', 'none', 'No binding set.'];
	return window.commandInfo(b);
};

window.onload = function () {
	ReactDOM.render((
		<ReactRouter.Router>
			<ReactRouter.Redirect from="/" to="home"/>
			<ReactRouter.Route path="/" component={Layout}>
				<ReactRouter.Route path="home" component={Home} />
				<ReactRouter.Route path="editor" component={Editor} />
				<ReactRouter.Route path="chatwheels" component={Chatwheels} />
				<ReactRouter.Route path="cycle-builder" component={CycleBuilder} />
				<ReactRouter.Route path="preset" component={Preset} />
				<ReactRouter.Route path="settings" component={Settings}>
					<ReactRouter.Route path="gameplay" component={SettingsGameplay}/>
					<ReactRouter.Route path="performance" component={SettingsPerformance}/>
					<ReactRouter.Route path="engine" component={SettingsEngine}/>
				</ReactRouter.Route>
			</ReactRouter.Route>
		</ReactRouter.Router>
	), document.getElementsByTagName('div')[0]);
};
