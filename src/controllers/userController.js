const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
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
    edit: function(req, res) {
        for(let i = 0; i < usuarios.length; i++) {
            if(req.params.id == usuarios[i].id) {
                return res.render('registerEdit', {
                    usuario: usuarios[i]
                })
            }
        } res.redirect('/user');
    },
    
    editSave: function(req, res) {

        let usuarioEditado = {
            id: req.params.id,
            first_name: req.body.name,
            last_name: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            birth_date: req.body.date,
            age: birth_date - Date.now(),
            adress: `${req.body.adress_country}, ${req.body.adress_province}, ${req.body.adress_city}, ${req.body.adress_home} `
        };
        
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].id == req.params.id ) {
                usuarios[i] = usuarioEditado;
                fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usuarios))
                res.redirect('/user/profile/' + usuarioEditado.id, {
                    usuario: usuario[i]
                })
            }
        }
    },

    profile: function(req, res) {
        for(let i = 0; i < usuarios.length; i++) {
            if(req.params.id == usuarios[i].id) {
                res.render('userProfile', {
                    usuario: usuarios[i]
                })
            }
        }
    },

    thankYouPage: function(req, res){
        res.render('graciasPorComprar')
    }
}