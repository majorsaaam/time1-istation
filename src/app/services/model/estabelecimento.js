const mongoose = require('../database/estabelecimentos');

const EstabelecimentoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    loja: {
        type: Boolean,
        default: false
    },
    posto: {
        type: Number,
        required: false
    }
});

const Estabelecimento = mongoose.model('Estabelecimento', EstabelecimentoSchema);

module.exports = Estabelecimento;