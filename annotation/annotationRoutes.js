module.exports = annotationRoutes;

function annotationRoutes(passport) {

    var annotationController = require('./annotationController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET']}));

    router.post('/extract', annotationController.extractAnnotations);
    router.post('/search', annotationController.search);
    router.post('/to_text', annotationController.toText);

    return router;
}