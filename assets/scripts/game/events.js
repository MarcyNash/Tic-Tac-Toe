'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
// const gameEvents = require('./game/events.js')

const onGetGames = function (event) {
  event.preventDefault()
  console.log('event worked')
  // index().then().catch()
  api.index()
  .then(ui.onGetGamesSuccess)
  .catch(ui.onGetGamesFailure)
}

const onSearchGames = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data.Game.id)
  api.show(data)
  .then(ui.onSearchGameSuccess)
  .catch(ui.onSearchGameFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.destroy(data)
  .then(ui.onDeleteGameSuccess)
  .catch(ui.onDeleteGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Got to onUpdateGame')
  console.log(data)
  api.update(data)
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onUpdateGameFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Got to onCreateGame')
  console.log(data)
  api.create(data)
  .then(ui.onCreateGameSuccess)
  .catch(ui.onCreateGameFailure)
}

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /Games
// button is clicked

const onCellClicked = function (event) {
  event.preventDefault()
  console.log(event.target)
  ui.onCellClicked()
  .then(ui.onCellClickedSuccess)
  .catch(ui.onCellClickedFailure)
}

const addHandlers = () => {
  // 'on' calls the callback function and passes the browser 'event' as the firsr arg
  $('.ttt-cell').on('click', onCellClicked)
}

module.exports = {
  addHandlers,
  onCellClicked
}
