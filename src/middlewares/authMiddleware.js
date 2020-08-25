function authMiddleware(req, res, next){
    if(!req.session.usernameUser){
        res.redirect('/user/login')
    } else {
        next();
    }
}

module.exports = authMiddleware;