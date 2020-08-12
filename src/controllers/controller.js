// Modules
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

// JSON Parse
let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
users = JSON.parse(users);

let products = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
products = JSON.parse(products);

// Controller usage in module export
module.exports = {
    
    home: function(req, res) {
        let masVendido = products.filter(function(elemento) {
			return elemento.category == "mas-vendidos";
		});
        let destacado = products.filter(function(elemento) {
			return elemento.category == "Destacado";
		});
		let destacadoHorizontal = products.filter(function(elemento) {
			return elemento.category == "Destacado-horizontal";
        });
        let destacado2 = products.filter(function(elemento) {
			return elemento.category == "Destacado-2";
        });
        let destacado3 = products.filter(function(elemento) {
			return elemento.category == "Destacado-3";
        });
        let destacado4 = products.filter(function(elemento) {
			return elemento.category == "Destacado-4";
		});
        res.render('home', {
            products: products,
            bestSells: masVendido,
            featuredProducts: destacado,
            featuredProductsHorizontal: destacadoHorizontal,
            featured2: destacado2,
            featured3: destacado3,
            featured4: destacado4
        },)
    },
}