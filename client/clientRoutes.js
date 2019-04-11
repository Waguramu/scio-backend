module.exports = clientRoutes;

function clientRoutes(passport) {

    var clientController = require('./clientController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET']}));

    router.post('/client', clientController.clientById);
    router.post('/list_clients', clientController.listClients);

    return router;
}