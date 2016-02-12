var ReactTooltip = require('../../../node_modules/react-tooltip/standalone/react-tooltip.min.js');

var actions = require('../actions');

var Component = React.createClass({
	render: function () {
		var sets = [];
		for (var i = 0; i < this.props.sets.length; i++) {
			sets.push(
				<Setting
					domain={this.props.domain}
					key={i}
					value={this.props.preset.settings[this.props.domain][this.props.sets[i]]}
					id={this.props.sets[i]}
					uniqueID={'settings-' + this.props.domain + '-' + this.props.sets[i]}
				/>
			);
		}
		return (
			<div>
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
	changeBoolean: function (e) {
		var match = [true, false, undefined];
		actions.changeSetting(this.props.domain, this.props.id, match[e.target.value]);
	},
	changeRange: function (e) {
		var value = e.target.value;
		var pattern = /^[0-9]*$/;
		var properties = window.matchSetting[this.props.domain][this.props.id];
		if (pattern.test(value) && parseInt(value) >= properties.min && parseInt(value) <= properties.max) {
			actions.changeSetting(this.props.domain, this.props.id, e.target.value);
		} else if (value === '') {
			actions.changeSetting(this.props.domain, this.props.id, undefined);
		}
	},
	changeChoice: function (e) {
		actions.changeSetting(this.props.domain, this.props.id, e.target.value);
	},
	changeFakeValue: function (e) {
		this.setState({
			fakeValue: e.target.value
		});
	},
	getInitialState: function () {
		return {
			fakeValue: this.props.value === undefined ? 'Not Set' : this.props.value
		};
	},
	componentWillReceiveProps: function (nextProps) {
		this.setState({
			fakeValue: nextProps.value === undefined ? 'Not Set' : nextProps.value
		});
	},
	render: function () {
		var properties = window.matchSetting[this.props.domain][this.props.id];
		var tip = properties.info ? (
				<span>
					<i className="glyphicon glyphicon-question-sign" data-tip data-for={this.props.uniqueID}/>
					<ReactTooltip id={this.props.uniqueID} place="top" effect="solid">
						{properties.info}
					</ReactTooltip>
				</span>
			) : '';
		switch (properties.type) {
			case "boolean":
				var value;
				if (this.props.value) value = 0;
				if (this.props.value === false) value = 1;
				if (this.props.value === undefined) value = 2;
				return (
					<div className="form-group form-group-sm">
						<label className="col-lg-7 control-label" for="formGroupInputSmall">{tip} {properties.label}</label>
						<div className="col-lg-5">
							<select className="form-control" onChange={this.changeBoolean} value={value}>
								<option value="0">Enabled</option>
								<option value="1">Disabled</option>
								<option value="2">Not Set</option>
							</select>
						</div>
					</div>
				);
			break;
			case "range":
				return (
					<div className="form-group form-group-sm">
						<label className="col-lg-4 control-label" for="formGroupInputSmall">{tip} {properties.label}</label>
						<div className="col-lg-3" for="formGroupInputSmall">
							<input type="text" className="form-control" value={this.state.fakeValue} onSubmit={this.preventDefault} onChange={this.changeFakeValue} onBlur={this.changeRange}/>
						</div>
						<div className="col-lg-5">
							<input type="range" className="form-control" value={this.props.value} min={properties.min} max={properties.max} onChange={this.changeRange}/>
						</div>
					</div>
				);
			break;
			case "choice":
				var options = [];

				for (var i = 0; i < properties.options.length; i++) {
					options.push(<option key={i} value={properties.options[i].id}>{properties.options[i].label}</option>);
				}

				var value = this.props.value;
				return (
					<div className="form-group form-group-sm">
						<label className="col-lg-7 control-label" for="formGroupInputSmall">{tip} {properties.label}</label>
						<div className="col-lg-5">
							<select className="form-control" onChange={this.changeChoice} value={value}>
								{options}
							</select>
						</div>
					</div>
				);
			break;
			default:
				return (<div>Something Went Wrong. {this.props.id}</div>);
		}
	},
	preventDefault: function (e) {
		e.preventDefault();
	}
});

module.exports = Component;
