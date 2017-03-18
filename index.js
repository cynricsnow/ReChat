'use strict'

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const serveFavicon = require('serve-favicon');
const webpack = require('webpack');
const webpackDevMidddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const connectMongo = require('connect-mongo');

const config = require('./config');
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const MongoStore = connectMongo(session);
const sessionStore = new MongoStore(config.mongo);

const app = express();

app.use(morgan(config.morgan.format));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.cookie.secret));
app.use(session({
    name: 'ReChat.sid',
    secret: config.cookie.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000,
        secure: false
    },
    store: sessionStore
}))
app.use(serveFavicon(`${__dirname}/public/logo.ico`));
if (env === 'development') {
    const compiler = webpack(require('./webpack.config.dev'));
    app.use(webpackDevMidddleware(compiler, {
        stats: { colors: true}
    }));
    app.use(webpackHotMiddleware(compiler));
}
app.use(express.static(`{__dirname}/public`));

app.use('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
})

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App is listening on port ${server.address().port}`);
});
