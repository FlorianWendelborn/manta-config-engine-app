var store = require('../store');
var actions = require('../actions');

var ReactMarkdown = require('react-markdown');

var Keyboard = require('./keyboard.jsx');
var defaultPreset = require('../../../node_modules/dota2-manta-config-engine/presets/default.json');
var defaultKeyboardLayout = require('../keyboard-layouts/en-us.json');

var Preset = React.createClass({
	getInitialState: function () {
		return {
			preset: defaultPreset,
			keyboardLayout: defaultKeyboardLayout,
			currentLayout: 0,
			id: this.props.params.id
		};
	},
	componentDidMount: function () {
		var that = this;
		$.getJSON('presets/' + this.state.id + '.json', function (data) {
			that.setState({
				preset: data
			});
			$.getJSON('keyboard-layouts/' + that.state.preset.settings.engine.keyboardLayout.toLowerCase() + '.json', function (data) {
				that.setState({
					keyboardLayout: data
				});
			});
		});
	},
	render: function () {
		var controls = [];
		for (var i = 0; i < this.state.preset.layouts.length; i++) {
			controls.push(
				<LayoutSelector update={this.update} id={i}/>
			);
		}
		return (
			<div className="preset">
				<div className="jumbotron header">
					<div className="container">
						<h1>{this.state.preset.title} <small>by <a href={this.state.preset.author.link}>{this.state.preset.author.name}</a></small></h1>
						<p>
							Decide if you want to use this preset.
						</p>
						<div className="btn-group">
							<a className="btn btn-success" href={'https://github.com/dodekeract/manta-config-engine/tree/master/presets/' + this.props.params.presetId + '.json'}><i className="glyphicon glyphicon-eye-open"/> View Preset On GitHub</a>
							<button className="btn btn-danger" onClick={this.click}><i className="glyphicon glyphicon-refresh"/> Load Preset And Overwrite My Preset</button>
							<a href="#/presets/load" style={{textShadow: 'none'}} className="btn btn-warning"><i className="glyphicon glyphicon-arrow-left"/> Back</a>
						</div>
					</div>
				</div>
				<nav className="navbar navbar-inverse navbar-default navbar-static-top" style={{marginTop: '-30px'}}>
					<div className="container">
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<div className="btn-group navbar-btn" role="group">
								{controls}
							</div>
						</div>
					</div>
				</nav>
				<div className="jumbotron keyboard">
					<div className="container">
						<Keyboard state={this.state} interactive={false} invertFirstRow={true} uniqueID={'preset-' + this.state.id}/>
					</div>
				</div>
				<div className="container">
					<div className="panel panel-default">
						<div className="panel-heading">Description</div>
						<div className="panel-body">
							<ReactMarkdown source={this.state.preset.description}/>
						</div>
						<div className="panel-footer">
							Last Updated In Manta Version {this.state.preset.version}
						</div>
					</div>
				</div>
			</div>
		);
	},
	update: function (id) {
		this.setState({
			currentLayout: id
		});
	},
	click: function () {
		actions.loadPreset(this.state.id);
	}
});

var LayoutSelector = React.createClass({
	render: function () {
		return (
			<button className="btn btn-warning" onClick={this.click}>
				Layout {Number(this.props.id) + 1}
			</button>
		);
	},
	click: function () {
		this.props.update(this.props.id);
	}
});

module.exports = Preset;
