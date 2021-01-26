const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    creatAd: {type: Date, default: Date.now}
})

const clienteSchema = new mongoose.Schema({
    cliente: {type: String, required: true},
    nome: {type: Boolean, required: true, default: false},
    creatAd: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)