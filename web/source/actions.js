var dispatcher = require('./dispatcher');
var constants = require('./constants');

var actions = {
	loadKeyboardLayout: function () {
		dispatcher.dispatch({
			type: constants.LOAD_KEYBOARD_LAYOUT
		});
	},
	changeLayout: function (id) {
		dispatcher.dispatch({
			type: constants.CHANGE_LAYOUT,
			id: id
		});
	},
	changeBind: function (id) {
		dispatcher.dispatch({
			type: constants.CHANGE_BIND,
			id: id
		});
	},
	closeChanger: function () {
		dispatcher.dispatch({
			type: constants.CLOSE_CHANGER
		});
	},
	saveBinding: function () {
		dispatcher.dispatch({
			type: constants.SAVE_BINDING
		});
	},
	download: function () {
		dispatcher.dispatch({
			type: constants.DOWNLOAD
		});
	},
	activateTab: function (id) {
		dispatcher.dispatch({
			type: constants.ACTIVATE_TAB,
			id: id
		});
	},
	addLayout: function () {
		dispatcher.dispatch({
			type: constants.ADD_LAYOUT
		});
	},
	removeCurrentLayout: function () {
		dispatcher.dispatch({
			type: constants.REMOVE_CURRENT_LAYOUT
		});
	},
	importPreset: function () {
		dispatcher.dispatch({
			type: constants.IMPORT_PRESET
		});
	},
	exportPreset: function () {
		dispatcher.dispatch({
			type: constants.EXPORT_PRESET
		});
	},
	changeSetting: function (domain, id, value) {
		dispatcher.dispatch({
			type: constants.CHANGE_SETTING,
			id: id,
			value: value,
			domain: domain
		});
	},
	changeChatwheel: function (wheel, slot, value) {
		dispatcher.dispatch({
			type: constants.CHANGE_CHATWHEEL,
			wheel: wheel,
			slot: slot,
			value: value
		});
	},
	addChatwheel: function () {
		dispatcher.dispatch({
			type: constants.ADD_CHATWHEEL
		});
	},
	removeChatwheel: function (slot) {
		dispatcher.dispatch({
			type: constants.REMOVE_CHATWHEEL,
			slot: slot
		});
	},
	addCycle: function () {
		dispatcher.dispatch({
			type: constants.CYCLE_ADD
		});
	},
	removeCycle: function (id) {
		dispatcher.dispatch({
			type: constants.CYCLE_REMOVE,
			id: id
		});
	},
	addCycleItem: function (id) {
		dispatcher.dispatch({
			type: constants.CYCLE_ADD_ITEM,
			id: id
		});
	},
	moveCycleUp: function (id, slot) {
		dispatcher.dispatch({
			type: constants.CYCLE_MOVE_UP,
			id: id,
			slot: slot
		});
	},
	moveCycleDown: function (id, slot) {
		dispatcher.dispatch({
			type: constants.CYCLE_MOVE_DOWN,
			id: id,
			slot: slot
		});
	},
	removeCycleItem: function (id, slot) {
		dispatcher.dispatch({
			type: constants.CYCLE_REMOVE_ITEM,
			id: id,
			slot: slot
		});
	},
	removeDialogAbort: function () {
		dispatcher.dispatch({
			type: constants.REMOVE_DIALOG_ABORT
		});
	},
	removeDialogContinue: function () {
		dispatcher.dispatch({
			type: constants.REMOVE_DIALOG_CONTINUE
		});
	},
	showRemoveDialog: function (mode, id, child) {
		dispatcher.dispatch({
			type: constants.SHOW_REMOVE_DIALOG,
			mode: mode,
			id: id,
			child: child
		});
	},
	remapAltKey: function () {
		dispatcher.dispatch({
			type: constants.REMAP_ALT_KEY
		});
	}
};

module.exports = actions;
