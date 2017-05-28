'use strict'

const gameEngine = require('./gameEngine')

const onGetGamesSuccess = (response) => {
  $('#notifications').text('Got the requested games.')
  gameEngine.showStatistics(gameEngine.statisticsArray.games)
}

const onGetGamesFailure = (response) => {
  $('#notifications').text('Unable to get the requested games. Cannot calculate statistics')
}

const onGetGameSuccess = (response) => {
  $('#notifications').text('Get the requested game.')
}

const onGetGameFailure = (response) => {
  $('#notifications').text('Unable to get the requested game.')
}

const onUpdateGameSuccess = (response) => {
  const winner = gameEngine.winner(gameEngine.currentGame)
  if (winner === 'x') {
    $('#notifications').text('Game Over - X won')
  } else if (winner === 'o') {
    $('#notifications').text('Game Over - O won')
  } else if (gameEngine.currentMove > 8) {
    $('#notifications').text('Game Over - It\'s a draw')
  }
}

const onUpdateGameFailure = (response) => {
  $('#notifications').text('Unable to update the game.')
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
  onGetGameSuccess,
  onGetGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
