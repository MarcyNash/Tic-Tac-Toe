'use strict'

const config = require('../config')
const store = require('../store')
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
    game.response = response
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

// {
//   "game": {
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }

const update = function (data) {
  data.game.cell.value = game.moveArray[game.currentMove % 2]
  game.currentMove++
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    },
    data
  })
  .then((response) => {
    game.response = response
  })
}

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    }
  })
  .then((response) => {
    game.currentGame = response.game
  })
}

module.exports = {
  index,
  show,
  update,
  create
}
