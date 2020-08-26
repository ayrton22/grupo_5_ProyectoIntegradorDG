const db = require('../database/models');

function localsMiddleware(req, res, next) {
    if(req.session.usernameUser) {
        db.Users.findOne({
            where: {
                username: req.session.usernameUser
            }
        })
        .then(function(result) {
            res.locals.localUser = {
                id: result.id,
                avatar: result.avatar,
                privilegios: result.admin
            }
        })        
    } else if(req.url == '/user') {
        res.redirect('/user/login');
    }
    
    next();
}
module.exports = localsMiddleware;