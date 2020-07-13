const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

let producto = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
producto = JSON.parse(producto);

module.exports = {
    home: function(req, res) {
        let destacado = producto.filter(function(elemento) {
			return elemento.category == "Destacado";
		});
		let destacadoHorizontal = producto.filter(function(elemento) {
			return elemento.category == "Destacado-horizontal";
        });
        let destacado2 = producto.filter(function(elemento) {
			return elemento.category == "Destacado-2";
        });
        let destacado3 = producto.filter(function(elemento) {
			return elemento.category == "Destacado-3";
        });
        let destacado4 = producto.filter(function(elemento) {
			return elemento.category == "Destacado-4";
		});
        res.render('home', {
            producto: producto,
            productoDestacado: destacado,
            productoDestacadoHorizontal: destacadoHorizontal,
            destacado2: destacado2,
            destacado3: destacado3,
            destacado4: destacado4
        },)
    },
}