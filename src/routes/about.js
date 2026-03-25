const router = require('express').Router();
const { get, update } = require('../controllers/aboutController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', get);
router.put('/', auth, admin, update);

module.exports = router;
