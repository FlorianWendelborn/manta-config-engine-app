var store = require('../../store');
var actions = require('../../actions');

var manta = require('dota2-manta-config-engine');

var KeybindingChanger = React.createClass({
	getInitialState: store.getState,
	componentDidMount: function () {
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		store.removeChangeListener(this._onChange);
	},
	render: function () {
		var viewName = this.state.changer.view === -1
			?
			false
			:
			viewData[this.state.changer.view].name
		;
		return (
			<div className="modal fade" id="bind-changer" tabIndex="-1">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<Header keyName={this.state.changer.key} layout={Number(this.state.currentLayout) + 1} viewName={viewName}/>
						<View state={this.state}/>
						<Footer view={this.state.changer.view} data={this.state.changer.data}/>
					</div>
				</div>
			</div>
		);
	},
	_onChange: function () {
		this.setState(store.getState());
	}
});

var Header = React.createClass({
	render: function () {
		var key = this.props.viewName
			?
			(<li>Key {this.props.keyName}</li>)
			:
			(<li className="active">Key {this.props.keyName}</li>)
		;
		var view = this.props.viewName
			?
			(<li className="active">{this.props.viewName}</li>)
			:
			''
		;
		return (
			<div className="modal-header">
				<ol className="modal-title breadcrumb" style={{backgroundColor: 'transparent'}}>
					<li>Keybinding Changer</li>
					<li>Layout {this.props.layout}</li>
					{key}
					{view}
					<button type="button" className="close" onClick={actions.keybindingChanger.close}><span>&times;</span></button>
				</ol>
			</div>
		);
	}
});

var Footer = React.createClass({
	render: function () {
		var saveButton = this.props.view === -1
			?
			''
			:
			<button type="button" className="btn btn-primary" onClick={this.save}><i className="glyphicon glyphicon-ok"/> Save</button>
		;
		var backButton = this.props.view === -1
			?
			''
			:
			<button type="button" className="btn btn-warning" onClick={actions.keybindingChanger.reset}><i className="glyphicon glyphicon-step-backward"/> Back</button>
		;
		return (
			<div className="modal-footer">
				{backButton}
				<button type="button" className="btn btn-danger" onClick={actions.keybindingChanger.close}><i className="glyphicon glyphicon-remove"/> Cancel</button>
				{saveButton}
			</div>
		);
	},
	save: function () {
		var options = viewData[this.props.view].combine
			?
			viewData[this.props.view].combine(this.props.data)
			:
			viewData[this.props.view].data.concat(this.props.data)
		;
		actions.keybindingChanger.save(options);
	}
});

