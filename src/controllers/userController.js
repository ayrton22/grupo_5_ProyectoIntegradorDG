// Modules
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

// Database

const db = require('../database/models');

// JSON Parse
let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
users = JSON.parse(users);

// Controller usage in module export
module.exports = {
    prueba: function(req, res) {
        db.Transactions.findAll({
            include:[{association: 'transactions_games'}
            ]          
		})
        .then(function(result) {
            res.send(result)
        })
        .catch(function(error) {
            res.send(error)
        })
    },
    cart: function(req, res){
        res.render('userCart')
    },
    register: function(req, res) {
        res.render('userRegister')
    },
    save: function(req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let newUser = {
                id: users.length + 1,
                first_name: req.body.name,
                last_name: req.body.surname,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            };
            users.push(newUser);
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users))
            res.redirect('/user/login');
        } else {
            res.render('userRegister', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: function(req, res) {
        res.render('userLogin')
    },
    confirm: function(req, res, next) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
        for(let i = 0; i < users.length; i++) {
            if(users[i].username == req.body.username && bcrypt.compareSync(req.body.password, users[i].password)) {
                req.session.usernameUser = users[i].username
                if(req.body.remember != undefined){
                    res.cookie('authRemember', users[i].username, {maxAge: 60000 * 10})
                }
                return res.redirect('/user/profile/' + users[i].id)
            } 
        }
        return res.render('userLogin', {
            errors: {
                username: {
                    msg: 'Credenciales inválidas. Inserta un email o usuario registrado y su respectica contraseña'
                }
            }
        })
    } else {
        res.render('userLogin', {
            errors: errors.mapped(),
            old: req.body
        });
    }
    },

    logout: function (req, res){
        req.session.destroy();
        res.cookie('authRemember', ''.email, {maxAge: -1});
        res.redirect('/user/login');
    },

    edit: function(req, res) {
        for(let i = 0; i < users.length; i++) {
            if(req.params.id == users[i].id) {
                return res.render('userEdit', {
                    user: users[i]
                })
            }
        } res.redirect('/user/register');
    },
    
    update: function(req, res) {
        let userToEdit;
        for(i = 0; i < users.length; i++){
            if(users[i].id ==  req.params.id){
                userToEdit = users[i]
            }
        }
        
        let editedUser = {
            id: req.params.id,
            first_name: req.body.name,
            last_name: req.body.surname,
            username: userToEdit.username,
            email: req.body.email,
            gender: req.body.gender,
            password: userToEdit.password,
            birth_date: req.body.date,
            age: Date.now() - req.body.date,
            address: `${req.body.address_country}, ${req.body.address_province}, ${req.body.address_city}, ${req.body.address_home}`,
            avatar: req.files[0].filename
        };
        
        for(let i = 0; i < users.length; i++) {
            if(users[i].id == req.params.id) {
                users[i] = editedUser;
                fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users));
                req.session.usernameUser = editedUser.username;
                return res.redirect('/user/profile/' + editedUser.id)
            }
        }
    },

    profile: function(req, res) {
        for(let i = 0; i < users.length; i++) {
            if(req.params.id == users[i].id) {
                return res.render('userProfile', {
                    user: users[i]
                })
            }
        }
    },

    thankYouPage: function(req, res){
        res.render('thankYouPage');
    },
    community: function(req,res){
        res.render('community.ejs');

    }
}