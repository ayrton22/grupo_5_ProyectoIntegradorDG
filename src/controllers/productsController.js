const fs = require('fs');
const path = require('path');

module.exports = {
    shoppingCart: function(req, res){
        res.render('carritoDeCompras')
    },
    detail: function(req, res) {
        res.render('detalleProducto')
    },
    register: function(req, res) {
        res.render('registro')
    },
    signIn: function(req, res) {
        res.render('login')
    },
    productLoad: function(req, res) {
        res.render('cargaDeProductos')
    }
}