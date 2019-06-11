'use strict'

const config = require('../config')
const store = require('../store')

const onShowTrailerListOnIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/trailers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTrailer = () => {
  console.log('hi delete api', event.target)
  const id = $(event.target).data('id')
  return $.ajax({
    url: config.apiUrl + '/trailers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateTrailer = formData => {
  const id = $(event.target).data('id')
  return $.ajax({
    url: config.apiUrl + '/trailers/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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
  onUpdateTrailer,
  onCreateTrailer
}
