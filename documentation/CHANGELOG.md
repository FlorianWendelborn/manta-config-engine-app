# Changelog

All dates are in Central European Time (GMT+1).

## 1.7.8 (2016.03.28-22.45)
- update to Manta 1.6.7

## 1.7.7 (2016.03.28-22.35)
- fixed using an old version of Manta, now correctly using 1.6.6

## 1.7.6 (2016.03.28-22.32)
- added documentation link to custom-code tab

## 1.7.5 (2016.03.28-22.25)
- added custom-code tab
- changed npm dependency badge from `png` to `svg`

## 1.7.4 (2016.03.28-21.53)
- added ability to customize loading sound [#49](https://github.com/dodekeract/manta-config-engine-app/issues/49)
- exported presets now use tab indentation
- update to Manta 1.6.6
- fixed `item,action` and `item,taunt` having an inconsistent tooltip

## 1.7.3 (2016.03.28-40.45)
- update to Manta 1.6.4

## 1.7.2 (2016.03.28-20.41)
- update to Manta 1.6.3

## 1.7.1 (2016.03.28-19.50)
- fixed [#56](https://github.com/dodekeract/manta-config-engine-app/issues/56)
	- now loads the correct keyboard layout, when importing a preset

## 1.7.0 (2016.03.25-15.00)
- update to Manta 1.6.0
	- now using a bind-chain instead of `unbindall`
	- changed how layouts are handled
	- beware that this **will** break autoexec-reloads on modifier keys, use them in the primary layout instead
- added spring-cleaning workaround

## 1.6.4 (2016.02.22-02.27)
- preset viewer
	- added import
	- added export
	- added help text

## 1.6.3 (2016.02.22-18.42)
- update to Manta 1.5.7
	- fixes alt-remapping

## 1.6.2 (2016.02.22-01.17)
- added proper windows & ubuntu `svg`s

## 1.6.1 (2016.02.22-01.00)
- changed background patterns
- background patterns now separate from sass
- attributed pattern sources in comments

## 1.6.0 (2016.02.19-14.04)
- switched from `css` to `sass`
- layout-editor
	- slightly adjusted key colors
	- removed keyboard border
	- fixed legend being labeled wrongly
- trying to modify the alt-modifier now shows an error
- added `item,action` to `basic`
- fixed keyboard showing wrong tooltips for layouts

## 1.5.6 (2016.02.18-03.42)
- reduced duplication in `editor-legend.jsx` and `gulpfile.js`
- fixed `parseInt` missing radix

## 1.5.5 (2016.02.18-00.50)
- layout-editor
	- made colors easier to look at
	- fixed chatwheel & control-groups being capitalized
	- shortened label for `open`
	- shortened label for `command`
- fixed keybinding-changer thumbnail margin being weird
- header backgrounds now hosted on imgur
- add grab-stash bind description
- update to Manta 1.5.6

## 1.5.4 (2016.02.17-12.58)
- update to Manta 1.5.5
	- now includes generation time & version

## 1.5.3 (2016.02.17-12.38)
- fixed camera-binding related crashes

## 1.5.2
- fixed navbar not collapsing on mobile

## 1.5.1
- added more commands (see Manta)
- sorted options in keybind-changer
- made keybind descriptions consistent
- update to Manta 1.5.4

## 1.5.0
- now using `verjson` to patch `preset.json` if it's outdated (via `manta.update`)
- now shows engine & app versions
- update to Manta 1.5.2

## 1.4.10
- update to Manta 1.4.3 (should fix cycles)

## 1.4.9
- fixed chatwheels implementation being redundant & old chatwheel leaking
- cycles are now layed out like chatwheels

## 1.4.8
- added emoticon preview for chat messages
- update to Manta 1.4.2 to fix smart-cast behaving weird

## 1.4.7
- limited tooltip-width to 250 pixels in settings
- update to Manta 1.4.1

## 1.4.6
- update to Manta 1.4.0

## 1.4.5
- added reset to blank functionality

## 1.4.4
- fixed "learn" keyboard labels

## 1.4.3
- update to Manta 1.3.1

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
