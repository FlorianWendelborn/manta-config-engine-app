var Markdown = require('react-markdown');

var verjson = require('verjson');

var changelog = require('../../../../build/changelog.json');

var actions = require('../../actions');
var store = require('../../store');

var Changelog = React.createClass({
	renderCategory: function (data, after) {
		var result = [];
		var index = 0;
		for (var version in data) {
			var item = data[version];
			var time = item.time ? new Date(item.time).toString() : '';
			if (window.compareVersion(version, after) === 1) {
				result.push(
					<div key={index++} className="list-group-item">
						<h5 className="list-group-item-heading">
							Version {version} <small>{time}</small>
						</h5>
						<p className="list-group-item-text">
							<Markdown source={item.content}/>
						</p>
					</div>
				);
			}
		}
		return result;
	},
	render: function () {
		var lastAppVersion = localStorage.lastAppVersion || '1.9.2';
		var lastEngineVersion = localStorage.lastEngineVersion || '1.8.2';
		var engineChanges = this.renderCategory(changelog.engine, lastEngineVersion);
		var appChanges = this.renderCategory(changelog.app, lastAppVersion);

		var appHeadline = appChanges.length ? (
			<h4>In The Web-App <small><a href="https://github.com/dodekeract/manta-config-engine-app/blob/master/documentation/CHANGELOG.md">view on GitHub</a></small></h4>
		) : '';

		var engineHeadline = engineChanges.length ? (
			<h4>In The Engine <small><a href="https://github.com/dodekeract/manta-config-engine/blob/master/documentation/CHANGELOG.md">view on GitHub</a></small></h4>
		) : '';

		return (
			<div className="modal fade" id="dialog-changelog">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 className="modal-title">Changes Since Your Last Visit</h4>
						</div>
						<div className="modal-body">
							{appHeadline}
							{appChanges}
							{engineHeadline}
							{engineChanges}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Changelog;
