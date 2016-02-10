var store = require('../../store');
var actions = require('../../actions');

var manta = require('dota2-manta-config-engine');

var Component = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
		$('#tabs a').click(function (e) {
			e.preventDefault();
			actions.activateTab(this.id);
			$(this).tab('show');
		});
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var layoutOptions = [];
		for (var i = 0; i < this.state.preset.layouts.length; i++) {
			layoutOptions.push(<option value={"layout," + i} key={i}>Layout {i + 1}</option>);
		}
		var cycleOptions = [];
		for (var i = 0; i < this.state.preset.cycles.length; i++) {
			cycleOptions.push(<option value={"cycle," + i} key={i}>Cycle {i + 1}</option>);
		}
		var chatwheelOptions = [];
		for (var i = 0; i < this.state.preset.chatwheels.length; i++) {
			chatwheelOptions.push(<option value={"chatwheel," + i} key={i}>Chatwheel {i + 1}</option>);
		}
		var phraseOptions = [];
		for (var i in manta.data.phrases) {
			phraseOptions.push(<option value={'phrase,' + i} key={i}>{manta.data.phrases[i]}</option>);
		}
		return (
			<div className="modal fade" id="bind-changer" tabIndex="-1">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 className="modal-title">Keybinding Changer {this.state.changer.key} - Layout {this.state.currentLayout + 1}</h4>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col-lg-2">
									<ul className="nav nav-tabs nav-pills nav-stacked" style={{border: 0}} id="tabs" role="tablist">
										<li className="active"><a id="tab-abilities" role="tab" data-target="#tab-abilities-content" data-toggle="tab">Abilities</a></li>
										<li><a id="tab-items" role="tab" data-target="#tab-items-content" data-toggle="tab">Items</a></li>
										<li><a id="tab-select" role="tab" data-target="#tab-select-content" data-toggle="tab">Select</a></li>
										<li><a id="tab-open" role="tab" data-target="#tab-open-content" data-toggle="tab">Open</a></li>
										<li><a id="tab-layout" role="tab" data-target="#tab-layout-content" data-toggle="tab">Layout</a></li>
										<li><a id="tab-cycle" role="tab" data-target="#tab-cycle-content" data-toggle="tab">Cycle</a></li>
										<li><a id="tab-chat" role="tab" data-target="#tab-chat-content" data-toggle="tab">Chat</a></li>
										<li><a id="tab-phrase" role="tab" data-target="#tab-phrase-content" data-toggle="tab">Phrases</a></li>
										<li><a id="tab-chatwheel" role="tab" data-target="#tab-chatwheel-content" data-toggle="tab">Chatwheel</a></li>
										<li><a id="tab-command" role="tab" data-target="#tab-command-content" data-toggle="tab">Commands</a></li>
										<li><a id="tab-camera" role="tab" data-target="#tab-camera-content" data-toggle="tab">Camera</a></li>
										<li><a id="tab-hp" role="tab" data-target="#tab-hp-content" data-toggle="tab">HP</a></li>
										<li><a id="tab-basic" role="tab" data-target="#tab-basic-content" data-toggle="tab">Basic</a></li>
									</ul>
								</div>
								<div className="col-lg-10">
									<div className="tab-content">
										<div className="tab-pane active" id="tab-abilities-content">
											<br/>
											Ability:
											<select className="form-control" id="tab-abilities-slot">
												<option value="0">1</option>
												<option value="1">2</option>
												<option value="2">3</option>
												<option value="3">4</option>
												<option value="4">5</option>
												<option value="5">Ultimate</option>
												<option value="toggle">Toggle (Autocast-only)</option>
											</select>
											<br/>
											Cast mode:
											<select className="form-control" id="tab-abilities-mode">
												<option value="auto">Autocast</option>
												<option value="normal">Normalcast</option>
												<option value="quick">Quickcast</option>
												<option value="self">Selfcast</option>
												<option value="smart">Smartcast</option>
											</select>
											<span className="help-block">
												Autocast is for skills like Drow Ranger's Frost Arrows, or Lich's Ice Armor, which can be turnt on or off. If you set this to "toggle" it will attempt to toggle all skills. Since heroes have at most 1 autocast skill this should always work fine.<br/>
												Smartcast is similar to quickcast, but only executes the spell when you stop pressing the key.
											</span>
										</div>
										<div className="tab-pane" id="tab-items-content">
											<br/>
											Items:
											<select className="form-control" id="tab-items-slot">
												<option value="0">1</option>
												<option value="1">2</option>
												<option value="2">3</option>
												<option value="3">4</option>
												<option value="4">5</option>
												<option value="5">6</option>
											</select>
											<br/>
											Cast mode:
											<select className="form-control" id="tab-items-mode">
												<option value="normal">Normalcast</option>
												<option value="quick">Quickcast</option>
												<option value="self">Selfcast</option>
												<option value="smart">Smartcast</option>
											</select>
											<span className="help-block">Smartcast is similar to quickcast, but only executes the spell when you stop pressing the key.</span>
										</div>
										<div className="tab-pane" id="tab-select-content">
											<br/>
											<select className="form-control" id="tab-select-data">
												<option value="hero">hero</option>
												<option value="courier">courier</option>
												<option value="other-units">all other units</option>
												<option value="all-units">all units</option>
												<option value="next-unit">next-unit (control-group tab)</option>
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
												<option value="open,console">open console</option>
												<option value="open,chat">open chat</option>
												<option value="open,shop">open shop</option>
												<option value="open,shared-units">open shared-units</option>
												<option value="open,scoreboard">open scoreboard</option>
											</select>
										</div>
										<div className="tab-pane" id="tab-basic-content">
											<br/>
											<select className="form-control" id="tab-basic-data">
												<option value="">none</option>
												<option value="attack">attack</option>
												<option value="stop">stop</option>
												<option value="move">move</option>
												<option value="hold">hold</option>
												<option value="pause">pause</option>
												<option value="glyph">glyph</option>
												<option value="learn">learn stats</option>
												<option value="voice,team">voice chat (team)</option>
												<option value="buy,quick">purchase quickbuy</option>
												<option value="buy,sticky">purchase sticky</option>
												<option value="courier,deliver">courier (deliver items)</option>
												<option value="courier,burst">courier (speed burst)</option>
												<option value="item,taunt">Taunt</option>
												<option value="reload">reload autoexec</option>
											</select>
										</div>
										<div className="tab-pane" id="tab-layout-content">
											<br/>
											<span className="help-block">Don't forget to set the "reversed" key in the layout you're trying to activate. Otherwise you will be stuck in the other layout.</span>
											<select className="form-control" id="tab-layout-data">
												{layoutOptions}
											</select>
											<button className="btn btn-warning" onClick={actions.remapAltKey}>Remap Alt-Key</button>
										</div>
										<div className="tab-pane" id="tab-cycle-content">
											<br/>
											<span className="help-block">Bind circular commands created by the <a href="#/cycle-builder">Cycle Builder</a>.</span>
											<select className="form-control" id="tab-cycle-data">
												{cycleOptions}
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
											<span className="help-block">Enter a console command to bind.</span>
											<input className="form-control" placeholder="custom command to execute" id="tab-command-data" />
										</div>
										<div className="tab-pane" id="tab-hp-content">
											<br/>
											<span className="help-block">Split healthbar every n HP</span>
											<input className="form-control" placeholder="chose any positive integer value" id="tab-hp-data" />
										</div>
										<div className="tab-pane" id="tab-chat-content">
											<br/>
											<span className="help-block">Bind a custom chat message. Chose between all-chat, team-chat and student-chat.</span>
											<div className="row">
												<div className="col-lg-6">
													<input className="form-control" placeholder="custom chat message" id="tab-chat-data-message" />
												</div>
												<div className="col-lg-6">
													<select className="form-control" id="tab-chat-data-channel">
														<option value="student">Student Chat</option>
														<option value="team">Team Chat</option>
														<option value="all">All Chat</option>
													</select>
												</div>
											</div>
										</div>
										<div className="tab-pane" id="tab-camera-content">
											<br/>
											<span className="help-block">Bind camera movements.</span>
											<select className="form-control" id="tab-camera-data">
												<option value="camera,up">Move Camera Up</option>
												<option value="camera,left">Move Camera Left</option>
												<option value="camera,down">Move Camera Down</option>
												<option value="camera,right">Move Camera Right</option>
												<option value="view,rune,toggle">view rune (toggle)</option>
												<option value="view,rune,top">view rune (top)</option>
												<option value="view,rune,bottom">view rune (bottom)</option>
												<option value="view,base,toggle">view base (toggle)</option>
												<option value="view,base,dire">view base (dire)</option>
												<option value="view,base,radiant">view base (radiant)</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-error" onClick={actions.closeChanger}>Cancel</button>
								<button type="button" className="btn btn-primary" onClick={actions.saveBinding}>Save</button>
							</div>
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
