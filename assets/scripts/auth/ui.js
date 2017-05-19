'use strict'

const signUpSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
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
  // $('#sign-in').modal.close()
  // $('sign-me-in').val('You are signed In')
  // $('sign-me-in').enable(false)
}

const signInFailure = (error) => {
  // tell user there is an error
  console.log('sign in failure')
  console.error(error)
}

const changePasswordSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('password changed! ')
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
  console.log('sign out success! ')
}

const signOutFailure = (error) => {
  console.log('sign out failure! ')
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
