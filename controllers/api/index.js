//Collects the endpoints in post-routes.js and prefixes/hooks them to the /api/users route

const router = require('express').Router();

const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;