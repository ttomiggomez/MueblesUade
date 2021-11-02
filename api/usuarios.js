const express = require('express');
const database = require('./database');
var router = express.Router();

// define the home page route
router.get('/api/',function(req, res){
    res.send(database.renderUser())
})
// define the users route
router.get('/api/:id', function(req,res){
    var idUsuario = req.params.id
    res.send(database.renderUserI(idUsuario))
})
router.post('/api/agregar', function(req,res){
    let nombre = req.body.nombre
    let id = req.body.id
    let pass = req.body.pass
    res.send(database.addU(id,nombre,pass))
})
router.delete('/api/borrar/:id', function(req,res){
    var idUserElim = req.params.id
    res.send(database.eliminateU(idUserElim))
})
router.put('/api/modificar/:id', function(req, res){
    var idUserMod = req.params.id
    var modi = req.body
    res.send(database.modifyU(idUserMod, modi))
})

module.exports = {
    router : router
}
