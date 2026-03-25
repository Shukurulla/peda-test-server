const router = require('express').Router();
const { getAll, create, update, delete: del } = require('../controllers/materialController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const upload = require('../config/multer');

router.get('/', auth, getAll);
router.post('/', auth, admin, upload.single('file'), create);
router.put('/:id', auth, admin, update);
router.delete('/:id', auth, admin, del);

module.exports = router;
