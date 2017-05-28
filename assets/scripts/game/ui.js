'use strict'

const gameEngine = require('./gameEngine')

const onGetGamesSuccess = (response) => {
  console.log('yaaaayyyyyyy we did it')
  console.log(response)
}

const onGetGamesFailure = (response) => {
  console.log('boooooo, we failed')
  console.log(response)
}

const onSearchGameSuccess = (response) => {
  console.log('yaaaayyyyyyy we did it')
  console.log(response)
}

const onSearchGameFailure = (response) => {
  console.log('boooooo, we failed')
  console.log(response)
}

const onDeleteGameSuccess = (response) => {
  console.log('yaaaayyyyyyy we did it')
  console.log(response)
}

const onDeleteGameFailure = (response) => {
  console.log('boooooo, we failed')
  console.log(response)
}

const onUpdateGameSuccess = (response) => {
  const winner = gameEngine.winner(gameEngine.currentGame)
  if (winner === 'x') {
    $('#notifications').text('x won')
  } else if (winner === 'o') {
    $('#notifications').text('o won')
  } else if (gameEngine.currentMove > 8) {
    $('#notifications').text('Game Over - It\'s a draw')
  }
}

const onUpdateGameFailure = (response) => {
  console.log('boooooo, we failed')
  console.log(response)
}

const onCreateGameSuccess = (response) => {
  $('#notifications').text('Created Tic Tac Toe game. Start playing')
}

const onCreateGameFailure = (response) => {
  $('#notifications').text('Unable to create the game. Please try again.')
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onSearchGameSuccess,
  onSearchGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
