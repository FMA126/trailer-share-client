'use strict'

const config = require('../config')
// const store = require('../store')

const onShowTrailerListOnIndex = () => {
  console.log('from api signed out landing page load')

  return $.ajax({
    url: config.apiUrl + '/trailers',
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  onShowTrailerListOnIndex
}
