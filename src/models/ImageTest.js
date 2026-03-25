const mongoose = require('mongoose');

const imageTestSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  originalFilename: { type: String },
  number: { type: Number, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('ImageTest', imageTestSchema);
