'use strict'

const trailerList = require('../templates/trailer-list-landing.handlebars')

const onshowTrailerListOnIndexSuccess = (responseData) => {
  console.log('success from signed out landing trail ui', responseData)
  const landingTrailerList = trailerList({ trailers: responseData.trailers.slice(0, 4) })
  $('#landing-trailer-list').html(landingTrailerList)
}
const onshowTrailerListOnIndexFailure = (responseData) => {
  console.log(responseData)
}

module.exports = {
  onshowTrailerListOnIndexSuccess,
  onshowTrailerListOnIndexFailure
}
