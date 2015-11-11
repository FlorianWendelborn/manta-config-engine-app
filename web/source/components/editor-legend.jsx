var Component = React.createClass({
	render: function () {
		return (
			<div>
				<h3>Color Legend:</h3>
				<div className="custom-col key-ability custom-legend">Ability</div>
				<div className="custom-col key-item custom-legend">Item</div>
				<div className="custom-col key-select custom-legend">Select</div>
				<div className="custom-col key-open custom-legend">Open</div>
				<div className="custom-col key-communication custom-legend">Communication</div>
				<div className="custom-col key-layout custom-legend">Layout</div>
				<div className="custom-col key-basic custom-legend">Basic</div>
				<div className="custom-col key-command custom-legend">Command</div>
				<div className="custom-col key-camera custom-legend">Camera</div>
				<div className="custom-col key-none custom-legend">None Set</div>
				<div className="custom-col key-other custom-legend">Other</div>
				<div className="custom-col key-todo custom-legend">Not Available</div>
			</div>
		);
	}
});
module.exports = Component;
