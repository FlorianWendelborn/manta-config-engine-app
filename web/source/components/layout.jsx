var Keyboard = require('./keyboard.jsx');
var LayoutControls = require('./layout-controls.jsx');
var BindChanger = require('./bind-changer.jsx');

var actions = require('../actions');

var Component = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="https://github.com/dodekeract/manta-config-engine-app">
                                Manta-Config-Engine
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#/editor">Layout Editor</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a onClick={actions.download} href="#/download">Download</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <LayoutControls/>
                    <br/>
                    <Keyboard/>
                    <br/>
                    <h3>Color Legend:</h3>
                    <div className="custom-col key-ability custom-legend">Ability</div>
                    <div className="custom-col key-item custom-legend">Item</div>
                    <div className="custom-col key-select custom-legend">Select</div>
                    <div className="custom-col key-open custom-legend">Open &amp; View</div>
                    <div className="custom-col key-communication custom-legend">Communication</div>
                    <div className="custom-col key-layout custom-legend">Layout</div>
                    <div className="custom-col key-basic custom-legend">Basic</div>
                    <div className="custom-col key-none custom-legend">None Set</div>
                    <div className="custom-col key-other custom-legend">Other</div>
                    <div className="custom-col key-todo custom-legend">Not Available</div>
                </div>
                <BindChanger/>
            </div>
        );
    }
});

module.exports = Component;
