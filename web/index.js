
/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * /web/index.js
 *
 * This code handles intial render of the bot and any rerenders triggered
 * from javascript events.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App.jsx');

const { env } = require('../config.js');
const config = require('../config.js')[env];
const bdk = require('@salesforce/refocus-bdk')(config);
const botName = require('../package.json').name;

/**
 * When a refocus.events is dispatch it is handled here.
 *
 * @param {Event} event - The most recent event object
 */
function handleEvents(event) {
  bdk.log.debug(botName + ' Event', event);
}

/**
 * When a refocus.room.settings is dispatch it is handled here.
 *
 * @param {Room} room - Room object that was dispatched
 */
function handleSettings(room) {
  bdk.log.debug(botName + ' Settings Change', room);
}

/**
 * When a refocus.bot.data is dispatch it is handled here.
 *
 * @param {BotData} data - Bot Data object that was dispatched
 */
function handleData(data) {
  bdk.log.realtime(botName + ' Bot Data', data);
}

/**
 * When a refocus.bot.actions is dispatch it is handled here.
 *
 * @param {BotAction} action - Bot Action object that was dispatched
 */
function handleActions(action) {
  bdk.log.realtime(botName + ' Bot Action', action);
}

/**
 * Render the react components with the data and templates needed
 */
function renderUI(){
  ReactDOM.render(
    <App />,
    document.getElementById(botName)
  );
}

/**
 * The actions to take place before load.
 */
function init() {
  renderUI();
}

// Event Handling
document.body.addEventListener('refocus.room.settings', handleSettings, false);
document.getElementById(botName)
  .addEventListener('refocus.bot.data', handleData, false);
document.getElementById(botName)
  .addEventListener('refocus.bot.actions', handleActions, false);
document.getElementById(botName)
  .addEventListener('refocus.events', handleEvents, false);

init();
