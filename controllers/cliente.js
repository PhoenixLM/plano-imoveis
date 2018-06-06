const Imovel   = require('../models/imovel')
const Admin    = require('../models/cliente')

module.exports = (app) => {
    app.get('/cliente/painel', (req, res, next) => {
        res.render('cliente/painel')
    })

    app.get('/cliente/boletos', (req, res, next) => {
        res.render('cliente/boletos')
    })
}

