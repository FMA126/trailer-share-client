'use strict'

const trailerSignedOutList = require('../templates/trailer-list-landing.handlebars')
const trailerSignedInList = require('../templates/trailer-list-flight-deck.handlebars')
const trailerUserList = require('../templates/user-trailer-list.handlebars')

const onshowTrailerListOnIndexSuccess = (responseData) => {
  // console.log('success from signed out landing trail ui', responseData)
  const landingTrailerList = trailerSignedOutList({ trailers: responseData.trailers.slice(0, 4) })
  const flighDeckTrailerList = trailerSignedInList({ trailers: responseData.trailers })
  const userTrailerList = trailerUserList({ trailers: responseData.trailers.filter(el => el.editable) })
  const isUserHasTrailer = responseData.trailers.filter(el => el.editable).length

  $('#landing-trailer-list').html(landingTrailerList)
  $('#flight-deck-main-trailer-list').html(flighDeckTrailerList)
  $('#user-trailer-list-body').html(isUserHasTrailer ? userTrailerList : "You don't have any trailers listed")
}
const onshowTrailerListOnIndexFailure = (responseData) => {
  console.log(responseData)
}

const onCreateTrailerSuccess = responseData => {
  console.log('hi from create trailer success', responseData)
  $('form').trigger('reset')
  $('#create-new-trailer').modal('toggle')
  // $('#create-new-trailer').modal('hide')
}

const onCreateTrailerFailure = responseData => {
  console.log('failed to create trailer', responseData)
}

module.exports = {
  onshowTrailerListOnIndexSuccess,
  onshowTrailerListOnIndexFailure,
  onCreateTrailerFailure,
  onCreateTrailerSuccess
}
