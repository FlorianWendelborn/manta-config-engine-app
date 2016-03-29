var ReactMarkdown = require('react-markdown');

var store = require('../store');
var actions = require('../actions');

var Chatwheel = require('./chatwheels.jsx').Chatwheel;

var Preset = React.createClass({
	getInitialState: function () {
		return {
			id: this.props.params.id,
			title: this.props.params.id,
			phrases: [0,0,0,0,0,0,0,0],
			description: 'loading',
			version: '0.0.0'
		};
	},
	componentDidMount: function () {
		var that = this;
		$.getJSON('chatwheels/' + this.state.id + '.json', function (data) {
			that.setState({
				description: data.description,
				title: data.title,
				phrases: data.phrases,
				version: data.version
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
							Decide if you want to add this chatwheel.
						</p>
						<div className="btn-group">
							<a className="btn btn-info" href={'https://github.com/dodekeract/manta-config-engine/tree/master/extensions/chatwheels/' + this.state.id + '.json'}><i className="glyphicon glyphicon-eye-open"/> View Chatwheel On GitHub</a>
							<button className="btn btn-success" onClick={this.click}><i className="glyphicon glyphicon-plus"/> Add Chatwheel</button>
							<a href="#/extensions/chatwheels" style={{textShadow: 'none'}} className="btn btn-warning"><i className="glyphicon glyphicon-arrow-left"/> Back</a>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="panel panel-default">
								<div className="panel-heading">Preview</div>
								<div className="panel-body">
									<Chatwheel phrases={this.state.phrases} cols={1} interactive={false}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="panel panel-default">
								<div className="panel-heading">Description</div>
								<div className="panel-body">
									<ReactMarkdown source={this.state.description}/>
								</div>
								<div className="panel-footer">
									Last Updated In Manta Version {this.state.version}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	click: function () {
		actions.loadChatwheel(this.state.id);
	}
});

module.exports = Preset;
