const router = require('express').Router();
const { submit, getMyResult, getAllStudents, getStudentResults } = require('../controllers/testResultController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, submit);
router.get('/my/:sectionId', auth, getMyResult);
router.get('/students', auth, admin, getAllStudents);
router.get('/student/:studentId', auth, admin, getStudentResults);

module.exports = router;
