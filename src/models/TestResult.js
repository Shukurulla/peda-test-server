const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  section: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSection', required: true },
  answers: [{
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
    selectedAnswer: { type: String },
    isCorrect: { type: Boolean }
  }],
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  percentage: { type: Number }
}, { timestamps: true });

testResultSchema.index({ student: 1, section: 1 });

module.exports = mongoose.model('TestResult', testResultSchema);
