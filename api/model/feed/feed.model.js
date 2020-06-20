const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const feedSchema = new Schema({
    comentario:{
        type: String,
        required: true,
        trim: true
    },
    nota:{
        type: Number,
        required: true,
        trim: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Feed', feedSchema);