// Modules
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models');


// JSON Parse
let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
users = JSON.parse(users);

let products = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
products = JSON.parse(products);

// Controller usage in module export
module.exports = {
    home: function(req, res) {
		let productCategory = db.Categories.findAll({
			include: [{association: 'games',
			include: [{association: 'images'}]
		}],order: [
			[ 'games', 'title', 'asc']]
	});
	let productsDiscounts = db.Discounts.findAll({
		include: [{association: 'games',include: [{association: 'images' }]
	}]
	});

	Promise.all([productCategory,productsDiscounts])

	.then(function(resultado){
			res.render('home', {
			allCategories: resultado[0],
			discounts:resultado[1],
			gamesSlider: resultado[0][0].games
		})
	})
	.catch(function(error) {
			res.send(error)
		});
	},

	pruebaCheckboxView: function (req, res){
		res.render('Zprueba');
	},

	pruebaCheckbox: function (req, res){
		res.send(req.body.chec)
	}
        
}