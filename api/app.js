const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const bearerStrategy = require('./passport.config'); 
 
var app = express();

// Passport
app.use(passport.initialize());
passport.use(bearerStrategy);

// Logging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configure CORS
app.use((req,res,next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

// configure routes
const authorRoutes = require('./api/routes/authors');
const userRoutes = require('./api/routes/users');

app.use('/authors', authorRoutes);
app.use('/users', userRoutes);


// configure error handling
app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    console.log(error);
    next(error);
});

app.use((error,req,res,next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
        error : { 
            message : error.message 
        }
    });
})

module.exports = app;