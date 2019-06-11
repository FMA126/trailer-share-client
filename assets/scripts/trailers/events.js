'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const showTrailerListOnIndex = event => {
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
  event.preventDefault()
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

const removeTrailer = (event) => {
  event.preventDefault()
  api.deleteTrailer(event)
    .then(res => {
      showTrailerListOnIndex(event)
      ui.onRemoveTrailerSuccess(res)
    })
}

const addHandlers = () => {
  // shows trailers on signed out landing page
  $(document).ready(() => {
    store.user = { token: '' }
    showTrailerListOnIndex()
  })
  // shows trailers owned by signed in user
  $('#user-trailer-list-heading').on('click', () => {
    const expanded = $('#user-trailer-button').attr('aria-expanded')
    const expandedBoolean = JSON.parse(expanded)
    if (!expandedBoolean) {
      showTrailerListOnIndex()
    }
  })
  // listens for click on trailer make input on list new trailer form and gives picture select option a random number to access image of a trailer
  $('#createMake').on('click', () => {
    const rand = Math.floor(Math.random() * 51)
    $('#picture-create-option').html(rand)
  })
  // toogles modal to confirm if user wants to delete a trailer
  $('#user-trailer-list-body').on('click', 'li div div button.del-button', () => {
    const deleteButtonDataId = $('#user-trailer-list-body li:first-child').data('id')
    $('#removeTrailerConfirmModal').modal('toggle')
    $('#removeTrailerButton').data('id', `${deleteButtonDataId}`)
  })
  // toggles modal to update a trailer
  $('#user-trailer-list-body').on('click', 'li div div button.update-button', () => {
    const updateFormDataId = $('#user-trailer-list-body li:first-child').data('id')
    $('#create-new-trailer').modal('toggle')
    $('#create-update-trailer-label').text('Update Trailer')
    $('#update-trailer-form').removeClass('d-none')
    $('#create-trailer-form').addClass('d-none')
    $('#update-trailer-form').data('id', `${updateFormDataId}`)
    const randTwo = Math.floor(Math.random() * 51)
    $('#picture-update-option').html(randTwo)
  })
  // temporary have links toggle sign in dropdow
  $('.temp-toggle-sign-in').on('click', () => {
    $(window).scrollTop(0)
    $('#sign-in-dropdown').addClass('show')
    $('#sign-in-dropdown').attr('aria-expanded', 'true')
    $('#sign-in-dropdown-target').addClass('show')
  })
  $('#landing-trailer-list').on('click', 'div div div a', () => {
    $(window).scrollTop(0)
    $('#sign-in-dropdown').addClass('show')
    $('#sign-in-dropdown').attr('aria-expanded', 'true')
    $('#sign-in-dropdown-target').addClass('show')
  })
  $('#create-trailer-form').on('submit', createTrailer)
  $('#update-trailer-form').on('submit', updateTrailer)
  $('#removeTrailerButton').on('click', removeTrailer)
}

module.exports = {
  addHandlers
}
