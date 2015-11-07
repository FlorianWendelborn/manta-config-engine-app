var dispatcher = require('../dispatcher');
var constants = require('../constants');

var actions = {
	updateApplication: function () {
		dispatcher.dispatch({
			type: constants.UPDATE_APPLICATION
		});
	}
};

module.exports = actions;
