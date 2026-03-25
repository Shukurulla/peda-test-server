const TestResult = require('../models/TestResult');
const Test = require('../models/Test');

exports.submit = async (req, res, next) => {
  try {
    const { sectionId, answers } = req.body;
    // answers = [{ testId, selectedAnswer }]

    const existing = await TestResult.findOne({ student: req.user._id, section: sectionId });
    if (existing) return res.status(400).json({ message: 'Bu bo\'lim uchun allaqachon javob bergansiz', result: existing });

    const testIds = answers.map(a => a.testId);
    const tests = await Test.find({ _id: { $in: testIds } }).lean();
    const testMap = {};
    tests.forEach(t => { testMap[t._id.toString()] = t; });

    let score = 0;
    const processedAnswers = answers.map(a => {
      const test = testMap[a.testId];
      const isCorrect = test && test.correctAnswer === a.selectedAnswer;
      if (isCorrect) score++;
      return { test: a.testId, selectedAnswer: a.selectedAnswer, isCorrect };
    });

    const totalQuestions = tests.length;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    const result = await TestResult.create({
      student: req.user._id,
      section: sectionId,
      answers: processedAnswers,
      score,
      totalQuestions,
      percentage
    });

    res.status(201).json(result);
  } catch (err) { next(err); }
};

exports.getMyResult = async (req, res, next) => {
  try {
    const result = await TestResult.findOne({
      student: req.user._id,
      section: req.params.sectionId
    }).populate('answers.test');
    res.json(result);
  } catch (err) { next(err); }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await TestResult.aggregate([
      { $group: {
        _id: '$student',
        totalSections: { $sum: 1 },
        avgPercentage: { $avg: '$percentage' }
      }},
      { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'user' } },
      { $unwind: '$user' },
      { $project: {
        studentId: '$_id',
        name: '$user.name',
        email: '$user.email',
        totalSections: 1,
        avgPercentage: { $round: ['$avgPercentage', 0] }
      }},
      { $sort: { name: 1 } }
    ]);
    res.json(students);
  } catch (err) { next(err); }
};

exports.getStudentResults = async (req, res, next) => {
  try {
    const results = await TestResult.find({ student: req.params.studentId })
      .populate('section')
      .sort('-createdAt');
    res.json(results);
  } catch (err) { next(err); }
};
