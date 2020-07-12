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
    shoppingCart: function(req, res){
        res.render('carritoDeCompras')
    },
    register: function(req, res) {
        let nuevoUsuario = {
            id: usuarios.length + 1,
            first_name: req.body.name,
            last_name: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        };
        usuarios.push(nuevoUsuario);
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usuarios))
        res.redirect('/')
    },
    login: function(req, res) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].username == req.body.username && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                return res.redirect('/');
            }
        }
        res.redirect('/user');
    },
    thankYouPage: function(req, res){
        res.redirect('graciasPorComprar')
    }
}