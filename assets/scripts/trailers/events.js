'use strict'

// const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const showTrailerListOnIndex = event => {
  // event.preventDefault()

  api.onShowTrailerListOnIndex()
    .then(ui.onshowTrailerListOnIndexSuccess)
    .catch(ui.onshowTrailerListOnIndexFailure)
}

const showATrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  api.deleteBook(event)
    .then(res => {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const updateTrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  api.deleteBook(event)
    .then(res => {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const createTrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  api.deleteBook(event)
    .then(res => {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const removeTrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  api.deleteBook(event)
    .then(res => {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  // $(window).on('load', signedOutLandingPageLoad)
  $(document).ready(showTrailerListOnIndex)
}

module.exports = {
  addHandlers
}
