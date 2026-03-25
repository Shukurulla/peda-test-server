const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  section: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSection', required: true },
  questionNumber: { type: Number, required: true },
  context: { type: String },
  question: { type: String, required: true },
  variants: [{
    label: { type: String, required: true },
    text: { type: String, required: true }
  }],
  correctAnswer: { type: String, required: true }
}, { timestamps: true });

testSchema.index({ section: 1, questionNumber: 1 });

module.exports = mongoose.model('Test', testSchema);
