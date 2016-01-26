# manta-config-engine-app

[![Join the chat at https://gitter.im/dodekeract/manta-config-engine](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dodekeract/manta-config-engine)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Code Climate](https://codeclimate.com/github/dodekeract/manta-config-engine-app/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/manta-config-engine-app)
[![NPM Downloads](https://img.shields.io/npm/dm/dota2-manta-config-engine-app.svg)](https://npmjs.com/package/dota2-manta-config-engine-app)
[![NPM Dependencies](https://david-dm.org/dodekeract/manta-config-engine-app.png)](https://david-dm.org/dodekeract/manta-config-engine-app)
[![Code Documentation](https://inch-ci.org/github/dodekeract/manta-config-engine-app.svg)](https://inch-ci.org/github/dodekeract/manta-config-engine-app)

A [web-application](https://manta.dodekeract.report) to generate autoexec configurations.

## Features:
- Multiple layouts, which can be used for advanced key-combinations.
- Easy-to-use web-interface. Direct export to zip.
- Opensource - if you need a feature, implement it or submit a GitHub issue.
- Aims to use as few lines of `autoexec` as possible. Skips unused aliases & commands.
- Saves the preset to your browser's LocalStorage and includes a preset.json file in the zip-archives, which can be used to restore the preset in case it gets lost.
- Generates Human-Readable, Commented Code:

![Example Output](http://i.imgur.com/rIsMCyh.png)

## Installation:
- Install git & [Node.js](https://nodejs.org)
- `git clone https://github.com/dodekeract/manta-config-engine-app`
- `npm install`

## Running:
- `node server`

## Applying Changes:
- `gulp`
