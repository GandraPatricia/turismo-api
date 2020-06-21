const express = require('express');
const router = express.Router();
const feedController = require('../../controller/feed/feed.controller')

router.post('/criado', feedController.adicionarComentario)

module.exports = router;