var store = require('../store');

var Cycle = require('./cycle-builder-cycle.jsx');

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
		var cycles = [];
		for (var i = 0; i < this.state.preset.cycles.length; i++) {
			cycles.push(
				<Cycle key={i} id={i} data={this.state.preset.cycles[i]}/>
			);
		}
        return (
            <div className="custom-margin-fix">
                <div className="jumbotron custom-stardust">
                    <div className="container">
                        <h1>Cycle Builer</h1>
                        <p>
                            Create custom cycling keyboard actions.
                        </p>
                        <button onClick={actions.addCycle} type="button" className="btn btn-success">Add Cycle</button>
                    </div>
                </div>
                <div className="container">
                    <div className="custom-masonry">
                        {cycles}
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
