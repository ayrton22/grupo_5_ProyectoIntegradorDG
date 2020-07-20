const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const {check, validationResult, body} = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    shoppingCart: function(req, res){
        res.render('carritoDeCompras')
    },
    register: function(req, res) {
        res.render('registro')
    },
    save: function(req, res) {
        let errors = validationResult(req);
        console.log(errors.mapped())
        if(errors.isEmpty()) {
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
            res.redirect('/user/login');

        } else {
            res.render('registro', {
                errors: errors.mapped()
            })
        }
    },
    login: function(req, res) {
        res.render('login')
    },
    confirm: function(req, res, next) {
        let errors = validationResult(req);
        //if(errors.isEmpty()) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].username == req.body.username && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                /*req.session.usuario = {
                    username: usuarios[i].username,
                    password: usuarios[i].password
                };
                if(req.body.remember){
                    res.cookie('nombreDeUsuario', usuarios[i].username, {maxAge: 60000 * 10})
                }*/
                return res.redirect('/user/profile/' + usuarios[i].id)
            } else {
                res.render('login', {
                    errors: errors.mapped()
                });
            }
        }
       // return res.render('/')
    /*} else {
        res.render('login', {
            errors: errors.mapped()
        });
    }*/
    },
    edit: function(req, res) {
        for(let i = 0; i < usuarios.length; i++) {
            if(req.params.id == usuarios[i].id) {
                return res.render('registerEdit', {
                    usuario: usuarios[i]
                })
            }
        } res.redirect('/user/register');
    },
    
    update: function(req, res) {

        let usuarioEditado = {
            id: req.params.id,
            first_name: req.body.name,
            last_name: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            gender: req.body.gender,
            password: bcrypt.hashSync(req.body.password, 10),
            birth_date: req.body.date,
            age: Date.now() - req.body.date,
            address: `${req.body.address_country}, ${req.body.address_province}, ${req.body.address_city}, ${req.body.address_home}`,
            avatar: req.files[0].filename
        };
        
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].id == req.params.id ) {
                usuarios[i] = usuarioEditado;
                fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usuarios))
                res.redirect('/user/profile/' + usuarioEditado.id)
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
        res.render('graciasPorComprar');
    }
}