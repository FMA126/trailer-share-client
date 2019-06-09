'use strict'

const store = require('../store')

const switchSignInUp = () => {
  if ($('#sign-up').attr('class') === 'hide') {
    $(window).scrollTop(0)
    $('form').trigger('reset')
    $('#sign-in').addClass('hide')
    $('#sign-up').removeClass('hide')
    $('#sign-up-link').addClass('hide')
    $('#back-sign-in').removeClass('hide')
  } else {
    $(window).scrollTop(0)
    $('form').trigger('reset')
    $('#sign-in').removeClass('hide')
    $('#sign-up').addClass('hide')
    $('#sign-up-link').removeClass('hide')
    $('#back-sign-in').addClass('hide')
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
  // console.log('success', responseData)
  store.signUpPassed = true
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp1').removeClass('attention')
  $('#emailHelp1').text("We'll never share your email with anyone else.")
  $('#message').text('Signed up successfully! Please sign in')
}

const onSignUpFailure = responseData => {
  // console.log('failure', responseData)
  store.signUpPassed = false
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp1').text('Email already exists or passwords do not match')
  $('#emailHelp1').addClass('attention')
  $('#game-board-section').removeClass('hide')
}

const onSignInSuccess = responseData => {
  // console.log('success', responseData)
  store.user = responseData.user
  $(window).scrollTop(0)
  $('#game-board-single').tooltip('enable')
  $('#single-new').tooltip('enable')
  $('#multi-new').tooltip('enable')
  $('#join-new').tooltip('enable')
  $('#message').text('Welcome! Choose A Game To Start')
  $('#emailHelp2').removeClass('attention')
  $('#emailHelp2').text("We'll never share your email with anyone else.")
  $('form').trigger('reset')
  $('.dots').attr('data-toggle', 'modal')
  $('.dots').addClass('pointer')
  $('#landing-auth').addClass('hide')
  $('#game-master').removeClass('hide')
}

const onSignInFailure = responseData => {
  // console.log('failure', responseData)
  $(window).scrollTop(0)
  $('form').trigger('reset')
  $('#emailHelp2').text('Email already exists or passwords do not match')
  $('#emailHelp2').addClass('attention')
}

const onSignOutSuccess = responseData => {
  // console.log('success', responseData)
  $(window).scrollTop(0)
  store.active = false
  $('#game-board-single').tooltip('enable')
  $('.box').text('')
  $('.box').removeClass('highlight-x')
  $('.box').removeClass('highlight-o')
  $('#game-board-single').tooltip('enable')
  $('#game-board-multi').addClass('hide')
  $('#game-board-single').removeClass('hide')
  $('#message').text('Signed out successfully!')
  $('#landing-auth').removeClass('hide')
  $('.dots').attr('data-toggle', '')
  $('.dots').removeClass('pointer')
  $('#game-master').addClass('hide')
  $('form').trigger('reset')
}

const onSignOutFailure = responseData => {
  $(window).scrollTop(0)
  $('#message').text('Signed out failed!')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $(window).scrollTop(0)
  $('#passwordHelp').removeClass('hide')
  $('#passwordHelp').text('Password changed successfully.')
  $('#passwordHelp').removeClass('attention')
  $('form').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  $(window).scrollTop(0)
  $('#passwordHelp').removeClass('hide')
  $('#passwordHelp').text('Please re-enter current password.')
  $('#passwordHelp').addClass('attention')
  $('form').trigger('reset')
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
