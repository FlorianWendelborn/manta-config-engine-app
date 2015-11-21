var Layout = require('./components/layout.jsx');
var Editor = require('./components/editor.jsx');
var Home = require('./components/home.jsx');
var Preset = require('./components/preset.jsx');
var Chatwheels = require('./components/chatwheels.jsx');
var CycleBuilder = require('./components/cycle-builder.jsx');

var Settings = require('./components/settings.jsx');
var SettingsGameplay = require('./components/settings-gameplay.jsx');
var SettingsPerformance = require('./components/settings-performance.jsx');
var SettingsEngine = require('./components/settings-engine.jsx');

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
};

window.matchSetting = {
    gameplay:  {
        autoAttack: { type: 'boolean', label: 'Auto Attack' },
        autoAttackAfterSpell: { type: 'boolean', label: 'Auto Attack After Spell' },
        autoSelectSummonedUnits: { type: 'boolean', label: 'Auto-Select Summoned Units' },
        unifiedUnitOrders: { type: 'boolean', label: 'Unified Unit Orders' },

        autoRepeatRightMouse: { type: 'boolean', label: 'Auto-Repeat Right Mouse' },
        forceMovementDirection: { type: 'boolean', label: 'Force Movement Direction' },
        forceRightClickAttack: { type: 'boolean', label: 'Force Right-Click Attack' },

        netgraph: { type: 'boolean', label: 'Show Net Graph' },
        playerNames: { type: 'boolean', label: 'Show Player Names' },
        rangeFinder: { type: 'boolean', label: 'Show Range Finder' },
        heroFinder: { type: 'boolean', label: 'Show Hero Finder' },

        cameraZoom: { type: 'boolean', label: 'Mousewheel Zoom' },
        cameraMoveOnRespawn: { type: 'boolean', label: 'Move Camera On Respawn' },
        cameraSpeed: { type: 'range', min: 2000, max: 8000, label: 'Camera Speed' },

        minimapHeroSize : { type: 'range', min: 0, max: 2000, label: 'Hero Size' },
        minimapRuneSize : { type: 'range', min: 0, max: 2000, label: 'Rune Size' },
        minimapCreepScale : { type: 'range', min: 0, max: 3, label: 'Creep Scale' },

        minimapProximityScale: { type: 'boolean', label: 'Proximity Scale' },
        minimapProximityScaleDistance: { type: 'range', min: 0, max: 100, label: 'Proximity Scale Distance' },
        minimapProximityScaleMinimum : { type: 'range', min: 0, max: 2000, label: 'Proximity Scale Minimum' },

        minimapShowHeroIcons : { type: 'boolean', label: 'Show Hero Icons' },
        minimapAlwaysShowHeroIcons : { type: 'boolean', label: 'Always Show Hero Icons' },
        minimapBackground : { type: 'boolean', label: 'Background' },
        minimapSimpleColors : { type: 'boolean', label: 'Simple Colors' },

        minimapMisclickTime : { type: 'range', min: 0, max: 10000, label: 'Misclick Time (ms)' },
        minimapRightClick : { type: 'boolean', label: 'Right Click' },

        minimapTowerDefendDistance : { type: 'range', min: 0, max: 2000, label: 'Tower Defend Distance' },
        minimapPingDuration : { type: 'range', min: 0, max: 60000, label: 'Ping Duration (ms)' },

        gridView: { type: 'boolean', label: 'Always Show Grid-View' },

        muteChat: { type: 'boolean', label: 'Mute Chat' }
    },
    performance: {
        screenShake: { type: 'boolean', label: 'Screen Shake' },
        animatePortrait: { type: 'boolean', label: 'Animate Portrait' },
        ambientCreatures: { type: 'boolean', label: 'Ambient Creatures' },

        ambientOcclusion: { type: 'boolean', label: 'Ambient Occlusion' },
        highQualityWater: { type: 'boolean', label: 'High Quality Water' },
        highQualityDashboard: { type: 'boolean', label: 'High Quality Dashboard' },
        heightFog: { type: 'boolean', label: 'Height Fog' },
        worldLighting: { type: 'boolean', label: 'World Lighting' },
        additiveLightPass: { type: 'boolean', label: 'Additive Light Pass' },
        specularBloom: { type: 'boolean', label: 'Specular Bloom' },
        specularHighlight: { type: 'boolean', label: 'Specular Highlight' },
        doubleShadowUpdates: { type: 'boolean', label: 'Double Shadow Updates' },

        multiCore: { type: 'boolean', label: 'Use Multi-Core' },
        altTabIdle: { type: 'boolean', label: 'Alt-Tab Idle' },

        serverForcePreload: { type: 'boolean', label: 'Force Server-Data Preload' },
        clientForcePreload: { type: 'boolean', label: 'Force Client-Data Preload' },

        levelOfDetail: { type: 'range', min: 0, max: 5, label: 'Level Of Detail' },
        shadowQuality: { type: 'range', min: 0, max: 2, label: 'Shadow Quality' },

        gpuLevel: { type: 'range', min: 0, max: 3, label: 'GPU Level' },
        cpuLevel: { type: 'range', min: 0, max: 2, label: 'CPU Level' },
        gpuMemoryLevel: { type: 'range', min: 0, max: 2, label: 'GPU Memory Level' },
        memoryLevel: { type: 'range', min: 0, max: 2, label: 'Memory Level' }
    },
    engine: {
        keyboardLayout: {
            type: 'choice',
            options: [
                { label: 'Default Layout (English)', id: 'en-us' },
                { label: 'QWERTZ (German)', id: 'de-de' }
            ],
            label: 'Keyboard Layout'
        },
        inputButtonCodeIsScanCode: { type: 'boolean', label: 'Input Button Code Is Scan Code' }
    }
};

window.keyInfo = function (identity) {
    var state = store.getState();
    var b = state.preset.layouts[state.currentLayout].keybinds[identity];
    if (identity === state.preset.settings.engine.altKey) return ['key-basic', 'alt', 'Alt Modifier Key'];
    if (identity === false) return ['key-unavailable', '?', 'Key not available.'];
    if (identity === 'hidden') return ['key-hidden', <span>&nbsp;</span>, 'Might be used for additional weird key bindings later.'];
    if (!b) return ['key-none', 'none', 'No binding set.'];
    return window.commandInfo(b);
};

window.onload = function () {
    ReactDOM.render((
        <ReactRouter.Router>
            <ReactRouter.Route path="/" component={Layout}>
                <ReactRouter.IndexRoute component={Home} />
                <ReactRouter.Route path="editor" component={Editor} />
                <ReactRouter.Route path="chatwheels" component={Chatwheels} />
                <ReactRouter.Route path="cycle-builder" component={CycleBuilder} />
                <ReactRouter.Route path="preset" component={Preset} />
                <ReactRouter.Route path="settings" component={Settings}>
                    <ReactRouter.Route path="gameplay" component={SettingsGameplay}/>
                    <ReactRouter.Route path="performance" component={SettingsPerformance}/>
                    <ReactRouter.Route path="engine" component={SettingsEngine}/>
                </ReactRouter.Route>
            </ReactRouter.Route>
        </ReactRouter.Router>
    ), document.getElementsByTagName('div')[0]);
};
