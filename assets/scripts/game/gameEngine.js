'use strict'

let currentGame = {
  'id': null,
  'cells': ['', '', '', '', '', '', '', '', ''],
  'over': false,
  'player_x': {
    'id': null,
    'email': '',
    'player_o': {
      'id': null,
      'email': ''
    }
  }
}

let currentPlayer = {
  'id': null,
  'email': '',
  'token': '',
  'player_x': true
}

const moveArray = ['x', 'o']
let currentMove = 0

// possible states -- 'sign-in', 'get-game', 'game-in-progress'
let playState = 'sign-in'

let removeClickHandler = function (gameboardCell) {
  $(gameboardCell).off('click')
}

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
  moveArray,
  currentMove,
  playState,
  removeClickHandler
}
