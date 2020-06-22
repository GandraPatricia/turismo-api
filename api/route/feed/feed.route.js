const express = require('express');
const router = express.Router();
const feedController = require('../../controller/feed/feed.controller')

router.post('/criado', feedController.adicionarComentario)
router.delete('/deletado/:id', feedController.removerComentario)
router.put('/editado/:id', feedController.editarComentario)
router.get('/buscar/:id', feedController.buscarComentario)

module.exports = router;