const router = require('express').Router();


// BOTH OF THESE WILL BE FOR IF WE USE THE HOMEPAGE  
// const homeRoutes = require('./home-routes.js');
// router.use('/', homeRoutes);

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;