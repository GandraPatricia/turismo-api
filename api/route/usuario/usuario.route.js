const express = require('express');
const router = express.Router();
const usuarioController = require('../../controller/usuario/usuario.controller')

router.post('/cadastrar', usuarioController.cadastrarUsuario)
router.put('/editar', usuarioController.editarUsuario)
router.get('/listar', usuarioController.buscarUsuario)

module.exports = router;