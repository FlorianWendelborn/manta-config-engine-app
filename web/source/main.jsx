var Layout = require('./components/layout.jsx');
var Editor = require('./components/editor.jsx');
var Home = require('./components/home.jsx');
var Preset = require('./components/preset.jsx');
var Settings = require('./components/settings.jsx');
var Chatwheels = require('./components/chatwheels.jsx');

var store = require('./store');

window.onload = function () {
    ReactDOM.render((
        <ReactRouter.Router>
            <ReactRouter.Route path="/" component={Layout}>
                <ReactRouter.IndexRoute component={Home} />
                <ReactRouter.Route path="editor" component={Editor} />
                <ReactRouter.Route path="chatwheels" component={Chatwheels} />
                <ReactRouter.Route path="preset" component={Preset} />
                <ReactRouter.Route path="settings" component={Settings} />
            </ReactRouter.Route>
        </ReactRouter.Router>
    ), document.getElementsByTagName('div')[0]);
};
