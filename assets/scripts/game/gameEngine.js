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
let statisticsArray = []

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
    // turn off all tic-tac-toe game board cell clicks
    for (let i = 0; i < 9; i++) {
      $('#cell' + i).off('click')
    }
  }
  return isOver
}

const clearGameBoard = function () {
  $('input.ttt-cell').val(' ')
}

const showStatistics = function (arr) {
  let inProgressCount = 0
  let finshedCount = 0
  let xWonCount = 0
  let oWonCount = 0
  let drawCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].over) {
      finshedCount++
      const whoWon = winner(arr[i])
      if (whoWon === 'x') {
        xWonCount++
      } else if (whoWon === 'o') {
        oWonCount++
      } else {
        drawCount++
      }
    } else {
      inProgressCount++
    }
  }
  $('#notifications').text('X won ' + xWonCount + ' games, O won ' + oWonCount + ' games and there are ' + drawCount + ' draws. \nThere are ' + inProgressCount + ' games in progress.')
}

const showGamesInProgress = function () {
  let inProgressCount = 0
  for (let i = 0; i < statisticsArray.length; i++) {
    if (statisticsArray[i].over === false) {
      inProgressCount++
      // add gameid to a dropdown list
    }
  }
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
  clearGameBoard,
  statisticsArray,
  showStatistics
}
