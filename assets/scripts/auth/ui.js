'use strict'

const store = require('../store')

const switchSignInUp = () => {
  if ($('#sign-up-form-container').attr('class') === 'd-none') {
    $(window).scrollTop(0)
    $('form').trigger('reset')
    $('#sign-in-form-container').addClass('d-none')
    $('#sign-up-form-container').removeClass('d-none')
  } else {
    $(window).scrollTop(0)
    $('form').trigger('reset')
    $('#sign-in-form-container').removeClass('d-none')
    $('#sign-up-form-container').addClass('d-none')
  }
}

const onShowSettingsSuccess = () => {
  $(window).scrollTop(0)
  $('#message').text('')
  $('#stats-table').addClass('hide')
  $('#game-master').addClass('hide')
  $('#about').addClass('hide')
  $('#all-settings').removeClass('hide')
}

const onGameReturnSuccess = () => {
  $(window).scrollTop(0)
  $('#stats-table').addClass('hide')
  $('#passwordHelp').addClass('hide')
  $('#game-master').removeClass('hide')
  $('#all-settings').addClass('hide')
  $('#about').addClass('hide')
}

const onShowAboutSuccess = () => {
  $(window).scrollTop(0)
  $('#message').text('')
  $('#stats-table').addClass('hide')
  $('#about').removeClass('hide')
  $('#game-master').addClass('hide')
  $('#all-settings').addClass('hide')
}

const onSignUpSuccess = responseData => {
  console.log('successfully signed up', responseData)
  store.signUpPassed = true

  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp1').removeClass('text-danger')
  $('#emailHelp1').addClass('text-muted')
  $('#emailHelp1').text("We'll never share your email with anyone else.")
}

const onSignUpFailure = responseData => {
  console.log('failure to sign in', responseData)
  store.signUpPassed = false
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp1').text('Email already exists or passwords do not match')
  $('#emailHelp1').addClass('text-danger')
  $('#emailHelp1').removeClass('text-muted')
  // $('#game-board-section').removeClass('hide')
}

const onSignInSuccess = responseData => {
  console.log('successfully signed in', responseData)
  $('form').trigger('reset')
  $(window).scrollTop(0)

  if (!store.signInDev) {
    $('#navbarTogglerSignedOut').collapse('hide')
    $('#emailHelp2').removeClass('text-danger')
    $('#emailHelp2').addClass('text-muted')
    $('#emailHelp2').text("We'll never share your email with anyone else.")
    $('#sign-out-nav').addClass('d-none')
    $('#sign-in-nav').removeClass('d-none')
    $('#sign-out-landing-page').addClass('d-none')
    $('#signed-in-flight-deck-page').removeClass('d-none')
  } else {
    $('#dev-sign-in').addClass('text-success')
  }
}

const onSignInFailure = responseData => {
  console.log('failure to sign in', responseData)
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp2').text('Email already exists or passwords do not match')
  $('#emailHelp2').addClass('text-danger')
  $('#emailHelp2').removeClass('text-muted')
}

const onSignOutSuccess = responseData => {
  console.log('successfully signed out', responseData)
  store.active = false
  $(window).scrollTop(0)
  $('#navbarTogglerSignedIn').collapse('hide')
  $('#navbarTogglerSearch').collapse('hide')
  $('#sign-out-landing-page').removeClass('d-none')
  $('#signed-in-flight-deck-page').addClass('d-none')
  $('#sign-out-nav').removeClass('d-none')
  $('#sign-in-nav').addClass('d-none')
  // $('#game-board-single').tooltip('enable')
  // $('.box').text('')
  // $('.box').removeClass('highlight-x')
  // $('.box').removeClass('highlight-o')
  // $('#game-board-single').tooltip('enable')
  // $('#game-board-multi').addClass('hide')
  // $('#game-board-single').removeClass('hide')
  // $('#message').text('Signed out successfully!')
  // $('#landing-auth').removeClass('hide')
  // $('.dots').attr('data-toggle', '')
  // $('.dots').removeClass('pointer')
  // $('#game-master').addClass('hide')
  // $('form').trigger('reset')
}

const onSignOutFailure = responseData => {
  console.log('failure to sign out', responseData)
  $(window).scrollTop(0)
  // $('#message').text('Signed out failed!')
  // $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  console.log('successfully changed password')
  $(window).scrollTop(0)
  // $('#passwordHelp').removeClass('hide')
  // $('#passwordHelp').text('Password changed successfully.')
  // $('#passwordHelp').removeClass('attention')
  $('form').trigger('reset')
  $('#change-password-form-container').collapse('hide')
}

const onChangePasswordFailure = responseData => {
  console.log('failure to change password', responseData)
  $(window).scrollTop(0)
  // $('#passwordHelp').removeClass('hide')
  // $('#passwordHelp').text('Please re-enter current password.')
  // $('#passwordHelp').addClass('attention')
  // $('form').trigger('reset')
}

module.exports = {
  switchSignInUp,
  onShowSettingsSuccess,
  onGameReturnSuccess,
  onShowAboutSuccess,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
