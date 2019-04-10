module.exports = fileRoutes;

function fileRoutes(passport) {

    var fileController = require('./fileController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET','POST']}));

    //router.post('/');
    router.post('/:id', fileController.uploadFile);
    router.get('/:id', fileController.getFile);

    return router;
}