var Keyboard = require('./keyboard.jsx');
var LayoutControls = require('./layout-controls.jsx');
var BindChanger = require('./bind-changer.jsx');

var Component = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#/">
                                Manta-Config-Engine
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#/editor">Layout Editor</a></li>
                                <li><a href="#/preset-viewer">Preset Viewer</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="javascript:download()">Download</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <LayoutControls/>
                    <br/>
                    <Keyboard/>
                    <br/>
                    <div className="custom-col key-ability custom-legend">Ability</div>
                    <div className="custom-col key-item custom-legend">Item</div>
                    <div className="custom-col key-select custom-legend">Select</div>
                    <div className="custom-col key-open custom-legend">Open &amp; View</div>
                    <div className="custom-col key-communication custom-legend">Communication</div>
                    <div className="custom-col key-layout custom-legend">Layout</div>
                    <div className="custom-col key-other custom-legend">Other</div>
                    <div className="custom-col key-none custom-legend">None Set</div>
                </div>
                <BindChanger/>
            </div>
        );
    }
});

module.exports = Component;
