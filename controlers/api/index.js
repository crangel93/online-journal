const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('../home-routes.js');
const journalRoutes = require('./journal-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', journalRoutes);
router.use('/api', apiRoutes);

module.exports = router;