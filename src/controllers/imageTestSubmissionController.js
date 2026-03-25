const ImageTestSubmission = require('../models/ImageTestSubmission');

exports.submit = async (req, res, next) => {
  try {
    const { image, text } = req.body;
    const submission = await ImageTestSubmission.create({
      student: req.user._id,
      image,
      text
    });
    res.status(201).json(submission);
  } catch (err) { next(err); }
};

exports.getMySubmissions = async (req, res, next) => {
  try {
    const submissions = await ImageTestSubmission.find({ student: req.user._id })
      .populate('image')
      .sort('-createdAt');
    res.json(submissions);
  } catch (err) { next(err); }
};

exports.getStudents = async (req, res, next) => {
  try {
    const students = await ImageTestSubmission.aggregate([
      { $group: {
        _id: '$student',
        totalSubmissions: { $sum: 1 },
        unreviewedCount: { $sum: { $cond: [{ $eq: ['$reviewed', false] }, 1, 0] } }
      }},
      { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'studentInfo' } },
      { $unwind: '$studentInfo' },
      { $project: {
        studentId: '$_id',
        name: '$studentInfo.name',
        email: '$studentInfo.email',
        totalSubmissions: 1,
        unreviewedCount: 1
      }}
    ]);
    res.json(students);
  } catch (err) { next(err); }
};

exports.getByStudent = async (req, res, next) => {
  try {
    const { tab } = req.query; // 'new' or 'reviewed'
    const filter = { student: req.params.studentId };
    if (tab === 'new') filter.reviewed = false;
    if (tab === 'reviewed') filter.reviewed = true;

    const submissions = await ImageTestSubmission.find(filter)
      .populate('image')
      .sort('-createdAt');
    res.json(submissions);
  } catch (err) { next(err); }
};

exports.markReviewed = async (req, res, next) => {
  try {
    const submission = await ImageTestSubmission.findByIdAndUpdate(
      req.params.id,
      { reviewed: true },
      { new: true }
    );
    if (!submission) return res.status(404).json({ message: 'Topilmadi' });
    res.json(submission);
  } catch (err) { next(err); }
};
