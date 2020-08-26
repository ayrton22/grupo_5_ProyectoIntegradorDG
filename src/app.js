// Express
const express = require('express');
const app = express();

// Modules
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-Livereload');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const localsMiddleware = require('./middlewares/localsMiddleware');


// Authentications
const authCookieMiddleware = require('./middlewares/authCookieMiddleware');

// Statics and Configs
const publicDirectory = path.resolve(__dirname, '../public');

app.use(express.static(publicDirectory));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret: 'May the force be with you!'}));

app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(authCookieMiddleware);
app.use(localsMiddleware);

/*let livereloadServer = livereload.createServer();
livereloadServer.watch(publicDirectory);
livereloadServer.server.once('connection', () => {
    setTimeout(() =>{
        livereloadServer.refresh("/");
    }, 1000);
});
app.use(connectLivereload());*/


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes require
const mainRouter = require('./routes/index');
const productsRouter = require('./routes/products')
const userRouter = require('./routes/users')


// Route usage
app.use('/', mainRouter);
app.use('/product', productsRouter);
app.use('/user', userRouter);

// Server Listening
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000, 8111 o 8889 :)"));

app.use((req, res, next) => {
    res.status(404).render('error')
})

