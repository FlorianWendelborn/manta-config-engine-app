var manta = require('dota2-manta-config-engine');
var phrases = manta.data.phrases;

var store = require('../store');
var actions = require('../actions');

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
			if (cw.length % 2 === 0 || i < cw.length - 1) {
				chatwheels.push(<Chatwheel id={i} key={i} phrases={cw[i]} cols={2} />);
			} else {
				chatwheels.push(<Chatwheel id={i} key={i} phrases={cw[i]} cols={1} />);
			}
		}
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-chatwheel-manager">
					<div className="container">
						<h1>Chatwheel Manager</h1>
						<p>Create infinitely many custom chatwheels.</p>
						<button onClick={actions.addChatwheel} type="button" className="btn btn-success"><i className="glyphicon glyphicon-plus"/> Chatwheel</button>
					</div>
				</div>
				<div className="container">
					<div className="row">
						{chatwheels}
					</div>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Chatwheel = React.createClass({
	render: function () {
		var colLg = this.props.cols === 1 ? 'col-lg-6 col-lg-offset-3' : 'col-lg-6';
		var p = [];
		for (var j = 0; j < this.props.phrases.length; j++) {
			p.push(<PhraseSelector wheel={this.props.id} id={j} value={this.props.phrases[j]} />);
		}
		return this.renderContent(p, colLg);
	},
	remove: function () {
		actions.showRemoveDialog('chatwheel', this.props.id, this.renderRemove());
	},
	renderContent: function (p, classNames) {
		return (
			<div className={classNames} style={{padding: '20px'}}>
				<div className="row">
					<div className="col-lg-4 chatwheel-1"><b>Chatwheel {this.props.id + 1}</b></div>
					<div className="col-lg-4 chatwheel-1">{p[6]}</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row chatwheel-1" style={{marginLeft: '5px'}}>{p[5]}</div>
						<div className="row chatwheel-1" style={{marginRight: '5px'}}>{p[4]}</div>
						<div className="row chatwheel-1" style={{marginLeft: '5px'}}>{p[3]}</div>
					</div>
					<div className="col-lg-4">
						<div className="row chatwheel-3">
							<i className=" glyphicon glyphicon-cog" style={{fontSize: '11em', paddingTop: '30px'}}/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row chatwheel-1" style={{marginRight: '5px'}}>{p[7]}</div>
						<div className="row chatwheel-1" style={{marginLeft: '5px'}}>{p[0]}</div>
						<div className="row chatwheel-1" style={{marginRight: '5px'}}>{p[1]}</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 chatwheel-1"></div>
					<div className="col-lg-4 chatwheel-1">{p[2]}</div>
					<div className="col-lg-4 chatwheel-1">
						<button onClick={this.remove} type="button" className="btn btn-danger btn-block">
							<i className="glyphicon glyphicon-trash"/> Remove
						</button>
					</div>
				</div>
			</div>
		);
	},
	renderRemove: function () {
		var p = [];
		for (var j = 0; j < this.props.phrases.length; j++) {
			p.push(<div>{phrases[this.props.phrases[j]]}</div>);
		}
		return (this.renderContent(p, ''));
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
