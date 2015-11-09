var layout = require('./components/layout.jsx');

var store = require('./store');

window.onload = function () {
    ReactDOM.render(React.createElement(layout), document.getElementsByTagName('div')[0]);
};
