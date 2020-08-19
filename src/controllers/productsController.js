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
			include: [{association: 'images'}], order:[['title', 'ASC']]
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
			include:[{association: 'games',  include:[{association: 'images'}]} 
		],order: [
            [ 'games', 'title', 'asc']
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
		let categorias = db.Categories.findAll();
		let generos = db.Genres.findAll();
		let platforms = db.Platforms.findAll();

		Promise.all([categorias, generos, platforms])
			.then(function ([categoria, genero, plataforma]){
				res.render('productLoad', {
					gameCategory: categoria,
					gameGenre: genero,
					gamePlatform: plataforma
				})
		})
	},

	store: function(req, res) {
		let url = new URL(req.body.video);
		let videoCode = new URLSearchParams(url.search).get("v");

		db.Games.create({
            title: req.body.title,
            description: req.body.description,
            descriptionMedium: req.body.medium_description,
            descriptionBig: req.body.big_description,
			price: req.body.price,
			video: videoCode,
			editor: req.body.editor,
			launch_date: req.body.launch_date,
			developer: req.body.developer,
			classification: req.body.classification,
			rating: req.body.rating,
			stock_admin: 2,
			stock_user: 2
		})
		.then((resultado) => {
			let gameId = resultado.id;

			let arrayImages = [];

			for(let i = 0; i < req.files.length; i++){
				let image = {
					location: req.files[i].fieldname,
					img_url: req.files[i].filename,
					id_game: gameId 
				}
				arrayImages.push(image)
			}
			db.Images.bulkCreate(arrayImages)
			.then((resutado) => {
				let genresGame = [];
				for(let i = 0; i < req.body.genre.length; i++){
					genresGame.push({
						id_game: gameId,
						id_genre: Number(req.body.genre[i]),
					})
				}
				db.Games_Genres.bulkCreate(genresGame)
				.then((resultado) => {
					let categoryGame = [];
					for(let i = 0; i < req.body.category.length; i++){
					categoryGame.push({
						id_game: gameId,
						id_category: Number(req.body.category[i]),
					})
					}
					 	db.Games_Categories.bulkCreate(categoryGame)
						.then((resultado) => {
							let platformGame = [];
							for(let i = 0; i < req.body.platform.length; i++){
								platformGame.push({
									id_game: gameId,
									id_platform: Number(req.body.platform[i])
								})
							}
						    db.Games_Platforms.bulkCreate(platformGame)
						})
				})
			})
		})
		.then(function (resultado){
			res.redirect('/')
		})
    },
	
    edit: function(req, res) {
		let productDetail = db.Games.findByPk(req.params.id,{
			include: [{association: 'images'},
			{association: 'platforms'},
			{association: 'genres'}]
		});

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
	},

	// search: (req, res) => {
	// 	res.render('productSearch')
	// },

	productSearch: (req, res) => {
		db.Games.findAll({
			include: { all: true },
			where: {
				title: {
					[db.Sequelize.Op.like]: `%${req.query.buscar}%`
				}
			},
			order: [
				['title', 'DESC']
			]
		})
		.then(function (resultado) {
			res.render('productSearch', {
				buscado: resultado,
				consulta: req.query.buscar
			})
		})
		.catch(function (err){
			res.send(
				err
			)
		})
	}
}