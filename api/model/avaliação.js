const mongoose = require('mongoose');

const avaliacaoLugarSchema = mongoose.Schema({
    Imagem:{
        type: String,
        trim: true,
        required: true
    },
    idLocal:{
        type: Number,
        trim: true,
        required: true
    },
    latitude:{
        type: String,
        trim: true,
        required: true
    },
    longitude:{
        type: String,
        trim: true,
        required: true,
    }
})

module.exports = mongoose.model('avaliação', avaliacaoLugarSchema);