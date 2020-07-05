const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

/*let usuarios = fs.readFileSync(path.join(__dirname, '../data/usersDataBase.json'), 'utf8');
usuarios = JSON.parse(usuarios);*/

module.exports = {
    index: function(req, res) {
        res.render('index')
    },
    register: function(req, res) {
        res.render('registro')
    },
    signIn: function(req, res) {
        res.render('login')
    },
    shoppingCart: function(req, res){
        res.render('carritoDeCompras')
    },
}