var View = React.createClass({
	render: function () {
		var content;
		if (this.props.state.changer.view === -1) {
			content = this.renderMain();
		} else {
			content = this.renderConfigure();
		}
		return (
			<div className="modal-body">
				{content}
			</div>
		);
	},
	renderMain: function () {
		var content = [];
		viewData.forEach(function (node, index) {
			var _onClick = function () {
				if (node.action) {
					node.action();
				} else {
					var defaultData = [];
					node.options.forEach(function (item) {
						if (!item.type) {
							defaultData.push(item.values[0][1]);
						} else if (item.type === 'generated' && item.value != null) {
							defaultData = defaultData.concat(item.value);
						}
					});
					actions.keybindingChanger.setView(index, defaultData);
				}
			};
			content.push(
				<div className="col-md-2" key={index}>
					<div className="thumbnail">
						<div style={{textAlign: 'center'}}>
							<i style={{fontSize: '3em'}} className={'glyphicon glyphicon-' + node.icon}></i>
						</div>
						<div className="caption">
							<h4 style={{textAlign: 'center'}}>{node.name}</h4>
							<p>{node.description}</p>
							<button onClick={_onClick} className="btn btn-primary" role="button">Configure</button>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="row">
				{content}
			</div>
		);
	},
	renderConfigure: function () {
		var state = this.props.state;
		var subView = viewData[state.changer.view];
		var content = [];
		subView.options.forEach(function (item, index) {
			var main;
			if (item.type === 'input') {
				var _onChange = function (e) {
					actions.keybindingChanger.setData(index, e.target.value);
				};
				main = (
					<input className="form-control" placeholder={item.placeholder} onChange={_onChange} />
				);
			} else {
				var options = [];
				var values = item.type === 'generated'
					?
					item.init(state)
					:
					item.values
				;
				values.forEach(function (option, index) {
					options.push(
						<option value={index} key={index}>
							{option[0]}
						</option>
					);
				});
				var _onChange = function (e) {
					actions.keybindingChanger.setData(index, values[e.target.value][1]);
				};
				main = (
					<select className="form-control" onChange={_onChange}>
						{options}
					</select>
				);
			}
			content.push(
				<div key={index} className="col-md-6">
					{item.name}
					{main}
					<span className="help-block">
						{item.help}
					</span>
				</div>
			);
		});
		return (
			<div className="row">
				{content}
				<div className="col-md-12">
					<span className="help-block">
						{subView.help}
					</span>
				</div>
			</div>
		);
	}
});

var viewData = [
	{
		name: 'Ability',
		icon: 'font',
		data: ['ability'],
		options: [
			{
				name: 'Cast-Mode',
				values: [
					['Autocast', 'auto'],
					['Normalcast', 'normal'],
					['Quickcast', 'quick'],
					['Selfcast', 'self'],
					['Smartcast', 'smart']
				],
				help: 'Autocast is for skills like Drow Ranger\'s Frost Arrows, or Lich\'s Ice Armor, which can be turnt on or off.\nSmartcast is similar to quickcast, but only executes the spell when you stop pressing the key.'
			},
			{
				name: 'Ability',
				values: [
					[1, 0],
					[2, 1],
					[3, 2],
					[4, 3],
					[5, 4],
					['Ultimate', 5],
					['Toggle (Autocast-only)', 'toggle']
				],
				help: 'If you set Autocast to "toggle" it will attempt to toggle all skills. Since heroes have at most 1 autocast skill this should always work fine.'
			}
		]
	}, {
		name: 'Item',
		icon: 'italic',
		data: ['item'],
		options: [
			{
				name: 'Cast-Mode',
				values: [
					['Normalcast', 'normal'],
					['Quickcast', 'quick'],
					['Selfcast', 'self'],
					['Smartcast', 'smart']
				],
				help: 'Smartcast is similar to quickcast, but only executes the spell when you stop pressing the key.'
			},
			{
				name: 'Item',
				values: [
					[1, 0],
					[2, 1],
					[3, 2],
					[4, 3],
					[5, 4],
					[6, 5]
				],
				help: 'Slot 1 is top-left, 2 top-middle, 3 top-right, 4 bottom-left, 5 bottom-middle, 6 bottom-right.'
			}
		]
	}, {
		name: 'Select',
		icon: 'indent-left',
		options: [
			{
				values: [
					['Hero', 'hero'],
					['Courier', 'courier'],
					['All Other Units', 'other-units'],
					['All Units', 'all-units'],
					['Next Unit (Controlgroup tab)', 'next-unit'],
					['Controlgroup 1', 'controlgroup,1'],
					['Controlgroup 2', 'controlgroup,2'],
					['Controlgroup 3', 'controlgroup,3'],
					['Controlgroup 4', 'controlgroup,4'],
					['Controlgroup 5', 'controlgroup,5'],
					['Controlgroup 6', 'controlgroup,6'],
					['Controlgroup 7', 'controlgroup,7'],
					['Controlgroup 8', 'controlgroup,8'],
					['Controlgroup 9', 'controlgroup,9']
				]
			}
		],
		combine: function (data) {
			return ['select'].concat(data[0].split(','));
		}
	}, {
		name: 'Open',
		icon: 'resize-full',
		data: ['open'],
		options: [
			{
				values: [
					['Open Console', 'console'],
					['Open Chat', 'chat'],
					['Open Shop', 'shop'],
					['Open Shared Units', 'shared-units'],
					['Open Scoreboard', 'scoreboard']
				]
			}
		]
	}, {
		name: 'Layout',
		icon: 'duplicate',
		data: ['layout'],
		options: [
			{
				type: 'generated',
				value: 0,
				init: function (state) {
					var values = [];
					for (var i = 0; i < state.preset.layouts.length; i++) {
						values.push(['Layout ' + (Number(i) + 1), i]);
					}
					return values;
				}
			}
		]
	}, {
		name: 'Cycle',
		icon: 'repeat',
		help: 'Bind circular commands created by the Cycle Builder.',
		data: ['cycle'],
		options: [
			{
				type: 'generated',
				value: 0,
				init: function (state) {
					var values = [];
					for (var i = 0; i < state.preset.cycles.length; i++) {
						values.push([['Cycle ' + (Number(i) + 1)], i]);
					}
					return values;
				}
			}
		]
	}, {
		name: 'Chat',
		icon: 'comment',
		data: ['chat'],
		options: [
			{
				values: [
					['All Chat', 'all'],
					['Team Chat', 'team'],
					['Student Chat', 'student']
				]
			}, {
				type: 'input',
				placeholder: 'custom chat message'
			}
		],
		help: 'Bind a custom chat message. Chose between all-chat, team-chat and student-chat.'
	}, {
		name: 'Phrases',
		icon: 'align-left',
		data: ['phrase'],
		options: [
			{
				type: 'generated',
				value: 0,
				init: function () {
					var values = [];
					for (var key in manta.data.phrases) {
						var value = manta.data.phrases[key];
						values.push([value, Number(key)]);
					};
					return values;
				}
			}
		]
	}, {
		name: 'Chatwheel',
		icon: 'cd',
		data: ['chatwheel'],
		options: [
			{
				type: 'generated',
				value: 0,
				init: function (state) {
					var values = [];
					for (var i = 0; i < state.preset.chatwheels.length; i++) {
						values.push(['Chatwheel ' + (Number(i) + 1), i]);
					}
					return values;
				}
			}
		]
	}, {
		name: 'Commands',
		icon: 'console',
		options: [
			{
				type: 'input',
				help: 'Enter a console-command to bind.',
				placeholder: 'Custom Command To Execute'
			}
		],
		combine: function (data) {
			return ['command', data[0]];
		}
	}, {
		name: 'Camera',
		icon: 'camera',
		options: [
			{
				values: [
					['Move Camera Up', 'camera,up'],
					['Move Camera Left', 'camera,left'],
					['Move Camera Down', 'camera,down'],
					['Move Camera Right', 'camera,right'],
					['View Rune (toggle)', 'view,rune,toggle'],
					['View Rune (top)', 'view,rune,top'],
					['View Rune (bottom)', 'view,rune,bottom'],
					['View Base (toggle)', 'view,base,toggle'],
					['View Base (Dire)', 'view,base,dire'],
					['View Base (Radiant)', 'view,base,radiant']
				]
			}
		],
		help: 'Move the camera with your keyboard.',
		combine: function (data) {
			return data[0].split(',');
		}
	}, {
		name: 'Health',
		icon: 'tint',
		options: [
			{
				type: 'input',
				placeholder: 'Enter Any Positve Integer',
				help: 'Split healthbar every n HP.'
			}
		]
	}, {
		name: 'Remap Alt',
		icon: 'map-marker',
		action: actions.remapAltKey
	}, {
		name: 'Level Up',
		icon: 'upload',
		data: ['learn'],
		options: [
			{
				values: [
					['Ability 1', 0],
					['Ability 2', 1],
					['Ability 3', 2],
					['Ability 4', 3],
					['Ability 5', 4],
					['Ability 6 (Ultimate)', 5],
					['Level Stats', 'stats'],
					['Enter Ability Learn Mode', 'ability']
				],
				help: 'Level up the selected ability.'
			}
		],
	}, {
		name: 'Basic',
		icon: 'th-large',
		options: [
			{
				values: [
					['None', ''],
					['Attack', 'attack'],
					['Stop', 'stop'],
					['Move', 'move'],
					['Hold', 'hold'],
					['Pause', 'pause'],
					['Glyph', 'glyph'],
					['Learn Stats', 'learn'],
					['Voice Chat (Team)', 'voice,team'],
					['Purchase Quickbuy', 'buy,quick'],
					['Purchase Sticky', 'buy,sticky'],
					['Courier (Deliver Items)', 'courier,deliver'],
					['Courier (Speed Burst)', 'courier,burst'],
					['Taunt', 'item,taunt'],
					['Reload Autoexec', 'reload']
				]
			}
		],
		combine: function (data) {
			if (data[0] === '') return false;
			return data[0].split(',');
		}
	}
];

module.exports = KeybindingChanger;
