'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('h1').on('click', console.log('Hi from trailer events'))
}

module.exports = {
  addHandlers
}
