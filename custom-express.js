const express = require('express')
const load    = require('express-load')


module.exports = () => {
    const app = express()
    
    app.use(express.static('./public'))
    app.set('view engine', 'ejs')
    load('controllers').into(app)

    return app
}