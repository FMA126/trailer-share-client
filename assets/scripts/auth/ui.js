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
  store.signUpPassed = true

  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp1').removeClass('text-danger')
  $('#emailHelp1').addClass('text-muted')
  $('#emailHelp1').text("We'll never share your email with anyone else.")
}

const onSignUpFailure = responseData => {
  store.signUpPassed = false
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp1').text('Email already exists or passwords do not match')
  $('#emailHelp1').addClass('text-danger')
  $('#emailHelp1').removeClass('text-muted')
}

const onSignInSuccess = responseData => {
  $('form').trigger('reset')
  $(window).scrollTop(0)
  // if (!store.signInDev) {
  $('#navbarTogglerSignedOut').collapse('hide')
  $('#emailHelp2').removeClass('text-danger')
  $('#emailHelp2').addClass('text-muted')
  $('#emailHelp2').text("We'll never share your email with anyone else.")
  $('#sign-out-nav').addClass('d-none')
  $('#sign-in-nav').removeClass('d-none')
  // $('#spinnerModal').modal('toggle')
  // transition
  // $('#sign-out-landing-page').addClass('d-none')
  // $('#signed-in-flight-deck-page').removeClass('d-none')
  // $('#spinnerModal').modal('toggle')
  setTimeout(() => {
    $('#spinnerModal').modal('toggle')
    $('#sign-out-landing-page').addClass('d-none')
    $('#signed-in-flight-deck-page').removeClass('d-none')
  }, 800)
  setTimeout(() => {
    $('#user-trailer-button').trigger('click')
  }, 800)
  // setTimeout(() => {
  //   $('#spinnerModal').modal('toggle')
  //   $('#sign-out-landing-page').addClass('d-none')
  //   $('#signed-in-flight-deck-page').removeClass('d-none')
  // }, 2000)
  // } else {
  //   $('#dev-sign-in').addClass('text-success')
  // }
}

const onSignInFailure = responseData => {
  $(window).scrollTop(0)
  $('form').trigger('reset')
  setTimeout(() => {
    $('#spinnerModal').modal('toggle')
    // $('#sign-out-landing-page').addClass('d-none')
    // $('#signed-in-flight-deck-page').removeClass('d-none')
  }, 800)
  $('#emailHelp2').text('Email already exists or passwords do not match')
  $('#emailHelp2').addClass('text-danger')
  $('#emailHelp2').removeClass('text-muted')
}

const onSignOutSuccess = responseData => {
  store.active = false
  $(window).scrollTop(0)
  $('#navbarTogglerSignedIn').collapse('hide')
  $('#navbarTogglerSearch').collapse('hide')
  $('#sign-out-landing-page').removeClass('d-none')
  $('#signed-in-flight-deck-page').addClass('d-none')
  $('#sign-out-nav').removeClass('d-none')
  $('#sign-in-nav').addClass('d-none')
}

const onSignOutFailure = responseData => {
  $(window).scrollTop(0)
}

const onChangePasswordSuccess = () => {
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#passwordHelp').removeClass('invisible').addClass('visible', 'text-success')
  setTimeout(() => {
    $('#change-password-form-container').collapse('hide')
    $('#passwordHelp').removeClass('visible').addClass('invisible')
  }, 1500)
}

const onChangePasswordFailure = responseData => {
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#passwordHelp').removeClass('invisible').addClass('visible').text('Failed to change password')
  setTimeout(() => {
    $('#passwordHelp').removeClass('visible')
    $('#passwordHelp').addClass('invisible')
    $('#passwordHelp').text('Password changed successfully!')
  }, 2000)
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
