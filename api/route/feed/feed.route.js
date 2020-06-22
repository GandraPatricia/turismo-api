const express = require('express');
const router = express.Router();
const feedController = require('../../controller/feed/feed.controller')

router.post('/criado', feedController.adicionarComentario)
router.delete('/deletado', feedController.removerComentario)
router.put('/criado', feedController.editarComentario)

module.exports = router;