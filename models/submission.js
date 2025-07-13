const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  age: Number,
  income: Number,
  dependents: Number,
  risk: String,
  recommendation: String,
  reason: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Submission', submissionSchema);
