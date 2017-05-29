'use strict'

const gameEngine = require('./gameEngine')

const onGetGamesSuccess = (response) => {
  gameEngine.showStatistics(gameEngine.statisticsArray.games)
}

const onGetGamesFailure = (response) => {
  $('#notifications').text('Unable to get the requested games. Cannot calculate statistics.')
}

const onGetGameSuccess = (response) => {
  $('#notifications').text('Got the requested game.')
}

const onGetGameFailure = (response) => {
  $('#notifications').text('Unable to get the requested game.')
}

const onUpdateGameSuccess = (response) => {
  const winner = gameEngine.winner(gameEngine.currentGame)
  if (winner.toLowerCase() === 'x') {
    $('#notifications').text('Game Over - X won')
  } else if (winner.toLowerCase() === 'o') {
    $('#notifications').text('Game Over - O won')
  } else if (gameEngine.currentMove > 8) {
    $('#notifications').text('Game Over - It\'s a draw')
  }
}

const onUpdateGameFailure = (response) => {
  $('#notifications').text('Unable to update the game.')
}

const onCreateGameSuccess = (response) => {
  $('#notifications').text('Created the Tic Tac Toe game. Start playing!')
}

const onCreateGameFailure = (response) => {
  $('#notifications').text('Unable to create the game.')
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
