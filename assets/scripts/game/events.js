'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetGames = function (event) {
  event.preventDefault()
  api.index()
  .then(ui.onGetGamesSuccess)
  .catch(ui.onGetGamesFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data.Game.id)
  api.show(data)
  .then(ui.onGetGameSuccess)
  .catch(ui.onGetGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const currentForm = event.currentTarget
  const data = getFormFields(currentForm)
  api.update(data)
  .then((response) => {
    // Find the input element for the cell that was clicked. I'm sure there is
    // better jQuery DOM filter.
    $('input').get(3 * data.game.cell.index + 1).value = data.game.cell.value
    // Turn off click event handler for cell.
    $('#cell' + data.game.cell.index).off('click')
  })
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onUpdateGameFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('Got to onCreateGame')
  // console.log(data)
  api.create()
  .then(addGameboardClickHandlers)
  .then(ui.onCreateGameSuccess)
  .catch(ui.onCreateGameFailure)
}

const addHandlers = () => {
  $('#start-restart-game').on('click', onCreateGame)
  $('#game-statistics').on('click', onGetGames)
}

const addGameboardClickHandlers = function () {
  $('#cell0').on('click', onUpdateGame)
  $('#cell1').on('click', onUpdateGame)
  $('#cell2').on('click', onUpdateGame)
  $('#cell3').on('click', onUpdateGame)
  $('#cell4').on('click', onUpdateGame)
  $('#cell5').on('click', onUpdateGame)
  $('#cell6').on('click', onUpdateGame)
  $('#cell7').on('click', onUpdateGame)
  $('#cell8').on('click', onUpdateGame)
}

module.exports = {
  addHandlers,
  onUpdateGame,
  onCreateGame,
  onGetGames,
  onGetGame,
  addGameboardClickHandlers
}
