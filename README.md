# manta-config-engine-app
A web-application to generate autoexec configurations.

## Features:
- Multiple layouts, which can be used for advanced key-combinations.
- Easy-to-use web-interface. Direct export to zip.
- Opensource - if you need a feature, implement it or submit a GitHub issue.
- Aims to use as few lines of `autoexec` as possible. Skips unused aliases & commands.
- Saves the preset to your browser's LocalStorage and includes a preset.json file in the zip-archives, which can be used to restore the preset in case it gets lost.

## Installation:
- Install git & [Node.js](https://nodejs.org)
- `git clone https://github.com/dodekeract/manta-config-engine-app`
- `npm install`

## Running:
- `node server`

## Applying Changes:
- `gulp`
