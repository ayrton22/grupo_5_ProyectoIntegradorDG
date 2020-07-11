const fs = require('fs');
const path = require('path');

let producto = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
producto = JSON.parse(producto);

module.exports = {
    root: (req, res) => {
		res.render('products', {
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
        res.render('detalleProducto');
        let idProducto = req.params.productId;
		for (let i = 0; i < producto.length; i++) {
			if (producto[i].id == idProducto) {
				res.render('detalleProducto', {
					producto: producto[i]
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
			if (productosParseados[i].id == productoActualizado.id) {
				productosParseados[i] = productoActualizado;
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(producto));
				res.redirect('/products/detail/' + producto.id)
			}
		}
	},
    destroy: (req, res) => {
		for (let i = 0; i < producto.length; i++) {
			if (productosParseados[i].id == req.params.productId) {
				let index = producto.indexOf(productosParseados[i]);
				producto.splice(index, 1);
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(producto));
				res.redirect('/products?status=ok')
			}
		}
	}
}