const mongoose = require('mongoose');

const testSectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('TestSection', testSectionSchema);
