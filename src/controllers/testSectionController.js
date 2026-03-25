const TestSection = require('../models/TestSection');
const Test = require('../models/Test');

exports.getAll = async (req, res, next) => {
  try {
    const sections = await TestSection.find().sort('order').lean();
    const counts = await Test.aggregate([
      { $group: { _id: '$section', count: { $sum: 1 } } }
    ]);
    const countMap = {};
    counts.forEach(c => { countMap[c._id.toString()] = c.count; });
    const result = sections.map(s => ({ ...s, testCount: countMap[s._id.toString()] || 0 }));
    res.json(result);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const section = await TestSection.create(req.body);
    res.status(201).json(section);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const section = await TestSection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!section) return res.status(404).json({ message: 'Bo\'lim topilmadi' });
    res.json(section);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    await TestSection.findByIdAndDelete(req.params.id);
    res.json({ message: 'O\'chirildi' });
  } catch (err) { next(err); }
};
