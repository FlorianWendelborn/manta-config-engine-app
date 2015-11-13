var actions = require('../actions');

var Component = React.createClass({
	render: function () {
		var sets = [];
		for (var i = 0; i < this.props.sets.length; i++) {
			sets.push(<Setting domain={this.props.domain} key={i} value={this.props.preset.settings[this.props.domain][this.props.sets[i]]} id={this.props.sets[i]}/>);
		}
		return (
			<div className="col-md-4">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title text-center">{this.props.title}</h3>
					</div>
					<div className="panel-body" style={{paddingBottom: '0px'}}>
						<form className="form-horizontal">
							{sets}
						</form>
					</div>
				</div>
			</div>
		);
	}
});

var Setting = React.createClass({
	change: function (e) {
		var match = [true, false, undefined];
		actions.changeSetting(this.props.id, match[e.target.value]);
	},
	render: function () {
		var label = window.matchSetting[this.props.domain][this.props.id].label;
		var options = [];
		if (this.props.value) {
			options.push(<option value="0" key="0" selected>Enabled</option>);
		} else {
			options.push(<option value="0" key="0">Enabled</option>)
		}
		if (this.props.value === false) {
			options.push(<option value="1" key="1" selected>Disabled</option>);
		} else {
			options.push(<option value="1" key="1">Disabled</option>);
		}
		if (this.props.value === undefined) {
			options.push(<option value="2" key="2" selected>Not Set</option>);
		} else {
			options.push(<option value="2" key="2">Not Set</option>);
		}
		return (
			<div className="form-group form-group-sm">
				<label className="col-lg-7 control-label" for="formGroupInputSmall">{label}</label>
				<div className="col-lg-5">
					<select className="form-control" onChange={this.change}>
						{options}
					</select>
				</div>
			</div>
		)
	}
});

module.exports = Component;
