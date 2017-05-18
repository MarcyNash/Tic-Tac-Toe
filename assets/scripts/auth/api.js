'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log('data is ' + data)
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
      store.currentPlayer.id = response.user.id
      store.currentPlayer.email = response.user.email
      store.currentPlayer.token = response.user.token
      // if (store.playersArray.length === 0 ||
      //   store.playersArray.prototype.firstIn(newPlayer) === false) {
      //   store.playersArray.push(newPlayer)
      // }
      // store.playersArray.push(newPlayer)
    })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.currentPlayer.id,
    method: 'PATCH',
    // header: 'Authorization: Token token=' + store.userToken,
    headers: {
      Authorization: 'Token token=' + store.currentPlayer.token
    },
    data
  })
    .then((response) => {
    })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.currentPlayer.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.currentPlayer.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
