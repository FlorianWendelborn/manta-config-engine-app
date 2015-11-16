var dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');

var manta = require('dota2-manta-config-engine');
var JSZip = require('jszip');

var defaultPreset = require('../../node_modules/dota2-manta-config-engine/presets/default.json');

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
			},
			dialog: {
				confirmDelete: {
					child: <div>none</div>,
					type: false,
					id: false
				}
			}
		}
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
			if (!_state.preset.settings.engine.altKey) _state.preset.settings.engine.altKey = 'ALT';
		} else {
			_state.preset = defaultPreset;
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
			_state.changer.mode = 'layout';
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
				case 'tab-cycle':
					command = $('#tab-cycle-data').val().split(',');
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
				case 'tab-camera':
					command = $('#tab-camera-data').val().split(',');
				break;
				case 'tab-hp':
					command = ['health', $('#tab-hp-data').val()];
				break;
			}
			if (command !== false && _state.changer.mode !== 'cycle') {
				console.log(_state.changer.key, command);
				_state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key] = command;
			} else if (_state.changer.mode !== 'cycle') {
				console.log(_state.changer.key + ' deleted.');
				delete _state.preset.layouts[_state.currentLayout].keybinds[_state.changer.key];
			} else if (command !== false) {
				console.log('Cycle Bound: ' + command);
				_state.preset.cycles[_state.changer.key].push(command);
			} else {
				console.log('Cycle Bound: ignored');
			}
			store.emitChange();
			$('#bind-changer').modal('hide');
		break;
		case constants.CLOSE_CHANGER:
			_state.changer = {key: '', action: [], currentTab: 'tab-abilities'};
			store.emitChange();
			$('#tab-abilities').tab('show');
			$('#bind-changer').modal('hide');
		break;
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
			_state.preset.chatwheels.push([0,1,2,3,4,5,6,7]);
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
				var swap = _state.preset.cycles[action.id][action.slot-1];
				_state.preset.cycles[action.id][action.slot-1] = _state.preset.cycles[action.id][action.slot];
				_state.preset.cycles[action.id][action.slot] = swap;
			}
			store.emitChange();
		break;
		case constants.CYCLE_MOVE_DOWN:
			if (action.slot < _state.preset.cycles[action.id].length-1) {
				var swap = _state.preset.cycles[action.id][action.slot+1];
				_state.preset.cycles[action.id][action.slot+1] = _state.preset.cycles[action.id][action.slot];
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

module.exports = store;
