const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://corona-api:123@cluster0-zjpdm.mongodb.net/turismo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATH, OPTIONS');
    next();
});

const rotaUsuario = require('./api/route/usuario/usuario.route')
const rotaFeed = require('./api/route/feed/feed.route')

app.use('/usuario', rotaUsuario);
app.use('/comentario',rotaFeed);

module.exports = app;