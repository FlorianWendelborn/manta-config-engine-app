var Component = React.createClass({
	render: function () {
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-home">
					<div className="container">
						<h1>Manta Config Engine App</h1>
						<p>Graphical Userinterface to generate autoexec files for Dota 2.</p>
						<a className="btn btn-success" href="#/editor">Start Editing</a>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h2>Usage</h2>
							<p>
								<ul>
									<li>Click on the keys you want to customize</li>
									<li>Consider customizing additional layouts</li>
									<li>Click download</li>
									<li>Copy the contents of the zip-Archive to your autoexec folder</li>
									<li>Restart Dota 2 or enter "exec autoexec.cfg" into your console</li>
								</ul>
								Tip: You need to remove all keybindings for this to work
							</p>
							<h2>Default Autoexec Folders</h2>
							<div className="media">
								<div className="media-left media-middle">
									<img src="https://openclipart.org/download/176727/1365011437.svg" width="64"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Windows</h4>
									C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta\game\dota\cfg
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<img src="https://openclipart.org/download/159331/MoonBook.svg" width="64"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Mac OSX</h4>
									/Users/YourUserName/Library/Application Support/Steam/steamapps/common/dota 2 beta/game/dota/cfg
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<img src="https://openclipart.org/download/103855/tux.svg" width="64"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Ubuntu</h4>
									/home/YourUserName/.steam/steam/steamapps/common/dota 2 beta/game/dota/cfg
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<h2>What Is This?</h2>
							<p>
								Manta is a tool, which can generate <b>advanced configuration files</b> for <a href="http://dota2.com">Dota 2</a>.
								These can for example allow you to use QuickCast, while being able to self-target spells &amp; items without using your mouse.
								Effectively <b>combining the advantages</b> of both Quick- and NormalCast.
							</p>
							<h2>Things Manta Can Do</h2>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-duplicate" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Multiple Layouts</h4>
									The default <a href="#/editor">layout</a> of Manta uses this to allow you to press <kbd>Space</kbd>+<kbd>Q</kbd> to self-cast your Q.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-cd" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Multiple Chatwheels</h4>
									The default layout of Manta has two Chatwheels. One bound to <kbd>Y</kbd> and one bound to <kbd>Space</kbd>+<kbd>Y</kbd>.
									You can easily customize them in the <a href="#/chatwheels">Chatwheel Manager</a>
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-compressed" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Advanced Settings</h4>
									The <a href="#/settings">Settings</a> section of Manta allows you to customize nearly everything.
									It includes settings which are not available in the ingame settings.
									You can even enable hidden Dota features like "Force Movement Direction" which allows you to turn your hero without moving when pressing <kbd>Alt</kbd>.
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<h2>About This Project</h2>
							<p>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-list-alt" style={{fontSize: '4em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">App</h4>
										<a href="https://github.com/dodekeract/manta-config-engine-app/tree/master/documentation/README.md">Documentation</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app">GitHub Repository</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/issues">Feature Requests</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-wrench" style={{fontSize: '4em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">Engine</h4>
										<a href="https://github.com/dodekeract/manta-config-engine/tree/master/documentation/README.md">Documentation</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine">GitHub Repository</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-console" style={{fontSize: '4em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">Command Line Interface</h4>
										<a href="https://github.com/dodekeract/manta-config-engine/tree/master/documentation/README.md">Documentation</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine">GitHub Repository</a>
									</div>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Component;
