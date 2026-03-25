const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  fileUrl: { type: String, required: true },
  fileSize: { type: Number },
  originalFilename: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Material', materialSchema);
