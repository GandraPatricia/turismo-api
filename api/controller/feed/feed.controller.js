const { isEmptyObject } = require('../../helper/helper')
const feedModel = require('../../model/feed/feed.model')

exports.adicionarComentario = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        var comentario = new feedModel(req.body)
        const comentarioCriado = await comentario.save()
        res.status(201).send({ data: comentarioCriado, message: 'comentario criado.' })
    } catch (error) {
        res.status(500).send({ data: null, message: error })
    }
}
exports.removerComentario = async (req, res) => {
    try {
        const id = req.params.id
         await feedModel.remove({_id:id})
        res.status(200).send({ data: null, message: 'Comentario Removido.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao remover comentario. Verifique as informações e tente novamente.' })
    }
}