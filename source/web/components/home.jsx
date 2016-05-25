var ReactTooltip = require('../../../node_modules/react-tooltip/standalone/react-tooltip.min.js');

var manta = require('dota2-manta-config-engine');

var Component = React.createClass({
	render: function () {
		return (
			<div className="home">
				<div className="jumbotron header">
					<div className="container">
						<div className="col-sm-3 center">
							<img src="images/icon.png"/>
						</div>
						<div className="col-sm-9">
							<h1>Thanks, Volvo</h1>
							<p>
								Thanks for screwing only the legitimate, non-cheating autoexec users, <a href="https://www.reddit.com/r/DotA2/comments/4kzld1/a_plea_to_valve_please_dont_kill_the_honest/">instead of just forbidding to use multiple items or abilities in one autoexec tick</a>. Thanks a lot.<br/>
								Overnight, you just removed all of my keybinds. I am now back to -2k MMR, because the ingame options don't allow me to bind the keys I'm used to.<br/><br/>
								<a href="https://www.reddit.com/r/DotA2/comments/4kzld1/a_plea_to_valve_please_dont_kill_the_honest/">I hope you realize your mistake and restore autoexec for legitimate uses.</a><br/>
								If you chose not to do that, please at least make the ingame options as powerful as Manta. I can't play without these features anymore.<br/>
							</p>
							<a className="btn btn-success" href="#/layouts">Hope For Resurrection</a>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h3>Usage</h3>
							<p>
								<ul>
									<li>Click on the keys you want to customize</li>
									<li>Consider customizing additional layouts</li>
									<li>Click download</li>
									<li>
										Copy the files in the zip to your autoexec folder <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-autoexec"/>
										<ReactTooltip id="home-info-autoexec" place="top" type="light" effect="solid">
											See Below
										</ReactTooltip>
									</li>
									<li>Restart Dota 2 or type <code>exec autoexec.cfg</code> into the console</li>
								</ul>
								<strong>Tip:</strong> You need to remove conflicting ingame-keybinds <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-keybinds"/>
								<ReactTooltip id="home-info-keybinds" place="top" type="light" effect="solid">
									<div className="center">
										Manta <strong>can't use keys bound in the Dota 2 settings</strong>.
										<br/>
										To unset a key in Dota, just go to the ingame settings,
										<br/>
										click the keybind you need to remove and hit <kbd>PrintScr</kbd>
										<br/>
										If you don't have <kbd>PrintScr</kbd> just press <kbd>Any Key</kbd>.
										<br/>
										Repeat this for every key you need to unbind.
									</div>
								</ReactTooltip>
							</p>
							<h3>Default Autoexec Folders</h3>
							<div className="media">
								<div className="media-left media-middle">
									<img src="images/windows.svg" width="44" style={{margin: '6px'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Windows</h4>
									C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta\game\dota\cfg
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<img src="images/osx.svg" width="56"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Mac OS X</h4>
									/Users/YourUserName/Library/Application Support/Steam/steamapps/common/dota 2 beta/game/dota/cfg
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<img src="images/ubuntu.svg" width="56"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Ubuntu</h4>
									/home/YourUserName/.steam/steam/steamapps/common/dota 2 beta/game/dota/cfg
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<h3>Features</h3>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-flash" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Awesome QuickCast</h4>
									Use QuickCast without losing the ability to SelfCast
									by binding <kbd><kbd>Space</kbd> + <kbd>Q</kbd></kbd> to SelfCast and <kbd>Q</kbd> to QuickCast.
									Included in the default preset of Manta.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-duplicate" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Multiple Layouts</h4>
									You can create as many <a href="#/editor">layouts</a> as you want. That allows you to use nearly unlimited keyboard shortcuts.
									Call <strong><i className="glyphicon glyphicon-play"/> Missing Top</strong> with <kbd><kbd>Space</kbd> + <kbd>1</kbd></kbd> &amp; more.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-compressed" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Advanced Settings</h4>
									The <a href="#/settings/gameplay">Settings</a> section of Manta allows you to customize nearly everything,
									including hidden settings and features like <strong>Force Movement Direction</strong> <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-fmd"/>
									<ReactTooltip id="home-info-fmd" place="top" type="light" effect="solid">
										<div className="center">
											Turn your hero before moving when pressing <kbd>Alt</kbd>.
											<br/>
											Useful for hitting Shadow Raze or Forcestaff.
										</div>
									</ReactTooltip> or <strong>Auto-Repeat Right Mouse</strong> <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-arm"/>
									<ReactTooltip id="home-info-arm" place="top" type="light" effect="solid">
										Repeats move and attack commands when you hold your right mouse button.
									</ReactTooltip>
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-phone" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Portable Configuration</h4>
									You can <strong>use the same configuration everywhere you go</strong>, since you only need your autoexec.
									It's also possible to <strong>share a computer with multiple players</strong>, while everyone can use their own settings.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-user" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Customization For Everybody</h4>
									Manta attempts to be the <strong>easiest way to get a customized Dota experience</strong>.
									Also the configuration files it outputs are designed to be <a href="https://github.com/dodekeract/manta-config-engine-app#example-generated-autoexec">human-readable</a>.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-cd" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Unlimited Chatwheels</h4>
									The default layout of Manta has two Chatwheels. One bound to <kbd>Y</kbd> and one bound to <kbd><kbd>Space</kbd> + <kbd>Y</kbd></kbd>.
									You can customize them in the <a href="#/chatwheels">Chatwheel Manager</a>.
								</div>
							</div>
						</div>
						<div className="col-sm-2">
							<h3>About Manta</h3>
							<p>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-list-alt" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">App {window.version}</h4>
										<a href="https://github.com/dodekeract/manta-config-engine-app/tree/master/documentation/README.md">Documentation</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app">GitHub Repo</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/issues">Request Feature</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-wrench" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">Engine {manta.version}</h4>
										<a href="https://github.com/dodekeract/manta-config-engine/tree/master/documentation/README.md">Documentation</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine">GitHub Repo</a>
										<br/>
										<a href="https://npmjs.org/package/dota2-manta-config-engine">View On NPM</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-console" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">CLI</h4>
										<a href="https://github.com/dodekeract/manta-config-engine/tree/master/documentation/README.md">Documentation</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine#cli-installation">GitHub Repo</a>
										<br/>
										<a href="https://npmjs.org/package/dota2-manta-config-engine#cli-installation">View On NPM</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-link" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">Other</h4>
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
