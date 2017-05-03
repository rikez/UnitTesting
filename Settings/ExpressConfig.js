const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const autoload = require('express-load');
const errorMiddleware = require('../Middlewares/ErrorMiddleware').ErrorMiddleware;
const authMiddleware = require('../Middlewares/AuthMiddleware').AuthMiddleware;
const environmentVars = require('dotenv')
// Loading environment vars .env
environmentVars.config();

const mongooseInstance = require('./MongooseConfig');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// 404 Middleware
//app.use(errorMiddleware.notFound);

// 50x error Middleware
app.use(errorMiddleware.applicationError);

// Api token Authentication
app.use('/dashboard', authMiddleware.isAuthenticatedToken)



autoload('Models')
    .then('Middlewares')
    .then('Controllers')
    .then('Routes')
    .into(app, (err, instance) => {
        if(!!err) throw err;
    });


module.exports = app;