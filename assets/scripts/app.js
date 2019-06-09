'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const trailerEvents = require('./trailers/events.js')
// const exampleEvents = require('./examples/events.js')

$(() => {
  if ($(window).width() > 992) {
    console.log('window width')
    $('#navbarTogglerSearch').addClass('show')
    $('#navbarTogglerSearchButton').addClass('d-none')
  }

  authEvents.addHandlers()
  trailerEvents.addHandlers()
  // exampleEvents.addHandlers()
})
