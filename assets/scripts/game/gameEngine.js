'use strict'

let currentGame = {
  'id': null,
  'cells': ['', '', '', '', '', '', '', '', ''],
  'over': false,
  'player_x': {
    'id': null,
    'email': ''
  },
  'player_o': {
    'id': null,
    'email': ''
  }
}

let currentPlayer = {
  'id': null,
  'email': '',
  'token': '',
  'player_x': false
}

let currentMove = 0
let currentMoveArray = []

const winner = function (game) {
  if (game.cells[0] === game.cells[1] &&
    game.cells[1] === game.cells[2]) {
    return game.cells[0]
  } else if (game.cells[3] === game.cells[4] &&
      game.cells[4] === game.cells[5]) {
    return game.cells[3]
  } else if (game.cells[6] === game.cells[7] &&
      game.cells[7] === game.cells[8]) {
    return game.cells[6]
  } else if (game.cells[0] === game.cells[3] &&
      game.cells[3] === game.cells[6]) {
    return game.cells[0]
  } else if (game.cells[1] === game.cells[4] &&
      game.cells[4] === game.cells[7]) {
    return game.cells[1]
  } else if (game.cells[2] === game.cells[5] &&
      game.cells[5] === game.cells[8]) {
    return game.cells[2]
  } else if (game.cells[0] === game.cells[4] &&
      game.cells[4] === game.cells[8]) {
    return game.cells[0]
  } else if (game.cells[2] === game.cells[4] &&
      game.cells[4] === game.cells[6]) {
    return game.cells[2]
  }
  return ''
}

let isOver = function (game, cell, move) {
  game.cells[cell.index] = cell.value
  isOver = winner(game) !== '' || move + 1 > 8
  game.cells[cell.index] = ''
  if (isOver) {
    console.log('game is over')
  }
  return isOver
}

const clearGameBoard = function () {
  $('input.ttt-cell').val(' ')
}

// possible states -- 'sign-in', 'get-game', 'game-in-progress'
// let playState = 'sign-in'

// const allCreate
  // $('#start-restart-game').on('click', onCreateGame)

// const Game = function (id) {
//   this.id = id
//   this.cells = ['', '', '', '', '', '', '', '', '']
//   this.over = false
//   this.player_x = {}
//   this.player_o = {}
// }

// let playersArray = []

// const findIndex = function (id, email) {
//   for (let i = 0; i < playersArray.length; i++) {
//     if (playersArray[0].id ==== id &&
//       playersArray[0].email ==== email)
//       return i
//   }
//   else {
//     return -1
//   }
// }

module.exports = {
  currentGame,
  currentPlayer,
  currentMoveArray,
  currentMove,
  winner,
  isOver,
  clearGameBoard
}
