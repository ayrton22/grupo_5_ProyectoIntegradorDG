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

//order: [[ 'createdAt', 'Desc']]
// Controller usage in module export
module.exports = {
    prueba: function(req, res) {
        db.Users.findByPk(req.params.id, 
            {include: [{association: 'transactions', include:[{association: 'transactions_games',attributes: ['id','title','price']}] },
        {association: 'user_sales',include:[{association: 'games', attributes: ['id','title','price'], include:[{association: 'images',where: {
            location: 'default'}}]}]},{association: 'purchases',include:[{association: 'games',attributes:['id','title','price']},{association: 'users_sellers', attributes: ['id','username','email']}]},{association: 'games_shooping_cart',attributes:['id','title']}]})
        .then(function(result) {
            res.render('userProfile',{
                user: result
            }
            );
        })
        .catch(function(error) {
            res.send(error);
        })
    },
    cart: function(req, res){
        res.render('userCart');
    },
    register: function(req, res) {
        res.render('userRegister');
    },
    save: function(req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.name,
                last_name: req.body.surname,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            })
            .then(function() {
                res.redirect('/user/login')
            })
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
            db.Users.findOne({
                where:{
                    username: req.body.username
                },
                include: [{
					association: 'transactions'
                },
                {
					association: 'user_sales'
				}]
            })
            .then(function(result) {
                    if(result.username == req.body.username && bcrypt.compareSync(req.body.password, result.password)) {
                        req.session.usernameUser = result.username
                        if(req.body.remember != undefined){
                            res.cookie('authRemember', result.username, {maxAge: 60000 * 10 * 5})
                        }       
                        return res.redirect('/user/profile/' + result.id)
                    } 
                return res.render('userLogin', {
                    errors: {
                        usernamePass: {
                            msg: 'Credenciales inválidas. Inserta un email o usuario registrado y su respectica contraseña'
                        }
                    }
                });
            });
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
        db.Users.findByPk(req.params.id)
        .then(function(result) {
            res.render('userEdit', {
                user: result
            })
        })
    },
    
    update: function(req, res) {

        db.Users.update({
            first_name: req.body.name,
            last_name: req.body.surname,
            email: req.body.email,
            birth_date: req.body.date,
            gender: req.body.gender,
            address: `${req.body.address_country}, ${req.body.address_province}, ${req.body.address_city}, ${req.body.address_home} `

        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.redirect('/user/profile/' + req.params.id)
        })
    },

    profile: function(req, res) {
        db.Users.findByPk(req.params.id, 
            {include: [{association: 'transactions', include:[{association: 'transactions_games',attributes: ['id','title','price']}] },
        {association: 'user_sales',include:[{association: 'games', attributes: ['id','title','price'], include:[{association: 'images',where: {
            location: 'default'}}]}]},{association: 'purchases',include:[{association: 'games',attributes:['id','title','price']},{association: 'users_sellers', attributes: ['id','username','email']}]},{association: 'games_shooping_cart',attributes:['id','title']}]})
        .then(function(result) {
            res.render('userProfile',{
                user: result
            }
               
            );
        })
        .catch(function(error) {
            res.send(error);
        })
    },

    delete: function(req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.redirect('/');
        })
    },

    thankYouPage: function(req, res){
        res.render('thankYouPage');
    },

    community: function(req,res) {

        let Questions = db.Questions.findAll({
			include: [{
					association: 'users'
				},
				{
					association: 'replys'
				}
			]
        })

		let Replies = db.Replys.findAll({
			include: [{
					association: 'users'
				}
			]
        });
        
		Promise.all([Questions, Replies])

			.then(function (result) {
                //return res.send(result)
				res.render('community', {
                    questions: result[0],
                    replies: result[1]
                });
			})
			.catch(function (error) {
				res.send(error)
			});
    },

    buyFormChoose: (req, res) => {
        res.render('buyFormChoose.ejs');
    },

    buyFormDeliveryView: (req, res) => {
        res.render('buyFormDelivery');
    }, 

    buyFormLocalView: (req, res) => {
        res.render('buyFormLocal');
    },

    paymentMethodView: (req, res) => {
        res.render('paymentMethodForm');
    }
}


