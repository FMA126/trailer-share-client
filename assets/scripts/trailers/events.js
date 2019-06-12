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
  console.log('hi from show a trailer events')
  event.preventDefault()
  api.deleteBook(event)
    .then(res => {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const saveTrailer = (event) => {
  console.log('hi from reserve trailer events')
  event.preventDefault()
}

const reserveTrailer = (event) => {
  console.log('hi from reserve trailer events')
  event.preventDefault()
  // api.onReserveTrailer()
  //   .then()
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
  // shows trailers on signed out landing page and signed in page
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
  $('#user-trailer-list-body').on('click', 'li div div button.del-button', (event) => {
    const deleteButtonDataId = event.target.getAttribute('data-id')

    $('#removeTrailerConfirmModal').modal('toggle')
    $('#removeTrailerButton').data('id', `${deleteButtonDataId}`)
  })
  // toggles modal to update a trailer
  $('#user-trailer-list-body').on('click', 'li div div button.update-button', (event) => {
    const updateFormDataId = event.target.getAttribute('data-id')

    // toggle modal and show update form
    $('#create-new-trailer').modal('toggle')
    $('#update-trailer-form').removeClass('d-none')
    $('#create-trailer-form').addClass('d-none')
    $('#update-trailer-form').data('id', `${updateFormDataId}`)
    // populate form
    // const randTwo = Math.floor(Math.random() * 51)
    // $('#picture-update-option').html(randTwo)
    // helper for string interperlation jig saw puzzle
    let make = '#user-trailer-list-body h5.user-list-make-' + updateFormDataId
    make = $(`${make}`).data('make')
    let model = '#user-trailer-list-body p.user-list-model-' + updateFormDataId
    model = $(`${model}`).data('t-model')
    let year = '#user-trailer-list-body div.user-list-year-' + updateFormDataId
    year = $(`${year}`).data('year')
    let trailerType = '#user-trailer-list-body div.user-list-trailer_type-' + updateFormDataId
    trailerType = $(`${trailerType}`).data('trailer_type')
    let hitchType = '#user-trailer-list-body div.user-list-hitch_type-' + updateFormDataId
    hitchType = $(`${hitchType}`).data('hitch_type')
    let length = '#user-trailer-list-body div.user-list-t-length-' + updateFormDataId
    length = $(`${length}`).data('t_length')
    let gvwr = '#user-trailer-list-body div.user-list-gvwr-' + updateFormDataId
    gvwr = $(`${gvwr}`).data('gvwr')
    let axels = '#user-trailer-list-body div.user-list-axels-' + updateFormDataId
    axels = $(`${axels}`).data('axels')
    let price = '#user-trailer-list-body div.user-list-price-' + updateFormDataId
    price = $(`${price}`).data('price')

    $('#updateMake').val(`${make}`)
    $('#updateModel').val(`${model}`)
    $('#updateYear').val(year)
    $('#trailerUpdateType').val(trailerType)
    $('#hitchUpdateType').val(hitchType)
    $('#trailerUpdateLength').val(length + ' ' + 'ft')
    $('#gvwrUpdate').val(gvwr)
    $('#axelsUpdate').val(axels)
    $('#priceUpdateTrailer').val(price)
  })
  // temporary have links toggle sign in dropdow
  // $('.temp-toggle-sign-in').on('click', () => {
  //   $(window).scrollTop(0)
  //   event.stopImmediatePropagation()
  //   $('#sign-in-dropdown').dropdown('toggle')
  //   // $('#sign-in-dropdown-target').addClass('show')
  // })
  // $('#landing-trailer-list').on('click', 'div div div a.temp-toggle-sign-in', () => {
  //   $(window).scrollTop(0)
  //   event.stopImmediatePropagation()
  //   $('#sign-in-dropdown').dropDown('toggle')
  //   // $('#sign-in-dropdown').attr('aria-expanded', 'true')
  //   // $('#sign-in-dropdown-target').addClass('show')
  // })

  // show / save / reserve
  $('#flight-deck-main-trailer-list').on('click', 'div div div.mt-2 a', () => {
    $('#saveOrBookModal').modal('toggle')
  })

  $('#saveTrailer').on('click', saveTrailer)
  $('#reserveTrailer').on('click', reserveTrailer)
  $('#create-trailer-form').on('submit', createTrailer)
  $('#update-trailer-form').on('submit', updateTrailer)
  $('#removeTrailerButton').on('click', removeTrailer)
}

module.exports = {
  addHandlers
}
