const express       = require('express')
const load          = require('express-load')
const sessions      = require('client-sessions')
const config        = require('config')

module.exports = () => {
    const app = express()

    app.use(sessions({
        cookieName: 'sessao',
        secret: config.get('Session.secret'),
        duration: config.get('Session.duration') * 60 * 60 * 1000,
        activeDuration: 5 * 60 * 1000
    }))
    app.use(express.static('./public'))
    app.set('view engine', 'ejs')
    load('controllers').into(app)

    return app
}