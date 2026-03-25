const mongoose = require('mongoose');

const imageTestSubmissionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: mongoose.Schema.Types.ObjectId, ref: 'ImageTest', required: true },
  text: { type: String, required: true },
  reviewed: { type: Boolean, default: false }
}, { timestamps: true });

imageTestSubmissionSchema.index({ student: 1 });
imageTestSubmissionSchema.index({ reviewed: 1 });

module.exports = mongoose.model('ImageTestSubmission', imageTestSubmissionSchema);
