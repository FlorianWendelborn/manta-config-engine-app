# Changelog

## 1.4.2
- added level up to keybind-changer
- update to Manta 1.3.0

## 1.4.1
- fixed alt-remapping being impossible since new keybind-changer

## 1.4.0
- changed folder structure
	- source
		- cli
		- web
		- gulpfile.js
	- build
- added CLI to start server

## 1.3.8
- chatwheel
	- use glyphicons instead of image
	- look more like a circle now
- added various icons
- improved English
- fixed links on home
- name-consistency
- fixed settings tooltips being bold

## 1.3.7
- svg images are now stored in repo, since openclipart.org is unreliable

## 1.3.6
- cycle builder
	- fixed adding actions
	- added help/tips/examples

## 1.3.5
- home
	- fixed tooltip margin
	- added tooltips to the advanced-settings section
	- re-ordered things
	- added features
		- portable configuration
		- customization for everybody
- layout-editor
	- fixed autocast toggle breaking keyboard layout
	- added icons to controls
- `preset.json` is now formatted like it is in the preset-viewer
- changed settings tooltips to `react-tooltip`
- updated to manta 1.2.3

## 1.3.4
- home
	- added tooltips
	- added additional links
- layout-editor
	- fixed tooltips sometimes being duplicated
	- use sharper edges on keys
	- changed legend layout & style
- preset-viewer
	- added reset button
- fixed tabs losing focus
- moved / to /home
- code-cleanup

## 1.3.3
- improved home-section
- added icons to tab bar
- fixed a memory leak in the new bind-changer

## 1.3.2
- fixed a critical bug regarding git auto-tagging

## 1.3.1
- fixed a critical typo preventing the whole app from working

## 1.3.0
- completely re-worked keybind-changer
- fixed tooltips sometimes not showing up in the layout-editor

## 1.2.2
- enabled automatic git tagging of npm versions

## 1.2.1
- manta@1.2.1
- removed unncessary dependencies
- re-enabled CDN for react-dom
- improved documentation

## 1.2.0
- added documentation
- added CHANGELOG
- fixed #27 "tooltips don't show after layout switch"
