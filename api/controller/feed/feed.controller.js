const { isEmptyObject } = require('../../helper/helper')
const feedModel = require('../../model/feed/feed.model')

exports.adicionarComentario = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        const {email} = req.params
        var comentario = new feedModel(req.body)
        {email} await comentario.save()
        res.status(201).send({ data: usuarioCriado, message: 'comentario criado.' })
    } catch (error) {
        res.status(500).send({ data: null, message: error })
    }
}