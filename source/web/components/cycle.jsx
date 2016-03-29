var ReactMarkdown = require('react-markdown');

var store = require('../store');
var actions = require('../actions');

var Preset = React.createClass({
	getInitialState: function () {
		return {
			id: this.props.params.id,
			title: this.props.params.id,
			actions: [],
			description: 'loading',
			version: '0.0.0'
		};
	},
	componentDidMount: function () {
		var that = this;
		$.getJSON('cycles/' + this.state.id + '.json', function (data) {
			that.setState({
				description: data.description,
				title: data.title,
				actions: data.actions,
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
							Decide if you want to add this cycle.
						</p>
						<div className="btn-group">
							<a className="btn btn-info" href={'https://github.com/dodekeract/manta-config-engine/tree/master/extensions/cycles/' + this.state.id + '.json'}><i className="glyphicon glyphicon-eye-open"/> View Cycle On GitHub</a>
							<button className="btn btn-success" onClick={this.click}><i className="glyphicon glyphicon-plus"/> Add Cycle</button>
							<a href="#/extensions/cycles" style={{textShadow: 'none'}} className="btn btn-warning"><i className="glyphicon glyphicon-arrow-left"/> Back</a>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="panel panel-default">
								<div className="panel-heading">Preview</div>
								<div className="panel-body">
									{this.state.actions}
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
		actions.loadCycle(this.state.id);
	}
});

module.exports = Preset;
