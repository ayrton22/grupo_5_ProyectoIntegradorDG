function localsMiddleware(req, res, next) {
    if(req.session.user) {
        res.locals.localUser = "session";
        next()
    } else {
        res.redirect('/user/login')
    }
}

module.exports = localsMiddleware;