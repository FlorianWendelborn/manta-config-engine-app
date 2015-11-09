var store = require('../store');
var actions = require('../actions');

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
			<div className="modal fade" id="bind-changer" tabindex="-1">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">Keybinding Changer</h4>
						</div>
						<div className="modal-body">
							Key: {this.state.changer.key}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-error" onClick={actions.closeChanger}>Cancel</button>
							<button type="button" className="btn btn-primary" onClick={actions.saveBinding}>Save</button>
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
