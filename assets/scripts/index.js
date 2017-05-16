'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()      // add the game event handler to onDocumentReady
  gameEvents.addHandlers()      // add the game event handler to onDocumentReady
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
