const db     = require('./db')
const Schema = db.Schema

boletoSchema = new Schema({
    pagador: {
        type: String,
        required: true,
        unique: true
    },
    vencimento: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
})

const Boleto = db.model('boletos', boletoSchema)
module.exports = Boleto
