var dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');

var manta = require('dota2-manta-config-engine');
var JSZip = require('jszip');

var defaultPreset = require('../../node_modules/dota2-manta-config-engine/presets/default.json');
var defaultKeyboardLayout = require('./keyboard-layouts/en-us.json');

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
				view: -1,
				data: []
			},
			dialog: {
				confirmDelete: {
					child: '',
					type: false,
					id: false
				}
			},
			keyboardLayout: defaultKeyboardLayout
		};
		if (localStorage.preset) {
			_state.preset = JSON.parse(localStorage.preset);
			if (!_state.preset.layouts.length) {
				_state.preset.layouts.push({keybinds:{}});
			}
			if (!_state.preset.cycles) _state.preset.cycles = [];
			if (!_state.preset.settings) _state.preset.settings = {};
			if (!_state.preset.settings.gameplay) _state.preset.settings.gameplay = {};
			if (!_state.preset.settings.performance) _state.preset.settings.performance = {};
			if (!_state.preset.settings.engine) _state.preset.settings.engine = {
				altKey: 'ALT'
			};
			if (!_state.preset.settings.engine.keyboardLayout) _state.preset.settings.engine.keyboardLayout = 'en-US';
			if (!_state.preset.settings.engine.altKey) _state.preset.settings.engine.altKey = 'ALT';
		} else {
			_state.preset = defaultPreset;
		}
		if (_state.preset.settings.engine.keyboardLayout !== defaultKeyboardLayout.language) {
			actions.loadKeyboardLayout();
		}
		store.emitChange();
	}
});

dispatcher.register(function (action) {
	console.log('store', action);
	switch (action.type) {
		case constants.LOAD_KEYBOARD_LAYOUT:
			$.getJSON('keyboard-layouts/' + _state.preset.settings.engine.keyboardLayout.toLowerCase() + '.json', function (keyboardLayout) {
				_state.keyboardLayout = keyboardLayout;
				store.emitChange();
			});
		break;
		case constants.CHANGE_LAYOUT:
			_state.currentLayout = action.id;
			store.emitChange();
		break;

		// keybinding-changer

		case constants.KEYBINDING_CHANGER_OPEN:
			_state.changer = {data: [], key: action.id, view: -1};
			store.emitChange();
			$('#bind-changer').modal('show');
		break;

		case constants.KEYBINDING_CHANGER_SET_VIEW:
			_state.changer.view = action.view;
			_state.changer.data = action.data;
			store.emitChange();
		break;

		case constants.KEYBINDING_CHANGER_SET_DATA:
			_state.changer.data[action.index] = action.data;
			store.emitChange();
		break;

		case constants.KEYBINDING_CHANGER_SAVE:
			if (action.options === false) {
				delete _state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key];
			} else {
				_state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key] = action.options;
			}
			console.log(action.options);
			store.emitChange();
			$('#bind-changer').modal('hide');
		break;

		case constants.KEYBINDING_CHANGER_CLOSE:
			store.emitChange();
			$('#bind-changer').modal('hide');
		break;

		case constants.KEYBINDING_CHANGER_RESET:
			_state.changer.view = -1;
			_state.changer.data = [];
			store.emitChange();
		break;

		// other

		case constants.DOWNLOAD:
			manta.compile(_state.preset, function (err, data) {
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
		case constants.ACTIVATE_TAB:
			_state.changer.currentTab = action.id;
		break;
		case constants.CHANGE_CHATWHEEL:
			_state.preset.chatwheels[action.wheel][action.slot] = parseInt(action.value);
			store.emitChange();
		break;
		case constants.ADD_CHATWHEEL:
			_state.preset.chatwheels.push([0, 1, 2, 3, 4, 5, 6, 7]);
			store.emitChange();
		break;
		case constants.CYCLE_ADD:
			_state.preset.cycles.push([]);
			store.emitChange();
		break;
		case constants.SHOW_REMOVE_DIALOG:
			_state.dialog.confirmDelete = {
				child: action.child,
				mode: action.mode,
				id: action.id
			};
			store.emitChange();
			$('#dialog-confirm-delete').modal('show');
		break;
		case constants.REMOVE_DIALOG_ABORT:
			$('#dialog-confirm-delete').modal('hide');
		break;
		case constants.REMOVE_DIALOG_CONTINUE:
			$('#dialog-confirm-delete').modal('hide');
			console.log(_state.dialog.confirmDelete);
			switch (_state.dialog.confirmDelete.mode) {
				case "cycle":
					_state.preset.cycles.splice(_state.dialog.confirmDelete.id, 1);
				break;
				case "chatwheel":
					_state.preset.chatwheels.splice(_state.dialog.confirmDelete.id, 1);
				break;
				case "layout":
					_state.preset.layouts.splice(_state.dialog.confirmDelete.id, 1);
					_state.currentLayout = 0;
				break;
			}
			store.emitChange();
		break;
		case constants.CYCLE_MOVE_UP:
			if (action.slot) {
				var swap = _state.preset.cycles[action.id][action.slot - 1];
				_state.preset.cycles[action.id][action.slot - 1] = _state.preset.cycles[action.id][action.slot];
				_state.preset.cycles[action.id][action.slot] = swap;
			}
			store.emitChange();
		break;
		case constants.CYCLE_MOVE_DOWN:
			if (action.slot < _state.preset.cycles[action.id].length - 1) {
				var swap = _state.preset.cycles[action.id][action.slot + 1];
				_state.preset.cycles[action.id][action.slot + 1] = _state.preset.cycles[action.id][action.slot];
				_state.preset.cycles[action.id][action.slot] = swap;
			}
			store.emitChange();
		break;
		case constants.CYCLE_ADD_ITEM:
			_state.changer.mode = 'cycle';
			_state.changer.key = action.id;
			_state.changer.action = [];
			store.emitChange();
			$('#bind-changer').modal('show');
		break;
		case constants.CYCLE_REMOVE_ITEM:
			_state.preset.cycles[action.id].splice(action.slot, 1);
			store.emitChange();
		break;
		case constants.CHANGE_SETTING:
			if (action.id === 'keyboardLayout') {
				// force async
				setTimeout(function () {
					actions.loadKeyboardLayout();
				}, 0);
			}
			if (action.value === undefined) {
				delete _state.preset.settings[action.domain][action.id];
			} else {
				_state.preset.settings[action.domain][action.id] = action.value;
			}
			store.emitChange();
		break;
		case constants.REMAP_ALT_KEY:
			var key = _state.changer.key;
			for (var i = 0; i < _state.preset.layouts.length; i++) {
				delete _state.preset.layouts[i].keybinds[key];
			}
			_state.preset.settings.engine.altKey = key;
			store.emitChange();
			$('#bind-changer').modal('hide');
		break;
	}
});

// fill store
store.purge();

module.exports = store;
