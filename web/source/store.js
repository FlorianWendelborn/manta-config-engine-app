var dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');

var _state = {};

var store = assign({}, EventEmitter.prototype, {
	emitChange: function () {
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
				key: ''
			},
		    preset: {
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
			}
		};
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
			store.emitChange();
			$('#bind-changer').modal('show');
		break;
		case constants.SAVE_BINDING:

		break;
		case constants.CLOSE_CHANGER:
			$('#bind-changer').modal('hide');
		break;
	}
});

module.exports = store;
