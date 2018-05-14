const imovel = require('../models/imovel')

module.exports = (app) => {
    app.get('/search/vendas/:proc&:tipo&:bairro&:valor', (req, res, next) => {
        var query = {}
        query["isVenda"] = true
        var reqProc   = req.params.proc
        if(reqProc !== 'null') query["procedencia"] = reqProc
        var reqTipo   = req.params.tipo
        if(reqTipo !== 'null') query["tipo"] = reqTipo
        var reqBairro = req.params.bairro
        if(reqBairro !== 'null') query["bairro"] = reqBairro
        var reqValor  = req.params.valor
        if(reqValor !== 'null') query["valor"] = {$lt : reqValor}

        Imovel.find(query, (err, imovels) => {
            if(err) next(err)
            else if(!imovels.length) res.send(null)
            else res.send(imovels)
        })
    })

    app.get('/search/vendas/destaques', (req, res, next) => {

    })

    app.get('/search/vendas/oportunidades', (req, res, next) => {

    })

    app.get('/search/alugueis/:tipo&:bairro&:valor', (req, res, next) => {
        var reqTipo   = req.params.tipo
        var reqBairro = req.params.bairro
        var reqValor  = req.params.valor

        Imovel.find({tipo : reqTipo, bairro : reqBairro, valor : {$lt : reqValor}, isVenda: false}, (err, imovels) => {
            if(err) next(err)
            else res.send(imovels)
        })        
    })
}