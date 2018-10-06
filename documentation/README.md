# Manta Config Engine Documentation

## Table Of Contents
<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table Of Contents](#table-of-contents)
- [User-Interface](#user-interface)
	- [Welcome Screen](#welcome-screen)
	- [Layout Editor](#layout-editor)
	- [Chatwheel Manager](#chatwheel-manager)
	- [Cycle Builder](#cycle-builder)
	- [Preset Viewer](#preset-viewer)
	- [Settings](#settings)
	- [Download Button](#download-button)
- [Internals](#internals)
	- [Web Application](#web-application)

<!-- /TOC -->

## User-Interface

### Welcome Screen

This [Welcome Screen](https://projects.dodekeract.com/manta/) shows some basic information about this project.

### Layout Editor

The [Layout Editor](https://projects.dodekeract.com/manta/#/layouts) is the most important section.
It contains the final keyboard layouts, you will be using ingame.

#### Keyboard

![Layout Editor Keyboard][image-user-interface-layout-editor-keyboard]

#### Controls

![Layout Editor Controls][image-user-interface-layout-editor-controls]

With the <span style="background-color: #d58512; padding: 3px; border-radius: 3px; color: black;">orange</span> buttons, you can switch between all your keyboard layouts.
The <span style="background-color: #5cb85c; padding: 3px; border-radius: 3px; color: black;">green</span> add-button allows you to create a new empty layout.
The <span style="background-color: #c9302c; padding: 3px; border-radius: 3px; color: black;">red</span> remove-button removes the currently selected layout.
The <span style="background-color: #e6e6e6; padding: 3px; border-radius: 3px; color: black;">white</span> keyboard-layout button brings you to the manta settings, where you can adjust the keyboard layout.

> Note that after removing or adding layouts you might have to update your layout-keybindings, because the layout numbers may change.

#### Legend

![Layout Editor Legend][image-user-interface-layout-editor-legend]

The Lengend shows what the key-colors mean.

### Chatwheel Manager

![Chatwheel Manager Example][image-user-interface-chatwheel-manager-example]

The [Chatwheel Manager](https://projects.dodekeract.com/manta/#/chatwheels) allows you to easily customize multiple chatwheels.

### Cycle Builder

The [Cycle Builder](https://projects.dodekeract.com/manta/#/cycles) is a powerful tool to create your own "cycling" keyboard actions.
Generally the first keypress will run `command 1`, the second `command 2`...
When the end of the cycle is reached, it will reset and `command 1` will be ran again.

#### Example - Healthbar Separators

![Healthbar Separator Example][image-user-interface-cycle-builder-example]

This creates a keyboard binding, which you can activate multiple times,
to toggle where the hero healtbars are marked at.
This might be useful to know when you can `Culling Blade` an enemy as `Axe`.

### Preset Viewer

The [Preset Viewer](https://projects.dodekeract.com/manta/#/presets/view) shows the generated `preset.json` file,
which contains all information about your customized autoexec file.
This file is compatible to [Manta Config Engine](https://github.com/dodekeract/manta-config-engine).

### Settings

The [Settings Section](https://projects.dodekeract.com/manta/#/settings) allows you to customize most of the
Dota 2 Settings, some of which aren't available without using autoexec.

This view is sub-divided into the following categories:

1. The [Gameplay Settings](https://projects.dodekeract.com/manta/#/settings/gameplay) contain options, which allow you to customize some features of Dota 2.
They don't affect performance and are subject to your personal preference.

2. The [Performance Settings](https://projects.dodekeract.com/manta/#/settings/performance) contain all the settings, which do affect performance.
You should therefore decrease some of these, if you're having low FPS.

3. The [Manta Settings](https://projects.dodekeract.com/manta/#/settings/engine) are only for options, which affect this config engine.
Most notably you can setup your keyboard layout there.

### Download Button

When you finished customizing your very own preset, you can click this button and manta will create a `.zip` archive, containing the config files.
You can then extract the archive and place these files into your Dota 2 Configuration folder.

## Internals

### Web Application

#### Basic Structure

The [Web Application](https://projects.dodekeract.com/manta/) is written in `jsx`, which is a superset of `javascript`, that can include `HTML`. This `HTML` gets renderd by [React](https://github.com/facebook/react). Since browsers do not support `jsx` it needs to be compiled to plain `javascript`. This is done by [Gulp](http://gulpjs.com) and [Browserify](http://browserify.org).

The App's only purpose is to customize the internal `preset.json` visually. This `preset.json` gets then handed to [Manta](https://github.com/dodekeract/manta-config-engine). Manta then compiles the `preset.json` to `autoexec`. The App wrapps Manta's output into a `.zip` archive using [JSZip](https://github.com/Stuk/jszip). [FileSaver.js](https://github.com/eligrey/FileSaver.js/) then offers the `.zip` download.

[image-user-interface-layout-editor-controls]: https://raw.githubusercontent.com/dodekeract/manta-config-engine-app/master/documentation/images/user-interface/layout-editor-controls.png

[image-user-interface-layout-editor-keyboard]: https://raw.githubusercontent.com/dodekeract/manta-config-engine-app/master/documentation/images/user-interface/layout-editor-keyboard.png

[image-user-interface-layout-editor-legend]: https://raw.githubusercontent.com/dodekeract/manta-config-engine-app/master/documentation/images/user-interface/layout-editor-legend.png

[image-user-interface-cycle-builder-example]: https://raw.githubusercontent.com/dodekeract/manta-config-engine-app/master/documentation/images/user-interface/cycle-builder-example.png

[image-user-interface-chatwheel-manager-example]: https://raw.githubusercontent.com/dodekeract/manta-config-engine-app/master/documentation/images/user-interface/chatwheel-manager-example.png
