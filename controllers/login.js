const Admin = require('../models/admin')

module.exports = (app) => {
    app.get('/login', (req, res, next) => {
        res.render('login', {error : false})
    })

    app.get('/login/logout', (req, res, next) => {
        req.sessao.userId = null
        res.redirect('/login')
    })

    app.post('/login', (req, res, next) => {
        var username = req.body.username
        var password = req.body.password

        Admin.authenticate(username, password, (err, admin) => {
            if(err === null) {
                req.sessao.userId = admin._id
                res.render('admin/painel', {admin : admin})
            }
            else res.render('login', {error : true})
        })
    })
}