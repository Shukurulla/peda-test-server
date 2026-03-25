const router = require('express').Router();
const { submit, getMySubmissions, getStudents, getByStudent, markReviewed } = require('../controllers/imageTestSubmissionController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, submit);
router.get('/my', auth, getMySubmissions);
router.get('/students', auth, admin, getStudents);
router.get('/student/:studentId', auth, admin, getByStudent);
router.patch('/:id/review', auth, admin, markReviewed);

module.exports = router;
