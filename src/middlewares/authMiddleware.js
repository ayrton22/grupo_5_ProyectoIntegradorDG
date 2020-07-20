function authMiddleware(req, res, next){
    if(req.session.usernameUser == undefined){
        return res.redirect('/user/login')
    } else {
        next();
    }
}

module.exports = authMiddleware;