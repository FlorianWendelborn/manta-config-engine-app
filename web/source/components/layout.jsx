var BindChanger = require('./bind-changer.jsx');

var actions = require('../actions');

var Component = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <ReactRouter.Link activeClassName="active" className="navbar-brand" to="/">
                                Manta-Config-Engine
                            </ReactRouter.Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><ReactRouter.Link activeClassName="active" to="/editor">Layout Editor</ReactRouter.Link></li>
                                <li><ReactRouter.Link activeClassName="active" to="/chatwheels">Chatwheel Manager</ReactRouter.Link></li>
                                <li><ReactRouter.Link activeClassName="active" to="/cycle-builder">Cycle Builder</ReactRouter.Link></li>
                                <li><ReactRouter.Link activeClassName="active" to="/preset">Preset Viewer</ReactRouter.Link></li>
                                <li><ReactRouter.Link activeClassName="active" to="/settings/gameplay">Settings</ReactRouter.Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a onClick={actions.download} href="javascript:void(0)">Download</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <BindChanger/>
            </div>
        );
    }
});

module.exports = Component;
