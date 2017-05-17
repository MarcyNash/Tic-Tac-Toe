'use strict'

const config = require('../config')
// const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/Games',
    method: 'GET'
  })
}

const show = function (data) {
  console.log(data.Game.id)
  return $.ajax({
    url: config.apiOrigin + '/Games/' + data.Game.id,
    method: 'GET'
  })
}

const destroy = function (data) {
  console.log(data.Game.id)
  return $.ajax({
    url: config.apiOrigin + '/Games/' + data.Game.id,
    method: 'DELETE'
  })
}

const update = function (data) {
  console.log('Made it to api.update')
  console.log(data)
  // get indexID from data
  return $.ajax({
    url: config.apiOrigin + '/Games/' + data.Game.id,
    method: 'PATCH',
    data
  })
}

const create = function (data) {
  console.log('Made it to api.update')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/Games',
    method: 'POST',
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
