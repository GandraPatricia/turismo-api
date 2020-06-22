const { isEmptyObject } = require('../../helper/helper')
const feedModel = require('../../model/feed/feed.model')

exports.adicionarComentario = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        var comentario = new feedModel(req.body)
        const comentarioCriado = await comentario.save()
        res.status(201).send({ data: comentarioCriado, message: 'comentário criado.' })
    } catch (error) {
        res.status(500).send({ data: null, message: error })
    }
}
exports.buscarComentario = async (req, res) => {
    try {
        const  id  = req.query
        let comentario = await feedModel.findOne({_id:id})
        res.status(200).send({ data: comentario, message: 'OK' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao buscar comentário. Verifique as informações e tente novamente.' })
    }
}
exports.removerComentario = async (req, res) => {
    try {
        const id = req.params.id
         await feedModel.remove({_id:id})
        res.status(200).send({ data: null, message: 'Comentário Removido.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao remover comentário. Verifique as informações e tente novamente.' })
    }
}
exports.editarComentario = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        const { id } = req.params
        let comentarioAtualizado = await feedModel.findOneAndUpdate({_id:id }, req.body)
        res.status(200).send({ data: comentarioAtualizado, message: 'Comentário atualizado.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao editar comentário. Verifique as informações e tente novamente.' })
    }
}