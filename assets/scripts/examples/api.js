'use strict'

const config = require('../config')
const store = require('../store')

const onCreateGame = () => {
  // console.log('from api createGame')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onCreateMultiGame = () => {
  // console.log('from api createGame')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onIndexGame = () => {
  // console.log('from api indexGame')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onShowGame = (formData) => {
  // console.log('from api showGame')
  const id = store.game.FreshGame.getId()

  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onJoinGame = (formData) => {
  // console.log('from api showGame')
  const id = formData.games.id

  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateGame = (requestData) => {
  // console.log('from api updateGame')
  // console.log('form data', requestData)
  const id = store.game.FreshGame.getId()
  // console.log('Game id from api', store.game.FreshGame.getId())

  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: requestData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onCreateGame,
  onCreateMultiGame,
  onIndexGame,
  onShowGame,
  onUpdateGame,
  onJoinGame
}
