// Modules
const fs = require('fs');
const path = require('path');
const db = require('../database/models');

// JSON Parse
let products = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
products = JSON.parse(products);

// Controller usage in module export
module.exports = {

    list: function(req,res) {
		db.Games.findAll({
			include: [{association: 'images'}]
			})
		.then(function(products){
			res.render('productList', {
				products: products,
			});
		})
		.catch(function(error) {
				res.send(error)
			});
	},
	detail: function(req, res) {
		let productDetail = db.Games.findByPk(req.params.id,{
				include: [{association: 'images'},
				{association: 'platforms'},
				{association: 'genres'}]
		});

		let products = db.Games.findAll({
			include: [{association: 'images'},
			{association: 'platforms'}]
		});
		Promise.all([productDetail,products])

		.then(function(resultado){
			res.render('productDetail', {
				productDetail:resultado[0],
				products:resultado[1]
			})
		})
		.catch(function(error) {
				res.send(error)
		});
	},
	genres: function(req,res){
		db.Genres.findByPk(req.params.id_genero,{
			include:[{association: 'games' , include:[{association: 'images'}]},
		]
		})
		.then(function(genres){
			res.render('productGenre', {
				genres: genres,
				gamesSlider: genres.games
			});
		})
		.catch(function(error) {
			res.send(error)
		});
	},
	
    load: function(req, res) {
		res.render('productLoad')
	},

	store: function(req, res) {

		let url = new URL(req.body.video);
		let videoCode = new URLSearchParams(url.search).get("v");

		let namesInputVideo = []

		for(i = 0; i < req.files.length; i++){
			namesInputVideo.push(req.files[i].fieldname)
		}

		console.log(namesInputVideo)

		db.Games.create({
            id: db.Games.max('id') + 1,
            title: req.body.title,
            description: req.body.description,
            medium_description: req.body.medium_description,
            big_description: req.body.big_description,
			price: req.body.price,
			video: videoCode,
			editor: req.body.editor,
			launch_date: req.body.launch_date,
			developer: req.body.developer,
			classification: req.body.classification,
			rating: req.body.rating
		})

		db.Images.create({
			location: location, id_game: db.Games.max('id') + 1, img_url: img_url
		}) * 13

		db.Genres.create({

		})
		db.Games_Categories.create({

		})

        for(let i = 0; i < products.length; i++) {
            if(req.body.title == products[i].title || req.body.image == products[i].image || req.body.description == products[i].description) {
                return res.redirect('/product/load');
            }
		}
		products.push(newProduct);
		fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products))
		res.redirect('/')
    },
	
    edit: function(req, res) {
		for(let i = 0; i < products.length; i++) {
            if(req.params.id == products[i].id) {
                return res.render('productEdit', {
                    product: products[i]
                })
            }
        } res.redirect('/product');
	},
	
	update: function(req, res) {
		let productToEdit;
        for(i = 0; i < products.length; i++){
            if(products[i].id ==  req.params.id){
                productToEdit = products[i]
            }
		}

		let url = new URL(req.body.video);
		let videoCode = new URLSearchParams(url.search).get("v");

		let editedProduct = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            medium_description: req.body.medium_description,
            big_description: req.body.big_description,
			price: req.body.price,
			image: productToEdit.image,
			imagen_horizontal: productToEdit.imagen_horizontal,
			image1: productToEdit.image1,
			image2: productToEdit.image2,
			image3: productToEdit.image3,
			image4: productToEdit.image4,
			image5: productToEdit.image5,
			image6: productToEdit.image6,
			image7: productToEdit.image7,
			image8: productToEdit.image8,
			image9: productToEdit.image9,
			image10: productToEdit.image10,
			imagen_detalle: productToEdit.imagen_detalle,
			video: videoCode,
			editor: req.body.editor,
			launch_date: req.body.launch_date,
			developer: req.body.developer,
			tags: req.body.tags,
			classification: req.body.classification,
			category: productToEdit.category,
			rating: req.body.rating,
			playstation: (req.body.plataformPlay == 'on') ? 'si' : 'no',
			xbox: (req.body.plataformXbox == 'on') ? 'si' : 'no',
			pc: (req.body.plataformPc == 'on') ? 'si' : 'no',
			icon_playstation: productToEdit.icon_playstation,
			icon_xbox: productToEdit.icon_xbox,
			icon_pc: productToEdit.icon_pc
        };
        
        for(let i = 0; i < products.length; i++) {
            if(products[i].id == req.params.id ) {
                products[i] = editedProduct;
                fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products))
                return res.redirect('/product/detail/' + editedProduct.id)
            }
        }
	},

    destroy: (req, res) => {
		for (let i = 0; i < products.length; i++) {
			if (products[i].id == req.params.id) {
				let index = products.indexOf(products[i]);
				products.splice(index, 1);
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products));
				res.redirect('/')
			}
		}
	}
}