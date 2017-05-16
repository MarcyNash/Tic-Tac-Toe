'use strict'

const signUpSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log(data)
}

const signUpFailure = (error) => {
  // tell user there is an error
  console.error(error)
}

const signInSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log(data)
}

const signInFailure = (error) => {
  // tell user there is an error
  console.error(error)
}

const changePasswordSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('password changed! ' + data)
}

const changePasswordFailure = (error) => {
  // tell user there is an error
  console.error(error)
}

const signOutSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('password changed! ' + data)
}

const signOutFailure = (error) => {
  // tell user there is an error
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
