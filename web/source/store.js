var dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');

var manta = require('dota2-manta-config-engine');
var JSZip = require('jszip');

var _state = {};

var store = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		localStorage.preset = JSON.stringify(_state.preset);
		this.emit(constants.CHANGE);
	},
	addChangeListener: function (callback) {
		this.on(constants.CHANGE, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(constants.CHANGE, callback);
	},
	getState: function () {
		return _state;
	},
	purge: function () {
		_state = {
			currentLayout: 0,
			changer: {
				key: '',
				action: [],
				currentTab: 'tab-abilities'
			}
		}
		if (localStorage.preset) {
			_state.preset = JSON.parse(localStorage.preset);
			if (!_state.preset.layouts.length) {
				_state.preset.layouts.push({keybinds:{}});
			}
		} else {
			_state.preset = {
				"layouts": [{
			            "keybinds": {
			                "Q": ["ability", "quick", 0],
			                "W": ["ability", "quick", 1],
			                "E": ["ability", "quick", 2],
			                "D": ["ability", "quick", 3],
			                "F": ["ability", "quick", 4],
			                "R": ["ability", "quick", 5],

			                "T": ["item", "quick", 0],
			                "X": ["item", "quick", 1],
			                "C": ["item", "quick", 2],
			                "V": ["item", "quick", 3],
			                "B": ["item", "quick", 4],
			                "N": ["item", "quick", 5],

			                "A": ["attack"],
			                "S": ["stop"],
			                "ENTER": ["open", "chat"],
			                "H": ["voice", "team"],
			                "Y": ["item", "taunt"],
			                "U": ["learn", "stats"],
			                "'": ["open", "console"],

			                "F3": ["courier", "deliver"],
			                "F4": ["open", "scoreboard"],
			                "F5": ["buy", "quick"],
			                "F6": ["buy", "sticky"],
			                "F9": ["pause"],

			                "1": ["select", "hero"],
			                "2": ["select", "other-units"],
			                "3": ["select", "controlgroup", "3"],
			                "4": ["select", "controlgroup", "4"],
			                "5": ["select", "courier"],

			                "TAB": ["command", "dota_cycle_selected"],

			                "`": ["view", "rune", "toggle"],

			                "SPACE": ["layout", 1],
			                "Z": ["chatwheel", 0],

			                "KP_0": ["chat", "team", "no"],
			                "KP_1": ["chat", "team", "yes"],
			                "KP_2": ["chat", "team", "no"],
			                "KP_3": ["chat", "student", "test"],
			                "KP_4": ["phrase", 9],
			                "KP_5": ["phrase", 10],
			                "KP_6": ["phrase", 11],
			                "KP_7": ["chat", "all", "> That just happened."],
			                "KP_8": ["phrase", 53],
			                "KP_9": ["phrase", 85]
			            }
			        },{
			            "keybinds": {
			                "Q": ["ability", "self", 0],
			                "W": ["ability", "self", 1],
			                "E": ["ability", "self", 2],
			                "D": ["ability", "self", 3],
			                "F": ["ability", "self", 4],
			                "R": ["ability", "self", 5],

			                "T": ["item", "self", 0],
			                "X": ["item", "self", 1],
			                "C": ["item", "self", 2],
			                "V": ["item", "self", 3],
			                "B": ["item", "self", 4],
			                "N": ["item", "self", 5],

			                "Z": ["chatwheel", 1],

			                "`": ["view", "base", "toggle"],

							"F3": ["courier", "burst"],

			                "SPACE": ["layout", 1],

			                "F11": ["reload"]
			            }
			        },{
			            "keybinds": {
			                "Q": ["ability", "normal", 0],
			                "W": ["ability", "normal", 1],
			                "E": ["ability", "normal", 2],
			                "D": ["ability", "normal", 3],
			                "F": ["ability", "normal", 4],
			                "R": ["ability", "normal", 5]
			            }
			        }
			    ],
			    "chatwheels": [
			        [8, 1, 2, 3, 29, 54, 6, 61],
			        [30, 66, 78, 41, 79, 70, 23, 68]
			    ],
			    "loadIndicator": ["sound", "ui/coins_big.vsnd_c"],
			    "netgraph": true,
			    "autoRepeatRightMouse": true,
			    "forceMovementDirection": true,
			    "unifiedUnitOrders": true,
			    "respawnCamera": false,
			    "disableAutoAttack": true,
			    "disableAutoAttackAfterSpell": true,
			    "rangefinder": true,
			    "playerNames": true,
			    "gridView": true,
			    "disableHeroFinder": true,
			    "disableZoom": true,
			    "minimapProximityScale": true,
			    "minimapProximityScaleDistance": 20,
			    "cameraSpeed": 9999
			};
		}
		store.emitChange();
	}
});

