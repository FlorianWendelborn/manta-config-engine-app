var Layout = require('./components/layout.jsx');
var Editor = require('./components/editor.jsx');
var Home = require('./components/home.jsx');
var Preset = require('./components/preset.jsx');
var Settings = require('./components/settings.jsx');
var Chatwheels = require('./components/chatwheels.jsx');
var CycleBuilder = require('./components/cycle-builder.jsx');

var manta = require('dota2-manta-config-engine');

var store = require('./store');

window.commandInfo = function (c) {
    switch (c[0]) {
        case "ability":
            var match = [1,2,3,4,5,'Ult'];
            return ['key-ability', c[1][0]+c[1][1] + '-' + match[c[2]], c[1] + 'cast ability ' + match[c[2]]];
        break;
        case "item":
            switch (c[1]) {
                case "taunt":
                    return ['key-item', 'taunt', 'Taunt thy enemies.'];
                break;
                default: return ['key-item', c[1][0]+c[1][1] + '-' + (parseInt(c[2])+1), c[1] + 'cast item ' + (parseInt(c[2])+1)];
            }
        break;
        case "chat":
            return ['key-communication', c[1], c[1] + '-chat: ' + c[2]];
        break;
        case "attack":
            return ['key-basic', 'attack', 'Attack'];
        break;
        case "stop":
            return ['key-basic', 'stop', 'Stop'];
        break;
        case "hold":
            return ['key-basic', 'hold', 'Hold Position'];
        break;
        case "move":
            return ['key-basic', 'move', 'Move'];
        break;
        case "voice":
            return ['key-communication', 'team', 'Voice-Chat: Team'];
        break;
        case "reload":
            return ['key-basic', (<span>&#8635;</span>), 'Reload the autoexec.'];
        break;
        case "chatwheel":
            return ['key-communication', 'CW-' + (parseInt(c[1])+1), 'Chatwheel ' + (parseInt(c[1])+1)];
        break;
        case "pause":
            return ['key-basic', 'pause', 'Pause the game.'];
        break;
        case "learn":
            return ['key-ability', 'stats', 'Learn Stats'];
        break;
        case "buy":
            return ['key-other', c[1], 'Buy ' + c[1]];
        break;
        case "cycle":
            return ['key-cycle', (parseInt(c[1]) + 1), 'Cycle ' + (parseInt(c[1]) + 1)]
        break;
        case "open":
            return ['key-open', c[1], c[1]];
        break;
        case "view":
            return ['key-camera', c[1], 'View ' + c[1] + ' (' + c[2] + ')'];
        break;
        case "health":
            return ['key-other', 'H' + c[1], 'Healthbar separator every ' + c[1] + ' HP'];
        break;
        case "select":
            if (c[1] === 'other-units') return ['key-select', 'other', 'Select All Other Units'];
            if (c[1] === 'controlgroup') return ['key-select', 'CG-' + c[2], 'Control-Group ' + c[2]];
            if (c[1] === 'all-units') return ['key-select', 'all', 'Select All Units'];
            return ['key-select', c[1], 'Select ' + c[1]];
        break;
        case "phrase":
            return ['key-communication', 'phrase', 'Phrase: ' + manta.phrases[c[1]]];
        break;
        case "camera":
            var matcher = {
                "up": ['key-camera', <span>&uarr;</span>, 'Move Camera Up'],
                "left": ['key-camera', <span>&larr;</span>, 'Move Camera Left'],
                "down": ['key-camera', <span>&darr;</span>, 'Move Camera Down'],
                "right": ['key-camera', <span>&rarr;</span>, 'Move Camera Right']
            };
            return matcher[c[1]];
        break;
        case "courier":
            switch (c[1]) {
                case "deliver":
                    return ['key-other', 'c:deliver', 'Courier: Deliver Items']
                break;
                case "burst":
                    return ['key-other', 'c:burst', 'Courier: Speed Burst']
                break;
            }
        break;
        case "command":
            return ['key-command', 'Command', 'Custom Command: ' + c[1]];
        break;
        case "layout":
            return ['key-layout', parseInt(c[1])+1, 'Switches To Layout ' + (parseInt(c[1])+1)];
        break;
        default: return ['key-other', '#', '-'];
    }
}

window.keyInfo = function (key) {
    var state = store.getState();
    var b = state.preset.layouts[state.currentLayout].keybinds[key];
    if (key === '') return ['key-todo', '?', 'Key not available.'];
    if (key === 'hidden') return ['key-hidden', <span>&nbsp;</span>, 'Might be used for additional weird key bindings later.'];
    if (!b) return ['key-none', 'none', 'No binding set.'];
    return window.commandInfo(b);
}

window.onload = function () {
    ReactDOM.render((
        <ReactRouter.Router>
            <ReactRouter.Route path="/" component={Layout}>
                <ReactRouter.IndexRoute component={Home} />
                <ReactRouter.Route path="editor" component={Editor} />
                <ReactRouter.Route path="chatwheels" component={Chatwheels} />
                <ReactRouter.Route path="cycle-builder" component={CycleBuilder} />
                <ReactRouter.Route path="preset" component={Preset} />
                <ReactRouter.Route path="settings" component={Settings} />
            </ReactRouter.Route>
        </ReactRouter.Router>
    ), document.getElementsByTagName('div')[0]);
};
