//Collects the endpoints in post-routes.js and prefixes/hooks them to the /api/users route

const router = require('express').Router();

const postRoutes = require('./post-routes');

router.use('/posts', postRoutes);

module.exports = router;