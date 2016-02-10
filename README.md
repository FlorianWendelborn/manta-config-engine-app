# manta-config-engine-app

[![Join the chat at https://gitter.im/dodekeract/manta-config-engine](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dodekeract/manta-config-engine) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT) [![Code Climate](https://codeclimate.com/github/dodekeract/manta-config-engine-app/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/manta-config-engine-app) [![NPM Downloads](https://img.shields.io/npm/dm/dota2-manta-config-engine-app.svg)](https://npmjs.com/package/dota2-manta-config-engine-app) [![NPM Dependencies](https://david-dm.org/dodekeract/manta-config-engine-app.png)](https://david-dm.org/dodekeract/manta-config-engine-app) [![Code Documentation](https://inch-ci.org/github/dodekeract/manta-config-engine-app.svg)](https://inch-ci.org/github/dodekeract/manta-config-engine-app)

A [web-application](https://manta.dodekeract.report) to generate autoexec configurations.

## Table Of Contents

<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table Of Contents](#table-of-contents)
- [Documentation](#documentation)
- [Features](#features)
- [Example Generated Autoexec](#example-generated-autoexec)
- [Installation](#installation)
	- [Via Git (recommended)](#via-git-recommended)
	- [Via NPM (experimental)](#via-npm-experimental)
- [License](#license)

<!-- /TOC -->

## Documentation

The documentation files for this project can be found [here](https://github.com/dodekeract/manta-config-engine-app/tree/master/documentation).

## Features

- Multiple layouts, which can be used for advanced key-combinations.
- Easy-to-use web-interface. Direct export to zip.
- Opensource - if you need a feature, implement it or submit a GitHub issue.
- Aims to use as few lines of `autoexec` as possible. Skips unused aliases & commands.
- Saves the preset to the browser's LocalStorage and includes `preset.json` in the zip-archive, which can be used to restore it in case it gets lost.
- Generates Human-Readable, Commented Code

## Example Generated Autoexec

````java
// generated using https://github.com/dodekeract/manta-config-engine
// graphical user-interface available at https://manta.dodekeract.report

// # Settings:
//---// Gameplay:
dota_hud_netgraph 1                         // Show Net Graph
dota_player_units_auto_attack 0             // Auto Attack
dota_player_units_auto_attack_after_spell 0 // Auto Attack After Spell
dota_player_auto_repeat_right_mouse 1       // Auto-Repeat Right Mouse
cl_dota_alt_unit_movetodirection 1          // Force Movement Direction
dota_force_right_click_attack 1             // Force Right-Click Attack
dota_player_multipler_orders 1              // Unified Unit Orders
dota_shop_view_mode 1                       // Always Show Grid-View
dota_always_show_player_names 1             // Show Player Names
dota_show_hero_finder 1                     // Show Hero Finder
dota_enable_range_finder 1                  // Show Range Finder
dota_camera_disable_zoom 1                  // Mousewheel Zoom
dota_reset_camera_on_spawn 0                // Move Camera On Respawn
dota_minimap_hero_scalar 1                  // Proximity Scale
dota_minimap_show_hero_icon 1               // Show Hero Icons
dota_minimap_always_draw_hero_icons 1       // Always Show Hero Icons
dota_minimap_hero_scalar_distance 20        // Proximity Scale Distance
dota_minimap_hero_scalar_minimum 400        // Proximity Scale Minimum

//---// Performance:
engine_no_focus_sleep 1 // Alt-Tab Idle
sv_forcepreload 1       // Force Server-Data Preload
cl_forcepreload 1       // Force Client-Data Preload

//---// Engine:
alias custom_load_indicator "playsound sounds/ui/coins_big.vsnd_c"

// # Chatwheels:
//---// Chatwheel 0:
alias +custom_chatwheel_0 "custom_chatwheel_0_0"                          // Prepare Chatwheel
alias custom_chatwheel_0_0 "chat_wheel_phrase_0 8; custom_chatwheel_0_1"  // ▶ Missing
alias custom_chatwheel_0_1 "chat_wheel_phrase_1 1; custom_chatwheel_0_2"  // ▶ Careful!
alias custom_chatwheel_0_2 "chat_wheel_phrase_2 2; custom_chatwheel_0_3"  // ▶ Get Back!
alias custom_chatwheel_0_3 "chat_wheel_phrase_3 3; custom_chatwheel_0_4"  // ▶ We need wards.
alias custom_chatwheel_0_4 "chat_wheel_phrase_4 29; custom_chatwheel_0_5" // ▶ Enemy returned
alias custom_chatwheel_0_5 "chat_wheel_phrase_5 54; custom_chatwheel_0_6" // ▶ Affirmative
alias custom_chatwheel_0_6 "chat_wheel_phrase_6 6; custom_chatwheel_0_7"  // ▶ Push now
alias custom_chatwheel_0_7 "chat_wheel_phrase_7 61; +chatwheel"           // ▶ Nice
alias -custom_chatwheel_0 "-chatwheel"                                    // Close Chatwheel

//---// Chatwheel 1:
alias +custom_chatwheel_1 "custom_chatwheel_1_0"                          // Prepare Chatwheel
alias custom_chatwheel_1_0 "chat_wheel_phrase_0 30; custom_chatwheel_1_1" // ▶ All enemy heroes missing!
alias custom_chatwheel_1_1 "chat_wheel_phrase_1 66; custom_chatwheel_1_2" // ▶ Game is hard
alias custom_chatwheel_1_2 "chat_wheel_phrase_2 78; custom_chatwheel_1_3" // ▶ I'm retreating
alias custom_chatwheel_1_3 "chat_wheel_phrase_3 41; custom_chatwheel_1_4" // ▶ We need detection
alias custom_chatwheel_1_4 "chat_wheel_phrase_4 79; custom_chatwheel_1_5" // ▶ Space created
alias custom_chatwheel_1_5 "chat_wheel_phrase_5 70; custom_chatwheel_1_6" // ▶ Relax, you're doing fine
alias custom_chatwheel_1_6 "chat_wheel_phrase_6 23; custom_chatwheel_1_7" // ▶ Bait
alias custom_chatwheel_1_7 "chat_wheel_phrase_7 68; +chatwheel"           // ▶ My bad
alias -custom_chatwheel_1 "-chatwheel"                                    // Close Chatwheel

// # Dependencies:
alias custom_ability_quickcast_0 "dota_ability_quickcast 0"                      // Quick-Cast Ability 1
alias custom_ability_selfcast_0 "dota_ability_execute 0; dota_ability_execute 0" // Self-Cast Ability 1

//---// Cycle 0:
alias custom_cycle_0 custom_cycle_0_0                                                    // Prepare Cycle
alias custom_cycle_0_0 "alias custom_cycle_0 custom_cycle_0_1; custom_cycle_0_command_0" // Cycle Through
alias custom_cycle_0_1 "alias custom_cycle_0 custom_cycle_0_2; custom_cycle_0_command_1" // Cycle Through
alias custom_cycle_0_2 "alias custom_cycle_0 custom_cycle_0_3; custom_cycle_0_command_2" // Cycle Through
alias custom_cycle_0_3 "alias custom_cycle_0 custom_cycle_0_0; custom_cycle_0_command_3" // Finish Cycle
alias custom_cycle_0_command_0 dota_health_per_vertical_marker 250                       // Command 1
alias custom_cycle_0_command_1 dota_health_per_vertical_marker 325                       // Command 2
alias custom_cycle_0_command_2 dota_health_per_vertical_marker 450                       // Command 3
alias custom_cycle_0_command_3 dota_health_per_vertical_marker 550                       // Command 4

alias custom_item_quickcast_0 "dota_item_quick_cast 0"                  // Quick-Cast Item 1
alias custom_item_selfcast_0 "dota_item_execute 0; dota_item_execute 0" // Self-Cast Item 1
alias +custom_layout_1 "exec layout-1.cfg"                              // Load Layout 2
alias -custom_layout_1 "exec layout-0.cfg"                              // Unload Layout 2

//---// View Base (Toggle):
alias +custom_view_base_toggle "custom_view_base_toggle_radiant"                                         // Set Default Base To Radiant
alias custom_view_base_toggle_dire "dota_camera_set_lookatpos 7000 6250; custom_view_base_toggle_0"      // Look At Dire Base
alias custom_view_base_toggle_radiant "dota_camera_set_lookatpos -7000 -6500; custom_view_base_toggle_1" // Look At Radiant Base
alias custom_view_base_toggle_0 "alias +custom_view_base_toggle custom_view_base_toggle_radiant"         // Set Radiant As Next Base
alias custom_view_base_toggle_1 "alias +custom_view_base_toggle custom_view_base_toggle_dire"            // Set Dire As Next Base
alias -custom_view_base_toggle "dota_recent_event; dota_recent_event; +dota_camera_follow"               // Jump Back

//---// View Rune (Toggle):
alias +custom_view_rune_toggle "custom_view_rune_toggle_top"                                           // Set Default Rune To Top
alias custom_view_rune_toggle_top "dota_camera_set_lookatpos -2225 1503; custom_view_rune_toggle_0"    // Look At Top Rune
alias custom_view_rune_toggle_bottom "dota_camera_set_lookatpos 2824 -2350; custom_view_rune_toggle_1" // Look At Bottom Rune
alias custom_view_rune_toggle_0 "alias +custom_view_rune_toggle custom_view_rune_toggle_bottom"        // Set Bottom As Next Rune
alias custom_view_rune_toggle_1 "alias +custom_view_rune_toggle custom_view_rune_toggle_top"           // Set Top As Next Rune
alias -custom_view_rune_toggle "dota_recent_event; dota_recent_event; +dota_camera_follow"             // Jump Back

// # Primary Layout:
exec layout-0.cfg

// # Load Indicator:
custom_load_indicator
````

## Installation

### Via Git (recommended)
- Install git & [Node.js](https://nodejs.org)
- `git clone https://github.com/dodekeract/manta-config-engine-app`
- `npm install`

#### Running (git-only)

- `npm run start`

#### Applying Changes (git-only)

- `npm run apply`

#### Watching For Changes (git-only)

- `npm run watch`

### Via NPM (experimental)
- Install [Node.js](https://nodejs.org)
- `npm install dota2-manta-config-engine-app -g`

#### Running (npm-only)
- `manta-config-engine-app` or `manta-config-engine-app portNumber`

## License
[MIT](https://github.com/dodekeract/manta-config-engine-app/tree/master/documentation/LICENSE.md)
