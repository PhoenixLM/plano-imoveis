module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.render('index')
    })

    app.get('/vendas', (req, res, next) => {
        res.render('vendas')
    })

    app.get('/alugueis', (req, res, next) => {
        res.render('alugueis')
    })

    app.get('/locacao', (req, res, next) => {
        res.render('locacao')
    })

    app.get('/textpesquisa', (req, res, next) => {
        res.render('textpesquisa')
    })
}