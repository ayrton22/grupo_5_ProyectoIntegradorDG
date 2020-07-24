const express = require('express');
const app = express();
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-Livereload');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const authCookieMiddleware = require('./middlewares/authCookieMiddleware');

const publicDirectory = path.resolve(__dirname, '../public');
/*let livereloadServer = livereload.createServer();
livereloadServer.watch(publicDirectory);
livereloadServer.server.once('connection', () => {
    setTimeout(() =>{
        livereloadServer.refresh("/");
    }, 1000);
});*/

app.use(connectLivereload());

app.use(express.static(publicDirectory));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret: 'May the force be with you!'}));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(authCookieMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const mainRouter = require('./routes/index');
const productsRouter = require('./routes/products')
const userRouter = require('./routes/users')

app.use('/', mainRouter);
app.use('/product', productsRouter);
app.use('/user', userRouter);



app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

