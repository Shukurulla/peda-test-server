const Test = require('../models/Test');

exports.getBySection = async (req, res, next) => {
  try {
    const { section } = req.query;
    if (!section) return res.status(400).json({ message: 'section parametri kerak' });
    const tests = await Test.find({ section }).sort('questionNumber').lean();
    if (req.user.role !== 'admin') {
      tests.forEach(t => { delete t.correctAnswer; });
    }
    res.json(tests);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id).lean();
    if (!test) return res.status(404).json({ message: 'Test topilmadi' });
    if (req.user.role !== 'admin') delete test.correctAnswer;
    res.json(test);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!test) return res.status(404).json({ message: 'Test topilmadi' });
    res.json(test);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    res.json({ message: 'O\'chirildi' });
  } catch (err) { next(err); }
};
