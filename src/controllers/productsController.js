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
        res.render('cargaDeProductos');
    },
    productUpdate: function(req, res) {
        let nuevoProducto = {
            id: productos.length + 1,
            tittle: req.body.nombre,
            statement: req.body.estado,
            plataform: req.body.plataforma,
            category: req.body.categoria,
            picture: req.body.foto,
            pagyFomr:  req.body.pagos,
            delivery:  req.body.entrega,
            price:  req.body.precio
        };
        productos.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos));
        res.redirect('/')
    }
}