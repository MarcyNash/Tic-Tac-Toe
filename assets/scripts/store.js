'use strict'

const store = {
}

let currentGame = {
  game: {
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
}

let currentPlayer = {
  'id': null,
  'email': '',
  'token': ''
}

// const Player = function (id, email, token) {
//   this.id = id
//   this.email = email
//   this.token = token
// }

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
  store,
  currentGame,
  currentPlayer
}
