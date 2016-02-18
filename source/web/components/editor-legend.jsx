var EditorLegend = React.createClass({
	render: function () {
		var legend = [
			['layout', 'duplicate', 'Layout'],
			['other', 'question-sign', 'Other'],
			['ability', 'font', 'Ability'],
			['item', 'italic', 'Item'],
			['communication', 'comment', 'Communication'],
			['unavailable', 'remove', 'Not Available'],
			['none', 'unchecked', 'None Set'],
			['command', 'console', 'Command'],
			['cycle', 'repeat', 'Cycle'],
			['basic', 'th-large', 'Basic'],
			['camera', 'camera', 'Camera'],
			['select', 'indent-left', 'Select'],
			['open', 'resize-full', 'Open']
		];

		var items = [];

		var index = 0;
		legend.forEach(function (data) {
			items.push(
				<EditorLegendItem key={index++} name={data[0]} description={data[1]} icon={data[2]} />
			);
		});

		return (
			<div className="col-sm-8">
				<h2>Color Legend</h2>
				<div className="row">
					{items}
				</div>
			</div>
		);
	}
});

var EditorLegendItem = React.createClass({
	render: function () {
		return (
			<div className="col-sm-3 col-xs-6 custom-legend">
				<div className={'key-' + this.props.name}>
					<i className={'glyphicon glyphicon-' + this.props.icon}/> {this.props.description}
				</div>
			</div>
		);
	}
});

module.exports = EditorLegend;
