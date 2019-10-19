const mongoose = require('../database/promocao');

const PromocaoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
});

const Promocao = mongoose.model('Promocao', PromocaoSchema);

module.exports = Promocao;