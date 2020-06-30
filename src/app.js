const express = require('express');
const app = express();
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-Livereload');

const publicDirectory = path.resolve(__dirname, '../public');
let livereloadServer = livereload.createServer();
livereloadServer.watch(publicDirectory);
livereloadServer.server.once('connection', () => {
    setTimeout(() =>{
        livereloadServer.refresh("/");
    }, 10);
});

app.use(connectLivereload());

app.use(express.static(publicDirectory));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const mainRouter = require('./routes/index');

app.use('/', mainRouter);
app.use('/registro', function(req, res) {
    res.render('registro')
});

app.use('/cargaDeProductos', function(req, res) {
    res.render('cargaDeProductos')
})

app.use('/carritoDeCompras', function(req, res) {
    res.render('carritoDeCompras')
})

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

