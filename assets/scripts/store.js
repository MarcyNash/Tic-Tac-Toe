'use strict'

const store = {

}

const Player = function (id, email, token) {
  console.log('Player')
  this.id = id
  this.email = email
  this.token = token
}

const Game = function (id) {
  this.id = id
  this.cells = ['', '', '', '', '', '', '', '', '']
  this.ovet = false
  this.player_x = {}
  this.player_o = {}
}

let currentGame = null
let playersArray = []

module.exports = {
  store,
  Player,
  Game,
  currentGame,
  playersArray
}
