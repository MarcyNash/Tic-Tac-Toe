'use strict'

const signUpSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  $('#sign-up-close').click()
  $('#sign-up-btn').prop('disabled', true)
  // $('#start-restart-game').prop( "disabled", false )
}

const signUpFailure = (error) => {
  $('#notifications').text('Sign Up failed: ' + error)
}

const signInSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  // $('#notifications').val('sign in success')
  console.log('sign in success')
  $('#sign-in-close').click()   // close sign-in modal dlg
  // $('#start-restart-game').on('click', onCreateGame)
  // $('#start-restart-game').disabled('false')
  $('#start-restart-game').prop('disabled', false)
  $('#game-statistics').prop('disabled', false)
  $('#change-password-btn').prop('disabled', false)
  $('#sign-out-btn').prop('disabled', false)
  $('#sign-up-btn').prop('disabled', true)
  $('#sign-in-btn').prop('disabled', true)
}

const signInFailure = (error) => {
  // tell user there is an error
  $('#notifications').text('Sign In failed: ' + error)
  // $('#sign-in-failure').hidden('false')
}

const changePasswordSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  $('#notifications').text('Password changed.')
  $('#change-password-close').click()
}

const changePasswordFailure = (error) => {
  // tell user there is an error
  $('#notifications').text('Change password failed: ' + error)
}

const signOutSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  $('#notifications').text('You are signed out.')
  $('#sign-out-close').click()
  $('#start-restart-game').prop('disabled', true)
  $('#game-statistics').prop('disabled', true)
  $('#change-password-btn').prop('disabled', true)
  $('#sign-out-btn').prop('disabled', true)
  $('#sign-up-btn').prop('disabled', false)
  $('#sign-in-btn').prop('disabled', false)
}

const signOutFailure = (error) => {
  // tell user there is an error
  $('#notifications').text('Sign out failed: ' + error)
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
