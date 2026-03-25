const router = require('express').Router();
const { getAll, create } = require('../controllers/imageTestController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', auth, getAll);
router.post('/', auth, admin, create);

module.exports = router;
