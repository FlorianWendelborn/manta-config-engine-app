var store = require('../store');
var actions = require('../actions');

var ReactMarkdown = require('react-markdown');

var Preset = React.createClass({
	getInitialState: function () {
		return {
			id: this.props.params.id,
			title: this.props.params.id,
			description: 'loading'
		};
	},
	componentDidMount: function () {
		var that = this;
		$.getJSON('presets/' + this.state.id + '.json', function (data) {
			that.setState({
				description: data.description,
				title: data.title
			});
		});
	},
	render: function () {
		return (
			<div className="preset">
				<div className="jumbotron header">
					<div className="container">
						<h1>{this.state.title}</h1>
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
				<div className="container">
					<ReactMarkdown source={this.state.description}/>
				</div>
			</div>
		);
	},
	click: function () {
		actions.loadPreset(this.state.id);
	}
});

module.exports = Preset;
