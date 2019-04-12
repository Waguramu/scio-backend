let Config = require('./config/config.js');

/**
 * DB connect
 */
var mongoose = require('mongoose');
mongoose.connect(Config.db.url, {
    //eventually it's a good idea to make this secure
    user: Config.db.user,
    pass: Config.db.pass,
    useMongoClient: true
});

/**
 * Create application
 */
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();

/**
 * App setup
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * Passport
 */
let passport = require('passport');
let jwtConfig = require('./passport/jwtConfig');
app.use(passport.initialize());
jwtConfig(passport);

/**
 * Routing
 */
let userRoutes = require("./user/userRoutes");
let clientRoutes = require("./client/clientRoutes");
let collectionRoutes = require("./collection/collectionRoutes");
let documentRoutes = require("./document/documentRoutes");
let fileRoutes = require("./file/fileRoutes");

app.use('/api/user', userRoutes(passport));
app.use('/api/client', clientRoutes(passport));
app.use('/api/collection', collectionRoutes(passport));
app.use('/api/document', documentRoutes(passport));
app.use('/api/file', fileRoutes(passport));

module.exports = app;
