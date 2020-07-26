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
					productoDetalle: productos[i],
					productos
				})
			}
		}
	},

    load: function(req, res) {
		res.render('cargaDeProductos')
	},

	store: function(req, res) {

		let url = new URL(req.body.video);
		let videoCode = new URLSearchParams(url.search).get("v");

		let nuevoProducto = {
            id: productos.length + 1,
            title: req.body.title,
            description: req.body.description,
            medium_description: req.body.medium_description,
            big_description: req.body.big_description,
			price: req.body.price,
			image: (req.files[0]) ? req.files[0].filename : 'default.png',
			imagen_horizontal: (req.files[1]) ? req.files[1].filename : 'default.png',
			image1: (req.files[2]) ? req.files[2].filename : 'default.png',
			image2: (req.files[3]) ? req.files[3].filename : 'default.png',
			image3: (req.files[4]) ? req.files[4].filename : 'default.png',
			image4: (req.files[5]) ? req.files[5].filename : 'default.png',
			image5: (req.files[6]) ? req.files[6].filename : 'default.png',
			image6: (req.files[7]) ? req.files[7].filename : 'default.png',
			image7: (req.files[8]) ? req.files[8].filename : 'default.png',
			image8: (req.files[9]) ? req.files[9].filename : 'default.png',
			image9: (req.files[10]) ? req.files[10].filename : 'default.png',
			image10: (req.files[11]) ? req.files[11].filename : 'default.png',
			imagen_detalle: (req.files[12]) ? req.files[12].filename : 'default.png',
			video: videoCode,
			editor: req.body.editor,
			launch_date: req.body.launch_date,
			developer: req.body.developer,
			tags: req.body.tags,
			classification: req.body.classification,
			category: req.body.category,
			rating: req.body.rating,
			playstation: (req.body.plataformPlay == 'on') ? 'si' : 'no',
			xbox: (req.body.plataformXbox == 'on') ? 'si' : 'no',
			pc: (req.body.plataformPc == 'on') ? 'si' : 'no',
			icon_playstation: 'fab fa-playstation icono-playstation',
			icon_xbox: 'fab fa-xbox icono-xbox',
			icon_pc: 'fas fa-desktop icono-desktop'
		};
		console.log(req.files)
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
		for(let i = 0; i < productos.length; i++) {
            if(req.params.id == productos[i].id) {
                return res.render('productEdit', {
                    producto: productos[i]
                })
            }
        } res.redirect('/product');
	},
	
	update: function(req, res) {
		let productoRecuperado;
        for(i = 0; i < productos.length; i++){
            if(productos[i].id ==  req.params.id){
                productoRecuperado = productos[i]
            }
		}

		let url = new URL(req.body.video);
		let videoCode = new URLSearchParams(url.search).get("v");

		let productoEditado = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            medium_description: req.body.medium_description,
            big_description: req.body.big_description,
			price: req.body.price,
			image: productoRecuperado.image,
			imagen_horizontal: productoRecuperado.imagen_horizontal,
			image1: productoRecuperado.image1,
			image2: productoRecuperado.image2,
			image3: productoRecuperado.image3,
			image4: productoRecuperado.image4,
			image5: productoRecuperado.image5,
			image6: productoRecuperado.image6,
			image7: productoRecuperado.image7,
			image8: productoRecuperado.image8,
			image9: productoRecuperado.image9,
			image10: productoRecuperado.image10,
			imagen_detalle: productoRecuperado.imagen_detalle,
			video: videoCode,
			editor: req.body.editor,
			launch_date: req.body.launch_date,
			developer: req.body.developer,
			tags: req.body.tags,
			classification: req.body.classification,
			category: productoRecuperado.category,
			rating: req.body.rating,
			playstation: (req.body.plataformPlay == 'on') ? 'si' : 'no',
			xbox: (req.body.plataformXbox == 'on') ? 'si' : 'no',
			pc: (req.body.plataformPc == 'on') ? 'si' : 'no',
			icon_playstation: productoRecuperado.icon_playstation,
			icon_xbox: productoRecuperado.icon_xbox,
			icon_pc: productoRecuperado.icon_pc
        };
        
        for(let i = 0; i < productos.length; i++) {
            if(productos[i].id == req.params.id ) {
                productos[i] = productoEditado;
                fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos))
                res.redirect('/product/detail/' + productoEditado.id)
            }
        }
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