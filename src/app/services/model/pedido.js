const mongoose = require('../../database');

const PedidoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    status: {
        type: String,
        enum: ['aguardando', 'esperando', 'cancelado', 'finalizado', 'avaliado'],
        required: true
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    avaliacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'avaliacao',
        required: true
    },
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;