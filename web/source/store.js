var dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('../constants');
var actions = require('../actions');
var assign = require('object-assign');

var _state = {};

var store = assign({}, EventEmitter.prototype, {
	emitChange: function emitChange () {
		this.emit(constants.CHANGE);
	},
	addChangeListener: function addChangeListener (callback) {
		this.on(constants.CHANGE, callback);
	},
	removeChangeListener: function removeChangeListener (callback) {
		this.removeListener(constants.CHANGE, callback);
	},
	purge: function purge () {
		_state = {};
		store.emitChange();
	}
});

// fill store
store.purge();

dispatcher.register(function (action) {
	console.log('store', action);
	switch (action.type) {
		case constants.UPDATE_APPLICATION:

		break;
	}
});

module.exports = store;
