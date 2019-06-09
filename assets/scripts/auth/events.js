'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAutoSignIn = (email, password) => {
  const reqObj = {
    'credentials': {
      'email': email,
      'password': password
    }
  }
  api.signIn(reqObj)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)

  // console.log('sign up pressed', formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
    .then(() => {
      if (store.signUpPassed) {
        onAutoSignIn(formData.credentials.email, formData.credentials.password)
      }
    })
}

const onSwitchSignInUp = () => {
  ui.switchSignInUp()
}

const onShowSettings = () => {
  ui.onShowSettingsSuccess()
}

const onGameReturn = () => {
  ui.onGameReturnSuccess()
}

const onShowAbout = () => {
  ui.onShowAboutSuccess()
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('sign in pressed', formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = event => {
  event.preventDefault()

  // console.log('sign out pressed')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  // console.log('Hi from event change password')

  const form = event.target
  const formData = getFormFields(form)

  // console.log('change password pressed', formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const addHandlers = () => {
  $('h1').on('click', console.log('Hi from auth events'))
}

module.exports = {
  onSwitchSignInUp,
  onShowSettings,
  onGameReturn,
  onShowAbout,
  onAutoSignIn,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  addHandlers
}
