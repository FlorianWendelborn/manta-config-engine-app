var actions = require('../../actions');
var store = require('../../store');

var ErrorDialog = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		return (
			<div className="modal fade" id="error-dialog">
				<div className="modal-dialog modal-sm" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 className="modal-title">Something Went Wrong</h4>
						</div>
						<div className="modal-body">
							{this.state.dialog.error.description}
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

module.exports = ErrorDialog;
