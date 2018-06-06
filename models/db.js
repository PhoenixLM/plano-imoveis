const mongoose = require('mongoose')
const config   = require('config')

// const _DBUSER
// const _DBPSWD
const _DBHOST = config.get('Mongo.host')
const _DBPORT = config.get('Mongo.port')
const _DB     = config.get('Mongo.db')

mongoose.connect('mongodb://' + _DBHOST + ':' + _DBPORT + '/' + _DB, (err) => {
  if (err) return console.log(err)
  else console.log('Mongo %s connected @ %s : %s', _DB, _DBHOST, _DBPORT)
})

module.exports = mongoose