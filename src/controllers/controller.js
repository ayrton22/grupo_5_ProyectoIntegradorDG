const fs = require('fs');
const path = require('path');

module.exports = {
    index: function(req, res) {
        res.render('index')
    },
    carritoDeCompras: function(req, res){
        res.render('carritoDeCompras')
    },
    detail: function(req, res) {
        res.render('detalleProducto')
    },
    register: function(req, res) {
        res.render('registro')
    },
    cargarProducto: function(req, res) {
        res.render('cargaDeProductos')
    }
}