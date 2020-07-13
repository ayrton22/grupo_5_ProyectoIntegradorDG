const fs = require('fs');
const path = require('path');

let productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
productos = JSON.parse(productos);

module.exports = {
    allProducts: (req, res) => {
		res.render('productos', {
			producto: productos
		})
	},

    shoppingCart: function(req, res){
        res.render('carritoDeCompras')
	},
	
	detail: function(req, res) {
		let idProducto = req.params.id;
		for (let i = 0; i < productos.length; i++) {
			if (productos[i].id == idProducto) {
				res.render('detalleProducto', {
					productoDetalle: productos[i]
				})
			}
		}
	},

    load: function(req, res) {
		res.render('cargaDeProductos')
	},

	store: function(req, res) {
		let nuevoProducto = {
            id: productos.length + 1,
            title: req.body.title,
            description: req.body.description,
            /*medium-description: req.body.username,
            big-description: req.body.email,*/
			price: `$${req.body.price}`,
			image: req.body.image,
			video: req.body.video,
			editora: req.body.editora,
			lanzamiento: req.body.lanzamiento,
			desarrolladora: req.body.desarrolladora,
			etiquetas: req.body.etiquetas,
			clasificacion: req.body.clasificacion,
			genre: req.body.genre,
			category: req.body.category,
			rating: req.body.rating
        };
        for(let i = 0; i < productos.length; i++) {
            if(req.body.title == productos[i].title || req.body.image == productos[i].image || req.body.description == productos[i].description) {
                return res.redirect('/product/load');
            }
        }
		productos.push(nuevoProducto);
		fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos))
		res.redirect('/')
    },
	
    edit: function(req, res) {
		res.render('productEdit')
	},
	
	update: function(req, res) {

	},

    destroy: (req, res) => {
		for (let i = 0; i < productos.length; i++) {
			if (productos[i].id == req.params.id) {
				let index = productos.indexOf(productos[i]);
				productos.splice(index, 1);
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos));
				res.redirect('/')
			}
		}
	}
}