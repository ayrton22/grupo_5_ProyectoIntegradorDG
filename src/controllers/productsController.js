const fs = require('fs');
const path = require('path');
let productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
productos = JSON.parse(productos);

module.exports = {

    allProducts: function(req, res) {
        res.render('productos')
    },
    detail: function(req, res){
        res.render('detalleProducto');
    },
    productLoad: function(req, res) {
        
        res.render();
    }
}