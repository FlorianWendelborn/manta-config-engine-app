var store = require('../store');
var actions = require('../actions');

var manta = require('dota2-manta-config-engine');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
		$('#tabs a').click(function (e) {
			e.preventDefault();
			actions.activateTab(this.id);
			$(this).tab('show');
		})
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var layoutOptions = [];
		for (var i = 0; i < this.state.preset.layouts.length; i++) {
			layoutOptions.push(<option value={"layout," + i} key={i}>Layout {i+1}</option>);
		}
		var chatwheelOptions = [];
		for (var i = 0; i < this.state.preset.chatwheels.length; i++) {
			chatwheelOptions.push(<option value={"chatwheel," + i} key={i}>Chatwheel {i+1}</option>);
		}
		var phraseOptions = [];
		for (var i in manta.phrases) {
			phraseOptions.push(<option value={'phrase,' + i} key={i}>{manta.phrases[i]}</option>);
		}
		return (
			<div className="modal fade" id="bind-changer" tabindex="-1">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 className="modal-title">Keybinding Changer {this.state.changer.key} - Layout {this.state.currentLayout+1}</h4>
						</div>
						<div className="modal-body">
							<ul className="nav nav-tabs" id="tabs" role="tablist">
								<li className="active"><a id="tab-abilities" role="tab" data-target="#tab-abilities-content" data-toggle="tab">Abilities</a></li>
								<li><a id="tab-items" role="tab" data-target="#tab-items-content" data-toggle="tab">Items</a></li>
								<li><a id="tab-select" role="tab" data-target="#tab-select-content" data-toggle="tab">Select</a></li>
								<li><a id="tab-open" role="tab" data-target="#tab-open-content" data-toggle="tab">Open &amp; View</a></li>
								<li><a id="tab-layout" role="tab" data-target="#tab-layout-content" data-toggle="tab">Layout</a></li>
								<li><a id="tab-chatwheel" role="tab" data-target="#tab-chatwheel-content" data-toggle="tab">Chatwheel</a></li>
								<li><a id="tab-phrase" role="tab" data-target="#tab-phrase-content" data-toggle="tab">Phrases</a></li>
								<li><a id="tab-command" role="tab" data-target="#tab-command-content" data-toggle="tab">Commands</a></li>
								<li><a id="tab-basic" role="tab" data-target="#tab-basic-content" data-toggle="tab">Basic</a></li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane active" id="tab-abilities-content">
									<br/>
									Ability:
									<select className="form-control" id="tab-abilities-slot">
										<option selected="selected" value="0">1</option>
										<option value="1">2</option>
										<option value="2">3</option>
										<option value="3">4</option>
										<option value="4">5</option>
										<option value="5">Ultimate</option>
									</select>
									<br/>
									Cast mode:
									<select className="form-control" id="tab-abilities-mode">
										<option selected="selected" value="normal">Normalcast</option>
										<option value="quick">Quickcast</option>
										<option value="self">Selfcast</option>
										<option value="smart">Smartcast</option>
									</select>
								</div>
								<div className="tab-pane" id="tab-items-content">
									<br/>
									Items:
									<select className="form-control" id="tab-items-slot">
										<option selected="selected" value="0">1</option>
										<option value="1">2</option>
										<option value="2">3</option>
										<option value="3">4</option>
										<option value="4">5</option>
										<option value="5">Ultimate</option>
									</select>
									<br/>
									Cast mode:
									<select className="form-control" id="tab-items-mode">
										<option selected="selected" value="normal">Normalcast</option>
										<option value="quick">Quickcast</option>
										<option value="self">Selfcast</option>
										<option value="smart">Smartcast</option>
									</select>
								</div>
								<div className="tab-pane" id="tab-select-content">
									<br/>
									<select className="form-control" id="tab-select-data">
										<option selected="selected" value="hero">hero</option>
										<option value="courier">courier</option>
										<option value="controlgroup,1">controlgroup 1</option>
										<option value="controlgroup,2">controlgroup 2</option>
										<option value="controlgroup,3">controlgroup 3</option>
										<option value="controlgroup,4">controlgroup 4</option>
										<option value="controlgroup,5">controlgroup 5</option>
										<option value="controlgroup,6">controlgroup 6</option>
										<option value="controlgroup,7">controlgroup 7</option>
										<option value="controlgroup,8">controlgroup 8</option>
										<option value="controlgroup,9">controlgroup 9</option>
									</select>
								</div>
								<div className="tab-pane" id="tab-open-content">
									<br/>
									<select className="form-control" id="tab-open-data">
										<option selected="selected" value="open,console">open console</option>
										<option value="open,chat">open chat 4</option>
										<option value="open,shop">open shop</option>
										<option value="open,shared-units">open shared-units</option>
										<option value="open,scoreboard">open scoreboard</option>
										<option value="view,rune,toggle">view rune (toggle)</option>
										<option value="view,rune,top">view rune (top)</option>
										<option value="view,rune,bottom">view rune (bottom)</option>
										<option value="view,base,toggle">view base (toggle)</option>
										<option value="view,base,dire">view base (dire)</option>
										<option value="view,base,radiant">view base (radiant)</option>
									</select>
								</div>
								<div className="tab-pane" id="tab-basic-content">
									<br/>
									<select className="form-control" id="tab-basic-data">
										<option selected="selected" value="">none</option>
										<option value="attack">attack</option>
										<option value="stop">stop</option>
										<option value="hold">hold</option>
										<option value="pause">pause</option>
										<option value="glyph">glyph</option>
										<option value="learn">learn stats</option>
										<option value="voice,team">voice chat (team)</option>
										<option value="buy,quick">purchase quickbuy</option>
										<option value="buy,sticky">purchase sticky</option>
										<option value="reload">reload autoexec</option>
									</select>
								</div>
								<div className="tab-pane" id="tab-layout-content">
									<br/>
									<span class="help-block">Don't forget to set the "reversed" key in the layout you're trying to activate. Otherwise you will be stuck in the other layout.</span>
									<select className="form-control" id="tab-layout-data">
										{layoutOptions}
									</select>
								</div>
								<div className="tab-pane" id="tab-chatwheel-content">
									<br/>
									<select className="form-control" id="tab-chatwheel-data">
										{chatwheelOptions}
									</select>
								</div>
								<div className="tab-pane" id="tab-phrase-content">
									<br/>
									<select className="form-control" id="tab-phrase-data">
										{phraseOptions}
									</select>
								</div>
								<div className="tab-pane" id="tab-command-content">
									<br/>
									<input className="form-control" placeholder="custom command to execute" id="tab-command-data" />
								</div>
							</div>
							command, courier, chat
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-error" onClick={actions.closeChanger}>Cancel</button>
							<button type="button" className="btn btn-primary" onClick={actions.saveBinding}>Save</button>
						</div>
					</div>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});
module.exports = Component;
