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
                avatar: result.avatar
            }
            next();
        })        
    } else {
        res.redirect('/user/login')
    }
}

module.exports = localsMiddleware;