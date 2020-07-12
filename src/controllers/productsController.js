const fs = require('fs');
const path = require('path');

let producto = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
producto = JSON.parse(producto);

module.exports = {
    allProducts: (req, res) => {
		res.render('productos', {
			producto: producto
		})
	},
    shoppingCart: function(req, res){
        res.render('carritoDeCompras')
    },
    register: function(req, res) {
        res.render('registro');
    },
    signIn: function(req, res) {
        res.render('login');
    },
    productLoad: function(req, res) {
        res.render('cargaDeProductos');
    },
    detail: function(req, res) {
        let idProducto = req.params.id;
		for (let i = 0; i < producto.length; i++) {
			if (producto[i].id == idProducto) {
				res.render('detalleProducto', {
					productoDetalle: producto[i]
				})
			}
		}
    },
    edit: (req, res) => {
		for (let i = 0; i < producto.length; i++) {
			if (producto[i].id == req.params.productId) {
				res.render('product-edit-form', {
					producto: producto[i]
				})
			}
		}
    },
	update: (req, res) => {
		let productoActualizado = {
			id: Number(req.params.productId),
			...req.body
		}
		for (let i = 0; i < producto.length; i++) {
			if (producto[i].id == productoActualizado.id) {
				producto[i] = productoActualizado;
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(producto));
				res.redirect('/products/detail/' + producto.id)
			}
		}
	},
    destroy: (req, res) => {
		for (let i = 0; i < producto.length; i++) {
			if (producto[i].id == req.params.productId) {
				let index = producto.indexOf(producto[i]);
				producto.splice(index, 1);
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(producto));
				res.redirect('/products?status=ok')
			}
		}
	},

    productLoad: function(req, res) {
        res.render('cargaDeProductos');
    },
    productUpdate: function(req, res) {
        let nuevoProducto = {
            id: productos.length + 1,
            tittle: req.body.nombre,
            statement: req.body.estado,
            plataform: req.body.plataforma,
            category: req.body.categoria,
            picture: req.body.foto,
            pagyFomr:  req.body.pagos,
            delivery:  req.body.entrega,
            price:  req.body.precio
        };
        productos.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos));
        res.redirect('/')
        res.render();
    }
}