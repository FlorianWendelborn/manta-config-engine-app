var ReactTooltip = require('../../../node_modules/react-tooltip/standalone/react-tooltip.min.js');

var Component = React.createClass({
	render: function () {
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-home">
					<div className="container">
						<h1>Manta Config Engine App</h1>
						<p>A web-application to generate autoexec files for Dota 2.</p>
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
									<li>
										Copy the contents of the zip-Archive to your autoexec folder <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-autoexec"/>
									<ReactTooltip id="home-info-autoexec" place="top" type="light" effect="solid">
											See Below
										</ReactTooltip>
									</li>
									<li>Restart Dota 2 or type <code>exec autoexec.cfg</code> into the console</li>
								</ul>
								<strong>Tip:</strong> You need to remove conflicting ingame-keybinds <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-keybinds"/>
								<ReactTooltip id="home-info-keybinds" place="top" type="light" effect="solid">
									<p style={{textAlign: 'center'}}>
										Manta <strong>can't use keys bound in the Dota 2 settings</strong>.
										<br/>
										To unset a key in Dota, just go to the settings,
										<br/>
										click the keybind you need to remove and hit <kbd>PrintScr</kbd>
										<br/>
										If you don't have <kbd>PrintScr</kbd> just press <kbd>Any Key</kbd>.
										<br/>
										Repeat this for every key you need to unbind.
									</p>
								</ReactTooltip>
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
									<h4 className="media-heading">Mac OS X</h4>
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
								Manta is a tool, which can generate <a href="http://wiki.teamliquid.net/dota2/Console_Commands">advanced configuration files</a> for <a href="http://dota2.com">Dota 2</a>.
							</p>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-flash" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Awesome QuickCast</h4>
									Combine the advantages of Quick- and NormalCast. Use <kbd><kbd>Space</kbd>+<kbd>Q</kbd></kbd> to cast <kbd>Q</kbd> on yourself.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-duplicate" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Multiple Layouts</h4>
									You can create as many <a href="#/editor">layouts</a> as you want. That allows you to use nearly unlimited keyboard shortcuts.
									Call <strong><i className="glyphicon glyphicon-play"/> Missing Top</strong> with <kbd><kbd>Space</kbd>+<kbd>1</kbd></kbd> and much more.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-cd" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Multiple Chatwheels</h4>
									The default layout of Manta has two Chatwheels. One bound to <kbd>Y</kbd> and one bound to <kbd><kbd>Space</kbd>+<kbd>Y</kbd></kbd>.
									You can easily customize them in the <a href="#/chatwheels">Chatwheel Manager</a>
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-compressed" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Advanced Settings</h4>
									The <a href="#/settings">Settings</a> section of Manta allows you to customize nearly everything,
									including hidden settings and features like <strong>Force Movement Direction</strong> which allows you to turn your hero without moving when pressing <kbd>Alt</kbd>.
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
										<br/>
										<a href="https://npmjs.org/package/dota2-manta-config-engine">View On NPM</a>
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
										<br/>
										<a href="https://npmjs.org/package/dota2-manta-config-engine">View On NPM</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-link" style={{fontSize: '4em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">Additional Links</h4>
										<a href="https://gitter.im/dodekeract/manta-config-engine">Gitter Chatroom</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/blob/master/documentation/CHANGELOG.md">Changelog</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/blob/master/documentation/LICENSE.md">License</a>
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
