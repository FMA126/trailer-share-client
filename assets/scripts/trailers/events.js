'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
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
  // api.deleteBook(event)
  //   .then(res => {
  //     onGetBooks(event)
  //   })
  //   .catch(ui.failure)
}

const updateTrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  // api.deleteBook(event)
  //   .then(res => {
  //     onGetBooks(event)
  //   })
  //   .catch(ui.failure)
}

const createTrailer = (event) => {
  console.log('hi form create a trailer')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onCreateTrailer(formData)
    .then(res => {
      ui.onCreateTrailerSuccess(res)
      showTrailerListOnIndex(event)
    })
    .catch(ui.onCreateTrailerFailure)
}

const onRemoveTrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  api.deleteTrailer(event)
    .then(res => {
      showTrailerListOnIndex(event)
    })
}

const addHandlers = () => {
  // $(window).on('load', signedOutLandingPageLoad)
  $(document).ready(() => {
    store.user = { token: '' }
    showTrailerListOnIndex()
  })
  $('#user-trailer-list-heading').on('click', () => {
    // console.log($('#user-trailer-button').attr('aria-expanded'))
    const expanded = $('#user-trailer-button').attr('aria-expanded')
    const expandedBoolean = JSON.parse(expanded)
    if (!expandedBoolean) {
      showTrailerListOnIndex()
    }
  })
  $('#user-trailer-list-body').on('click', 'li div div button.del-button', onRemoveTrailer)
  $('#user-trailer-list-body').on('click', 'li div div button.update-button', onRemoveTrailer)
  $('#create-new-form').on('submit', createTrailer)
}

module.exports = {
  addHandlers
}
