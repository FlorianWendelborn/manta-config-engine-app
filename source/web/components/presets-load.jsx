var store = require('../store');
var actions = require('../actions');

var react = require('react');
var ReactMarkdown = require('react-markdown');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var presetList = [];
		for (var i = 0; i < this.state.presets.length; i++) {
			presetList.push(
				<Item id={this.state.presets[i]}/>
			);
		}
		return (
			<div className="container">
				<br/>
				<div className="row">
					<div className="col-sm-6">
						<div className="media">
							<div className="media-left media-middle">
								<i className="glyphicon glyphicon-fire" style={{fontSize: '4em'}}/>
							</div>
							<div className="media-body">
								<h4 className="media-heading">Be Careful Here</h4>
								Importing a preset <strong>will overwrite your current one</strong>. Make sure to export it first, if you want to use your current preset later.
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="media">
							<div className="media-left media-middle">
								<i className="glyphicon glyphicon-share" style={{fontSize: '4em'}}/>
							</div>
							<div className="media-body">
								<h4 className="media-heading">Share Your Preset With The World</h4>
								Submit a <a href="https://github.com/dodekeract/manta-config-engine/pulls">pull-request</a> containing your <code>preset.json</code> to the <a href="https://github.com/dodekeract/manta-config-engine/tree/master/presets">Engine Repository</a>. Just make sure to give it a fitting name first.
							</div>
						</div>
					</div>
				</div>
				<br/>
				<ul className="list-group">
					{presetList}
				</ul>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Item = React.createClass({
	render: function () {
		return (
			<li className="list-group-item">
				{this.props.id} <a href={'#/preset/' + this.props.id} className="btn btn-default"><i className="glyphicon glyphicon-eye-open"/> View Preset</a>
			</li>
		);
	}
});

module.exports = Component;
