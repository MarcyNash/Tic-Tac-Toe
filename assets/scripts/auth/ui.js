'use strict'

const signUpSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  $('#sign-up-close').click()
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
  // $('#notifications').val('sign in success')
  console.log('sign in success')
  $('#sign-in-close').click()
}

const signInFailure = (error) => {
  // tell user there is an error
  console.log('sign in failure')
  console.log(error)
  $('#sign-in-failure').hidden('false')
}

const changePasswordSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('password changed! ')
  $('#change-password-close').click()
}

const changePasswordFailure = (error) => {
  // tell user there is an error
  console.log('change password failed')
  console.log(error)
}

const signOutSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  console.log('sign out success! ')
  $('#sign-out-close').click()
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
