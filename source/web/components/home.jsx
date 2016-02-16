var ReactTooltip = require('../../../node_modules/react-tooltip/standalone/react-tooltip.min.js');

var Component = React.createClass({
	render: function () {
		var l = window.language.data.home;
		var lp = window.language.parse;
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-home">
					<div className="container">
						<h1>{l.header.title}</h1>
						<p dangerouslySetInnerHTML={lp(l.header.text, {
							0: ['a', 'http://wiki.teamliquid.net/dota2/Console_Commands'],
							1: ['a', 'http://dota2.com']
						})}/>
						<a className="btn btn-success" href="#/editor">{l.header.button}</a>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h3>{l.usage.headline}</h3>
							<p>
								<ul>
									<li>{l.usage.list.click}</li>
									<li>{l.usage.list.layout}</li>
									<li>{l.usage.list.download}</li>
									<li>
										Copy the files in the zip to your autoexec folder <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-autoexec"/>
										<ReactTooltip id="home-info-autoexec" place="top" type="light" effect="solid">
											{l.usage.list.copy.tooltip}
										</ReactTooltip>
									</li>
									<li dangerouslySetInnerHTML={lp(l.usage.list.restart, {
										0: '<code>exec autoexec.cfg</code>'
									})}/>
								</ul>
								<span dangerouslySetInnerHTML={lp(l.usage.tip.text)}></span> <i className="glyphicon glyphicon-info-sign" data-tip data-for="home-info-keybinds"/>
								<ReactTooltip id="home-info-keybinds" place="top" type="light" effect="solid">
									<div className="center" style={{maxWidth: '250px'}} dangerouslySetInnerHTML={lp(l.usage.tip.tooltip, {
										0: '<kbd>PrintScr</kbd>',
										1: '<kbd>Any Key</kbd>'
									})}/>
								</ReactTooltip>
							</p>
							<h3>{l.folders.headline}</h3>
							<div className="media">
								<div className="media-left media-middle">
									<img src="images/windows.svg" width="64"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.folders.windows.headline}</h4>
									{l.folders.windows.text}
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<img src="images/osx.svg" width="64"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.folders.osx.headline}</h4>
									{l.folders.osx.text}
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<img src="images/ubuntu.svg" width="64"/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.folders.ubuntu.headline}</h4>
									{l.folders.ubuntu.text}
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<h3>{l.features.headline}</h3>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-flash" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.features.quickcast.headline}</h4>
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
									<h4 className="media-heading">{l.features.layouts.headline}</h4>
									You can create as many <a href="#/editor">layouts</a> as you want. That allows you to use nearly unlimited keyboard shortcuts.
									Call <strong><i className="glyphicon glyphicon-play"/> Missing Top</strong> with <kbd><kbd>Space</kbd> + <kbd>1</kbd></kbd> &amp; more.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-compressed" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.features.settings.headline}</h4>
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
										{l.features.settings.tooltips['2']}
									</ReactTooltip>
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-phone" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.features.portable.headline}</h4>
									You can <strong>use the same configuration everywhere you go</strong>, since you only need your autoexec.
									It's also possible to <strong>share a computer with multiple players</strong>, while everyone can use their own settings.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-user" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.features.everybody.headline}</h4>
									Manta attempts to be the <strong>easiest way to get a customized Dota experience</strong>.
									Also the configuration files it outputs are designed to be <a href="https://github.com/dodekeract/manta-config-engine-app#example-generated-autoexec">human-readable</a>.
								</div>
							</div>
							<div className="media">
								<div className="media-left media-middle">
									<i className="glyphicon glyphicon-cd" style={{fontSize: '4em'}}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{l.features.chatwheels.headline}</h4>
									The default layout of Manta has two Chatwheels. One bound to <kbd>Y</kbd> and one bound to <kbd><kbd>Space</kbd> + <kbd>Y</kbd></kbd>.
									You can customize them in the <a href="#/chatwheels">Chatwheel Manager</a>.
								</div>
							</div>
						</div>
						<div className="col-sm-2">
							<h3>{l.about.headline}</h3>
							<p>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-list-alt" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">{l.about.categories.app}</h4>
										<a href="https://github.com/dodekeract/manta-config-engine-app/tree/master/documentation/README.md">{l.about.links.documentation}</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app">{l.about.links.github}</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/issues">{l.about.links.feature}</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-wrench" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">{l.about.categories.engine}</h4>
										<a href="https://github.com/dodekeract/manta-config-engine/tree/master/documentation/README.md">{l.about.links.documentation}</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine">{l.about.links.github}</a>
										<br/>
										<a href="https://npmjs.org/package/dota2-manta-config-engine">{l.about.links.npm}</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-console" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">{l.about.categories.cli}</h4>
										<a href="https://github.com/dodekeract/manta-config-engine/tree/master/documentation/README.md">{l.about.links.documentation}</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine#cli-installation">{l.about.links.github}</a>
										<br/>
										<a href="https://npmjs.org/package/dota2-manta-config-engine#cli-installation">{l.about.links.npm}</a>
									</div>
								</div>
								<div className="media">
									<div className="media-left media-middle">
										<i className="glyphicon glyphicon-link" style={{fontSize: '3em'}}/>
									</div>
									<div className="media-body">
										<h4 className="media-heading">{l.about.categories.other}</h4>
										<a href="https://gitter.im/dodekeract/manta-config-engine">{l.about.links.gitter}</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/blob/master/documentation/CHANGELOG.md">{l.about.links.changelog}</a>
										<br/>
										<a href="https://github.com/dodekeract/manta-config-engine-app/blob/master/documentation/LICENSE.md">{l.about.links.license}</a>
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
