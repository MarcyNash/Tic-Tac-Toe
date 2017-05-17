'use strict'

const signUpSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('sign up success')
}

const signUpFailure = (error) => {
  console.log('sign up failure')
  // tell user there is an error
  console.error(error)
}

const signInSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('sign in success')
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
  console.log('change password failed')
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
