const router = require('express').Router();
const { getBySection, getById, create, update, delete: del } = require('../controllers/testController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', auth, getBySection);
router.get('/:id', auth, getById);
router.post('/', auth, admin, create);
router.put('/:id', auth, admin, update);
router.delete('/:id', auth, admin, del);

module.exports = router;