// fill store
store.purge();

dispatcher.register(function (action) {
	console.log('store', action);
	switch (action.type) {
		case constants.CHANGE_LAYOUT:
			_state.currentLayout = action.id;
			store.emitChange();
		break;
		case constants.CHANGE_BIND:
			_state.changer.key = action.id;
			_state.changer.action = _state.preset.layouts[_state.currentLayout].keybinds[action.id] || [];
			store.emitChange();
			$('#bind-changer').modal('show');
		break;
		case constants.SAVE_BINDING:
			var command = [];
			switch (_state.changer.currentTab) {
				case 'tab-abilities':
					command = ['ability', $('#tab-abilities-mode').val(), $('#tab-abilities-slot').val()];
				break;
				case 'tab-items':
					command = ['item', $('#tab-items-mode').val(), $('#tab-items-slot').val()];
				break;
				case 'tab-select':
					command = ['select']
					var sel = $('#tab-select-data').val().split(',');
					for (var i = 0; i < sel.length; i++) {
						command.push(sel[i]);
					}
				break;
				case 'tab-open':
					command = $('#tab-open-data').val().split(',');
				break;
				case 'tab-basic':
					var vals = $('#tab-basic-data').val().split(',');
					if (vals[0] !== "") {
						command = vals;
					} else {
						command = false;
					}
				break;
				case 'tab-layout':
					command = $('#tab-layout-data').val().split(',');
				break;
				case 'tab-chatwheel':
					command = $('#tab-chatwheel-data').val().split(',');
				break;
				case 'tab-phrase':
					command = $('#tab-phrase-data').val().split(',');
				break;
				case 'tab-command':
					command = ['command',$('#tab-command-data').val()];
				break;
				case 'tab-chat':
					command = ['chat', $('#tab-chat-data-channel').val(), $('#tab-chat-data-message').val()];
				break;
			}
			if (command !== false) {
				console.log(_state.changer.key + ' -> ' + command);
				_state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key] = command;
			} else {
				console.log(_state.changer.key + ' deleted.');
				delete _state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key];
			}
			store.emitChange();
			$('#bind-changer').modal('hide');
		break;
		case constants.CLOSE_CHANGER:
			// reset and close
			_state.changer = {key: '', action: [], currentTab: 'tab-abilities'};
			store.emitChange();
			$('#tab-abilities').tab('show');
			$('#bind-changer').modal('hide');
		break;
		case constants.DOWNLOAD:
			var autoexec = manta.compile(_state.preset, function (err, data) {
				console.log(err, data);
				var zip = new JSZip();
				for (var i in data) {
					zip.file(i, data[i]);
				}
				zip.file('preset.json', JSON.stringify(_state.preset));
				var content = zip.generate({type:"blob"});
				saveAs(content, "manta-config.zip");
			});
		break;
		case constants.ADD_LAYOUT:
			_state.preset.layouts.push({keybinds:{}});
			store.emitChange();
		break;
		case constants.REMOVE_CURRENT_LAYOUT:
			var yes = prompt('Do you really want to delete layout ' + (_state.currentLayout + 1) + '? Type \'yes\' to continue.') === 'yes';
			if (yes) {
				_state.preset.layouts.splice(_state.currentLayout, 1);
				_state.currentLayout = 0;
				store.emitChange();
			}
		break;
		case constants.ACTIVATE_TAB:
			_state.changer.currentTab = action.id;
		break;
	}
});

module.exports = store;
