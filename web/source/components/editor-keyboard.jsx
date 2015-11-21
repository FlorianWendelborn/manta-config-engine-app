var store = require('../store');
var actions = require('../actions');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var rows = [];
		for (var i = 0; i < this.state.keyboardLayout.rows.length; i++) {
			rows.push(<KeyRow key={i} data={this.state.keyboardLayout.rows[i]}/>);
		}
		return (
			<div className="custom-container custom-row">
				{rows}
			</div>
		);
	},
	componentDidUpdate: function () {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip('destroy');
			$('[data-toggle="tooltip"]').tooltip();
		})
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var KeyRow = React.createClass({
	render: function () {
		var style = {};
		if (this.props.data.type === 'separator') {
			return (
				<div className="custom-row" style={{height: '20px'}}></div>
			);
		} else {
			var keys = [];

			if (this.props.data.keys) { // #TODO should be able to remove that
				for (var i = 0; i < this.props.data.keys.length; i++) {
					var name = this.props.data.keys[i][0] || '';
					var identity = this.props.data.keys[i][1];
					var width = this.props.data.keys[i][2] || 1;
					keys.push(<Key name={name} identity={identity} width={width} key={i}/>);
				}
			}

			return (
				<div className="custom-row">{keys}</div>
			);
		}
	}
});

var Key = React.createClass({
	render: function () {
		var span = this.props.width.toString().replace(/\./g, '-');
		if (this.props.name === 'empty') {
			return (<div className={"custom-col key-empty span_" + span}>&nbsp;<br/>&nbsp;</div>);
		} else {
			var keyBind = window.keyInfo(this.props.identity),
				keyClass, keyFunction, keyTitle;

			keyClass = keyBind[0] || '-';
			keyFunction = keyBind[1] || '-';
			keyTitle = keyBind[2] || '-';

			var keyName = this.props.name;
			return (
				<div onClick={this._onClick} className={"custom-col span_" + span + ' ' + keyClass} data-toggle="tooltip" data-placement="top" title={keyTitle}>{keyName}<br/>{keyFunction}</div>
			);
		}
	},
	_onClick: function () {
		actions.changeBind(this.props.identity);
	}
});

module.exports = Component;
