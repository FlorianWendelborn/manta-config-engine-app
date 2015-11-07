var layout = require('./components/layout.jsx');

window.onload = function () {
    ReactDOM.render(React.createElement(layout), document.getElementsByTagName('div')[0]);
};
