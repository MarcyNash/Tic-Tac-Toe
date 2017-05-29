'use strict'

const config = require('../config')
const game = require('./gameEngine')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    }
  })
  .then((response) => {
    game.statisticsArray = response
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.currentGame.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    }
  })
  .then((response) => {
    game.currentGame = response.game
  })
}

const update = function (data) {
  data.game.cell.value = game.currentMoveArray[game.currentMove % 2]
  data.game.over = game.isOver(game.currentGame, data.game.cell, game.currentMove)
  console.log('game over = ' + data.game.over)
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    },
    data
  })
  .then((response) => {
    game.currentMove++
    game.currentGame.cells[data.game.cell.index] = data.game.cell.value
  })
}

const create = function () {
  game.clearGameBoard()
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    }
  })
  .then((response) => {
    game.currentGame = response.game
    game.currentMove = 0
    if (game.currentPlayer.player_x) {
      game.currentMoveArray = ['O', 'X']
    } else {
      game.currentMoveArray = ['X', 'O']
    }
    game.currentPlayer.player_x = !game.currentPlayer.player_x
  })
}

module.exports = {
  index,
  show,
  update,
  create
}
