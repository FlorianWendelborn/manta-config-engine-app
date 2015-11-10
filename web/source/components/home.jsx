var Component = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>Manta Config Engine App</h1>
					<p>Graphical Userinterface to generate autoexec files for Dota 2.</p>
					<p>
						<a className="btn btn-success btn-lg" href="#/editor">Start Editing</a>
					</p>
				</div>
				<h3>Usage:</h3>
				<ul>
					<li>Click on the keys you want to customize.</li>
					<li>Decide if you need/want a secondary layout.</li>
					<li>Click download.</li>
					<li>Copy the contents of the zip-Archive to your Dota 2 configuration folder. (most likely C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta\game\dota\cfg)</li>
					<li>Restart Dota 2 or enter "exec autoexec.cfg" into your console.</li>
					<li>You may need to remove all keybindings for this to work.</li>
				</ul>
				<h3>GitHub Repositories:</h3>
				<ul>
					<li><a href="https://github.com/dodekeract/manta-config-engine-app">view This App on GitHub</a></li>
					<li><a href="https://github.com/dodekeract/manta-config-engine">view JavaScript library on GitHub</a></li>
				</ul>
			</div>
		);
	}
});
module.exports = Component;
