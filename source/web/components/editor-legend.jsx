var Component = React.createClass({
	render: function () {
		return (
			<div className="col-sm-8">
				<h2>Color Legend</h2>
				<div className="row">
					<div className="col-sm-3 custom-legend"><div className="key-layout"><i className="glyphicon glyphicon-duplicate"/> Layout</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-other"><i className="glyphicon glyphicon-question-sign"/> Other</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-ability"><i className="glyphicon glyphicon-font"/> Ability</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-item"><i className="glyphicon glyphicon-italic"/> Item</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-communication"><i className="glyphicon glyphicon-comment"/> Communication</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-unavailable"><i className="glyphicon glyphicon-remove"/> Not Available</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-none"><i className="glyphicon glyphicon-unchecked"/> None Set</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-command"><i className="glyphicon glyphicon-console"/> Command</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-cycle"><i className="glyphicon glyphicon-repeat"/> Cycle</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-basic"><i className="glyphicon glyphicon-th-large"/> Basic</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-camera"><i className="glyphicon glyphicon-camera"/> Camera</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-select"><i className="glyphicon glyphicon-indent-left"/> Select</div></div>
					<div className="col-sm-3 custom-legend"><div className="key-open"><i className="glyphicon glyphicon-resize-full"/> Open</div></div>
				</div>
			</div>
		);
	}
});
module.exports = Component;
