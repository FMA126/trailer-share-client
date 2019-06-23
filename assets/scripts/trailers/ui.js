'use strict'

const trailerSignedOutList = require('../templates/trailer-list-landing.handlebars')
const trailerSignedInList = require('../templates/trailer-list-flight-deck.handlebars')
const trailerUserList = require('../templates/user-trailer-list.handlebars')
// const trailerSavedList = require('../templates/save-trailer.handlebars')
// const trailerReservedList = require('../templates/reserve-trailer.handlebars')
const store = require('../store')

const onshowTrailerListOnIndexSuccess = (responseData) => {
  const landingTrailerList = trailerSignedOutList({ trailers: responseData.trailers.reverse().slice(0, 4) })
  // search
  const searchTrailerType = trailerSignedInList({ trailers: responseData.trailers.filter(el => el.trailer_type === store.searchTheTrailers.getTrailerType()) })

  const searchHitchType = trailerSignedInList({ trailers: responseData.trailers.filter(el => el.hitch_type === store.searchTheTrailers.getHitchType()) })

  const searchPrice = trailerSignedInList({ trailers: responseData.trailers.filter(el => parseFloat(el.price) < parseFloat(store.searchTheTrailers.getPrice())) })

  // console.log(searchPrice)

  const flighDeckTrailerList = trailerSignedInList({ trailers: responseData.trailers })

  const userTrailerList = trailerUserList({ trailers: responseData.trailers.filter(el => el.editable) })

  const isUserHasTrailer = responseData.trailers.filter(el => el.editable).length

  // if (store.searchTheTrailers.getHitchType() === '') {
  //   store.searchTheTrailers.setHitchType(false)
  // }
  // if (store.searchTheTrailers.getTrailerType() === '') {
  //   store.searchTheTrailers.setTrailerType(false)
  // }

  if (store.searchTheTrailers.getHitchType() || store.searchTheTrailers.getTrailerType() || parseFloat(store.searchTheTrailers.getPrice())) {
    $('#flight-deck-main-trailer-list').html(searchTrailerType.concat(searchHitchType).concat(searchPrice))
  } else {
    $('#flight-deck-main-trailer-list').html(flighDeckTrailerList)
  }

  $('#landing-trailer-list').html(landingTrailerList)
  // $('#flight-deck-main-trailer-list').html(flighDeckTrailerList)
  $('#user-trailer-list-body').html(isUserHasTrailer ? userTrailerList : "You don't have any trailers listed")
}
const onshowTrailerListOnIndexFailure = (responseData) => {
  // console.log(responseData)
}

const onCreateTrailerSuccess = responseData => {
  $('form').trigger('reset')
  $('#createHelp').text('Members will be stoked to rent from you!')
  $('#create-new-trailer').modal('toggle')
}

const onCreateTrailerFailure = responseData => {
  $('form').trigger('reset')
  $('#createHelp').text('something went wrong!')
}

const onUpdateTrailerSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#create-update-trailer-label').text('Add A New Trailer')
  $('#update-trailer-form').addClass('d-none')
  $('#create-trailer-form').removeClass('d-none')
  $('#create-new-trailer').modal('toggle')
}
const onUpdateTrailerFailure = (responseData) => {
  // console.log('failure from update ui')
  $('form').trigger('reset')
}

const onRemoveTrailerSuccess = (responseData) => {
  $('#removeTrailerConfirmModal').modal('toggle')
}

// const onIndexFavoriteTrailerSuccess = (responseData) => {
//   // $('#saveTrailer').modal('toggle')
//   store.favoriteTrailerIdList = []
//   responseData.favorites.forEach((fav) => {
//     store.favoriteTrailerIdList.push(fav.trailer_id)
//   })
//   console.log(store.favoriteTrailerIdList)
//   // $('#savedTrailersHere').html(savedList)
// }

// const onIndexFavoriteTrailerFailure = (responseData) => {
//   // console.log('oh no from save ui')
// }

// const onReserveTrailerSuccess = (responseData) => {
//   // $('#reserveTrailer').modal('toggle')
//   // const reservedList = trailerReservedList({ trailers: responseData.trailers.filter((el) => ) })
//   // $('#reservedTrailersHere').html(reservedList)
// }

// const onReserveTrailerFailure = (responseData) => {
//   // console.log('oh no from reserve ui')
// }

module.exports = {
  onshowTrailerListOnIndexSuccess,
  onshowTrailerListOnIndexFailure,
  onCreateTrailerFailure,
  onCreateTrailerSuccess,
  onUpdateTrailerSuccess,
  onUpdateTrailerFailure,
  onRemoveTrailerSuccess
  // onIndexFavoriteTrailerSuccess,
  // onReserveTrailerSuccess,
  // onIndexFavoriteTrailerFailure,
  // onReserveTrailerFailure
}
