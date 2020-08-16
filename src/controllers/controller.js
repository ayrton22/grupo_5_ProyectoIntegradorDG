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
        db.Categories.findAll({
            include: [{association: 'games',include: [{association: 'images' }]
        }]
			})
		.then(function(products){
            //res.send(products);
			res.render('home', {
                allCategories: products,
                gamesSlider: products[0].games
			});
		})
		.catch(function(error) {
				res.send(error)
			});
}
}