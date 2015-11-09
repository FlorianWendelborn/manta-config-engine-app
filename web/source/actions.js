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
	}
};

module.exports = actions;
