const express = require('express')

module.exports = function (server){
    //API Rotas
    const router = express.Router()
    server.use('/api', router)

    // TO-DO Rotas
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}