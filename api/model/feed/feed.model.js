const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const feedSchema = new Schema({
    usuario:{
        type:String,
        trim:true,
        required:true
    },
    comentantario:{
        type:String,
        trim:true,
        required:true
    },
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
}, { versionKey: false })

module.exports = mongoose.model('Feed', feedSchema);