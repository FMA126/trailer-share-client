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
  console.log('this is the event update', event)
  console.log('this is the event target update', event.target)
  const form = event.target
  const formData = getFormFields(form)
  api.onUpdateTrailer(formData)
    .then(res => {
      ui.onUpdateTrailerSuccess(res)
      showTrailerListOnIndex(event)
    })
    .catch(ui.onUpdateTrailerFailure)
}

const createTrailer = (event) => {
  console.log('hi form create a trailer')
  event.preventDefault()
  console.log('this is the event create', event)
  console.log('this is the event target create', event.target)
  const form = event.target
  const formData = getFormFields(form)
  api.onCreateTrailer(formData)
    .then(res => {
      ui.onCreateTrailerSuccess(res)
      showTrailerListOnIndex(event)
    })
    .catch(ui.onCreateTrailerFailure)
}

const removeTrailer = (event) => {
  // console.log('hi')
  event.preventDefault()
  api.deleteTrailer(event)
    .then(res => {
      showTrailerListOnIndex(event)
    })
}

const addHandlers = () => {
  // $(window).on('load', signedOutLandingPageLoad)
  console.log($('#picture-update-option').html())
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
  $('#user-trailer-list-body').on('click', 'li div div button.del-button', removeTrailer)
  $('#user-trailer-list-body').on('click', 'li div div button.update-button', () => {
    $('#create-new-trailer').modal('toggle')
    $('#create-update-trailer-label').text('Update Trailer')
    $('#update-trailer-form').removeClass('d-none')
    $('#create-trailer-form').addClass('d-none')
    $('#update-trailer-form').attr('data-id', `${$(event.target).data('id')}`)
    // updateTrailer()
  })
  $('#create-trailer-form').on('submit', createTrailer())
  $('#update-trailer-form').on('submit', updateTrailer())
}

module.exports = {
  addHandlers
}
