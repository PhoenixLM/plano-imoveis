const Imovel   = require('../models/imovel')
const Admin    = require('../models/admin')
const moveTo   = require('../helpers/moveImgToTmp')
const moveFrom = require('../helpers/moveImgFromTmp')

module.exports = (app) => {
    app.get('/admin/painel', (req, res, next) => {
        res.render('admin/painel')
    })

    app.get('/admin/imoveis', (req, res, next) => {
        Imovel.find({}, (err, imovels) => {
            if(err) return next(err)
            res.render('admin/imoveis', {imovels : imovels})
        })
    })

    app.get('/admin/imoveis/search/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            res.render('admin/imovel', {imovel : imovel})
        })
    })

    app.get('/admin/admins', (req, res, next) => {
        Admin.find({}, (err, admins) => {
            if(err) return next(err)
            res.render('admin/admins', {admins : admins})
        })
    })

    app.get('/admin/admins/search/:id', (req, res, next) => {
        let id = req.params.id
        Admin.findById(id, (err, admin) => {
            if(err) return next(err)
            if(!admin) return next()
            res.render('admin/admin', {admin : admin})
        })
    })

    app.get('/admin/imoveis/new', (req, res, next) => {
        res.render('admin/imovel-form')
    })

    app.post('/admin/imoveis/new', (req, res, next) => {
        let imovel = new Imovel(req.body)
        imovel.save((err) => {
            if(err) return next(err)
            moveFrom(req, imovel._id, (err) => {
                if(err) return next(err)
                console.log('sucesso!!!')
            })
            res.redirect('/admin/imoveis')
        })
    })

    app.get('/admin/admins/new', (req, res, next) => {
        res.render('admin/admin-form')
    })

    app.post('/admin/admins/new', (req, res, next) => {
        let admin = new Admin(req.body)
        admin.save((err) => {
            if(err) return next(err)
            res.redirect('/admin/admins') 
        })
    })

    app.post('/admin/media', (req, res, next) => {
        if(req.files.qqfile) {
            moveTo(req, (err) => {
                if(err) res.send({'success': false})
                else res.send({'success': true})
            })
        } else {
            res.send('Erro, nenhum arquivo no body da request')
        }
    })

    app.get('/admin/imoveis/delete/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            imovel.remove((err) => {
                if(err) return next(err)
                console.log('Sucesso')
                res.redirect('/admin/imoveis')
            })
        })
    })

    app.post('/admin/imoveis/update/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            imovel.set(req.body)
            imovel.save((err) => {
                if(err) return next(err)
                res.redirect('/admin/imoveis')
            })
        })
    })

    app.get('/admin/admins/delete/:id', (req, res, next) => {
        let id = req.params.id
        Admin.findById(id, (err, admin) => {
            if(err) return next(err)
            if(!admin) return next()
            admin.remove((err) => {
                if(err) return next(err)
                res.redirect('/admin/admins')
            })
        })
    })

    app.post('/admin/admins/update/:id', (req, res, next) => {
        let id = req.params.id
        Admin.findById(id, (err, admin) => {
            if(err) return next(err)
            if(!admin) return next()
            admin.set(req.body)
            admin.save((err) => {
                if(err) return next(err)
                res.redirect('/admin/admins')
            })
        })
    })
}