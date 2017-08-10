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
 * This creates the UI and listens for events
 *
 */

var React = require('react');
var ReactDOM = require('react-dom');

window.addEventListener('refocus.rooms.settings', function (uiUpdate) {
	// add functions on settings change
}, false);

window.addEventListener('refocus.bots.data', function (uiUpdate) {
	// add functions on botData change
}, false);

window.addEventListener('refocus.bots.actions', function (uiUpdate) {
	// add functions on bot actions
}, false);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);