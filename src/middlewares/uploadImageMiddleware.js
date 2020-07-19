const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/uploads/avatars'))
    },
    filename: function (req, file, cb) {
        cb(null, `avatar_${req.body.email}_${Date.now() + path.extname(file.originalname)}`);
    }
})

let upload = multer({ storage: storage })

module.exports = upload;