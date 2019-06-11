'use strict'

const config = require('../config')
const store = require('../store')

const onShowTrailerListOnIndex = () => {
  // console.log('from api signed out landing page load')

  return $.ajax({
    url: config.apiUrl + '/trailers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTrailer = (event) => {
  console.log('hi delete api', event.target.data)
  const id = $(event.target).data('id')
  return $.ajax({
    url: config.apiUrl + '/trailers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onCreateTrailer = formData => {
  return $.ajax({
    url: config.apiUrl + '/trailers/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  onShowTrailerListOnIndex,
  deleteTrailer,
  onCreateTrailer
}
