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
      const newPlayer = new store.Player(response.user.id, response.user.email, response.user.token)
      // if (store.playersArray.prototype.includes(newPlayer) === false) {
      store.playersArray.push(newPlayer)
      // }
    })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.userID,
    method: 'PATCH',
    // header: 'Authorization: Token token=' + store.userToken,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .then((response) => {
      console.log('response from changePassword ' + response)
    })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
