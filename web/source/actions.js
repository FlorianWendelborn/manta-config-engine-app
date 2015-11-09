var dispatcher = require('./dispatcher');
var constants = require('./constants');

var actions = {
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
	}
};

module.exports = actions;
