'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetGames = function (event) {
  event.preventDefault()
  // console.log('event worked')
  // index().then().catch()
  api.index()
  .then(ui.onGetGamesSuccess)
  .catch(ui.onGetGamesFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data.Game.id)
  api.show(data)
  .then(ui.onSearchGameSuccess)
  .catch(ui.onSearchGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const currentForm = event.currentTarget
  const data = getFormFields(currentForm)
  console.log('onUpdateGame  ')
  // console.log('Got to onUpdateGame')
  // console.log(data)
  api.update(data)
  .then((response) => {
    // Find the input element for the cell that was clicked. I'm sure there is
    // better jQuery DOM filter.
    $('input').get(3 * data.game.cell.index + 1).value = data.game.cell.value
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

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /Games
// button is clicked

// const onCellClicked = function (event) {
//   event.preventDefault()
//   console.log(event.target)
//   api.update(event)
//   .then(ui.onCellClickedSuccess)
//   .catch(ui.onCellClickedFailure)
// }

const addHandlers = () => {
  // 'on' calls the callback function and passes the browser 'event' as the firsr arg
  // $('#cell0').on('click', onUpdateGame)
  // $('#cell1').on('click', onUpdateGame)
  // $('#cell2').on('click', onUpdateGame)
  $('#start-restart-game').on('click', onCreateGame)
}

let addGameboardClickHandlers = function () {
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
