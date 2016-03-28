var dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');

var manta = require('dota2-manta-config-engine');
var JSZip = require('jszip');

var blankPreset = require('../../node_modules/dota2-manta-config-engine/presets/blank.json');
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
				data: [],
				mode: ''
			},
			dialog: {
				confirmDelete: {
					child: '',
					type: false,
					id: false
				},
				error: {
					description: ''
				}
			},
			keyboardLayout: defaultKeyboardLayout
		};
		if (localStorage.preset) {
			_state.preset = manta.update(JSON.parse(localStorage.preset));
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
			_state.changer = {mode: 'bind', data: [], key: action.id, view: -1};
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
				// handle bind and cycle mode
				if (_state.changer.mode !== 'cycle') {
					_state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key] = action.options;
				} else {
					_state.preset.cycles[_state.changer.key].push(action.options);
				}
			}
			store.emitChange();
			$('#bind-changer').modal('hide');
		break;

		case constants.KEYBINDING_CHANGER_CLOSE:
			$('#bind-changer').modal('hide');
		break;

		case constants.KEYBINDING_CHANGER_RESET:
			_state.changer.view = -1;
			_state.changer.data = [];
			store.emitChange();
		break;

		// error-dialog

		case constants.ERROR_DIALOG_CLOSE:
			$('#error-dialog').modal('hide');
		break;

		case constants.ERROR_DIALOG_OPEN:
			_state.dialog.error.description = action.description;
			store.emitChange();
			$('#error-dialog').modal('show');
		break;

		// preset

		case constants.PRESET_EXPORT:
			var blob = new Blob([JSON.stringify(_state.preset, null, '\t')], {type: 'text/json;charset=utf-8'});
			saveAs(blob, 'preset.json');
		break;

		case constants.PRESET_IMPORT:
			$('#file-input')[0].click();
		break;

		case constants.PRESET_IMPORT_FILE:
			var reader = new FileReader();
			reader.onload = function (e) {
				_state.preset = JSON.parse(reader.result);
				location.href = '#editor';
				actions.loadKeyboardLayout();
				store.emitChange();
			};
			reader.readAsText($('#file-input')[0].files[0]);
		break;

		// basic

		case constants.RESET:
			delete localStorage.preset;
			store.purge();
			store.emitChange();
		break;

		case constants.RESET_TO_BLANK:
			localStorage.preset = JSON.stringify(blankPreset);
			store.purge();
			store.emitChange();
		break;

		case constants.DOWNLOAD:
			manta.compile(_state.preset, function (err, data) {
				console.log(err, data);
				var zip = new JSZip();
				for (var i in data) {
					zip.file(i, data[i]);
				}
				zip.file('preset.json', JSON.stringify(_state.preset, null, '\t'));
				var content = zip.generate({type:"blob"});
				saveAs(content, "manta-config.zip");
			});
		break;

		// cycle

		case constants.CYCLE_ADD:
			_state.preset.cycles.push([]);
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
			_state.changer = {mode: 'cycle', data: [], key: action.id, view: -1};
			store.emitChange();
			$('#bind-changer').modal('show');
		break;

		case constants.CYCLE_REMOVE_ITEM:
			_state.preset.cycles[action.id].splice(action.slot, 1);
			store.emitChange();
		break;

		// other

		case constants.ADD_LAYOUT:
			_state.preset.layouts.push({keybinds:{}});
			store.emitChange();
		break;
		case constants.ACTIVATE_TAB:
			_state.changer.currentTab = action.id;
		break;
		case constants.CHANGE_CHATWHEEL:
			_state.preset.chatwheels[action.wheel][action.slot] = parseInt(action.value, 10);
			store.emitChange();
		break;
		case constants.ADD_CHATWHEEL:
			_state.preset.chatwheels.push([0, 1, 2, 3, 4, 5, 6, 7]);
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
