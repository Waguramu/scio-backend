module.exports = documentRoutes;

function documentRoutes(passport) {

    var documentController = require('./documentController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET']}));

    //router.post('/');


    return router;
}