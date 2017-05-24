'use strict'

const config = require('../config')
// const store = require('../store')
const game = require('../game/gameEngine')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
    .then((response) => {
      game.currentPlayer.id = response.user.id
      game.currentPlayer.email = response.user.email
      game.currentPlayer.token = response.user.token
    })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + game.currentPlayer.id,
    method: 'PATCH',
    // header: 'Authorization: Token token=' + store.userToken,
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + game.currentPlayer.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + game.currentPlayer.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
