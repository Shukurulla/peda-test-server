const router = require('express').Router();
const { getAll, create, update, delete: del } = require('../controllers/testSectionController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', auth, getAll);
router.post('/', auth, admin, create);
router.put('/:id', auth, admin, update);
router.delete('/:id', auth, admin, del);

module.exports = router;
