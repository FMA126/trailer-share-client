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
    $('#navbarTogglerSearch').addClass('show')
    $('#navbarTogglerSearchButton').addClass('d-none')
  }
  // const randTwo = Math.floor(Math.random() * 51)
  // $('#picture-update-option').html(randTwo)
  // const rand = Math.floor(Math.random() * 51)
  // $('#picture-create-option').html(rand)

  authEvents.addHandlers()
  trailerEvents.addHandlers()
  // exampleEvents.addHandlers()
})
