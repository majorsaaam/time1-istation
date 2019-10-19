const mongoose = require('../database/produto');

const ProdutoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    servico: {
        type: Boolean,
        default: false
    },
    estabelecimento: {
        type: Number,
        required: true
    }
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;