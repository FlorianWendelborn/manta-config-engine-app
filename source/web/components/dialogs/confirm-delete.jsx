var store = require('../../store');
var actions = require('../../actions');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		return (
			<div className="modal fade" id="dialog-confirm-delete">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 className="modal-title">Confirm Deletion</h4>
						</div>
						<div className="modal-body">
							{this.state.dialog.confirmDelete.child}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-warning" onClick={actions.removeDialogAbort}>Cancel</button>
							<button type="button" className="btn btn-danger" onClick={actions.removeDialogContinue}>Delete</button>
						</div>
					</div>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = Component;
