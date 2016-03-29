var store = require('../store');
var actions = require('../actions');

var ReactMarkdown = require('react-markdown');

var PresetsEdit = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var preset = JSON.stringify(this.state.preset, null, 4);
		return (
			<div className="container">
				<br/>
				<div className="row">
					<div className="col-sm-6">
						<input type="text" value={this.state.preset.title} onChange={this.changeTitle} className="form-control"/>
					</div>
					<div className="col-sm-6">
						<h1 style={{marginTop: 0}}>{this.state.preset.title}</h1>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-sm-6">
						<textarea className="form-control" value={this.state.preset.description} onChange={this.changeDescription} rows="20"/>
					</div>
					<div className="col-sm-6">
						<ReactMarkdown source={this.state.preset.description}/>
					</div>
				</div>
			</div>
		);
	},
	change: function (e) {
		actions.preset.changeDescription(e.target.value);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

module.exports = PresetsEdit;
