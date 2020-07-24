const fs = require('fs');
const path = require('path');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

function authMiddleware2 (req, res, next){
    let url = req.params;
    let usuarioAigualar;

    for(let i = 0; i < usuarios.length; i++){
        if(url.id == usuarios[i].id){
           usuarioAigualar = usuarios[i].username
        }
    }

    if(req.session.usernameUser != usuarioAigualar){
        return res.render('error')
    } else {
        next();
    }
}

module.exports = authMiddleware2;