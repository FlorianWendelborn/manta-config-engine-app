var store = require('../store');
var actions = require('../actions');

var phrases = require('dota2-manta-config-engine').phrases;

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var chatwheels = [];
		var cw = this.state.preset.chatwheels;
		for (var i = 0; i < cw.length; i++) {
			chatwheels.push(<Chatwheel id={i} key={i} phrases={cw[i]} />);
		}
		return (
			<div className="container">
				<button onClick={actions.addChatwheel} type="button" className="btn btn-success">Add Chatwheel</button>
				{chatwheels}
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Chatwheel = React.createClass({
	render: function () {
		var p = [];
		for (var j = 0; j < this.props.phrases.length; j++) {
			p.push(<PhraseSelector wheel={this.props.id} id={j} value={this.props.phrases[j]} />);
		}
		return (
			<div className="container" style={{width: '588px'}}>
				<div className="row">
					<div className="col-lg-4 chatwheel-1"><b>Chatwheel {this.props.id + 1}</b></div>
					<div className="col-lg-4 chatwheel-1">{p[6]}</div>
					<div className="col-lg-4 chatwheel-1"></div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row chatwheel-1">{p[5]}</div>
						<div className="row chatwheel-1">{p[4]}</div>
						<div className="row chatwheel-1">{p[3]}</div>
					</div>
					<div className="col-lg-4">
						<div className="row chatwheel-3">
							<img src="http://www.cliparthut.com/clip-arts/857/8-point-star-clip-art-857593.png" style={{width: '80%', margin: '10%'}} />
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row chatwheel-1">{p[7]}</div>
						<div className="row chatwheel-1">{p[0]}</div>
						<div className="row chatwheel-1">{p[1]}</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 chatwheel-1"></div>
					<div className="col-lg-4 chatwheel-1">{p[2]}</div>
					<div className="col-lg-4 chatwheel-1">
						<button onClick={this.remove} type="button" className="btn btn-danger btn-block">
							Remove
						</button>
					</div>
				</div>
			</div>
		);
	},
	remove: function () {
		actions.removeChatwheel(this.props.id);
	}
});

var PhraseSelector = React.createClass({
	render: function () {
		var p = [];
		for (var i in phrases) {
			if (i == this.props.value) {
				p.push(<option value={i} selected="selected">{phrases[i]}</option>);
			} else {
				p.push(<option value={i}>{phrases[i]}</option>);
			}
		}
		return (
			<select className="form-control" onChange={this.change}>
				{p}
			</select>
		);
	},
	change: function (e) {
		actions.changeChatwheel(this.props.wheel, this.props.id, e.target.value);
	}
});

module.exports = Component;
