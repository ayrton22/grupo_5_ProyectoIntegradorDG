const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/uploads/productsImage'))
    },
    filename: function (req, file, cb) {
      console.log(req.body)
      cb(null, `product_${req.body.name}_${Date.now() + path.extname(file.originalname)}`);
    }
})

let upload = multer({ storage: storage })

module.exports = upload;