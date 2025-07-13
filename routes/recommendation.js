// routes/recommendation.js
const express = require('express');
const router = express.Router();
const Submission = require('../models/submission');

router.post('/', async (req, res) => {
  const { age, income, dependents, risk } = req.body;

  let recommendation = 'Term Life – $500,000 for 20 years';
  let reason = 'Suitable for young adults with high risk tolerance.';

  if (age > 50 || risk === 'Low') {
    recommendation = 'Whole Life – $250,000 policy';
    reason = 'More stable and long-term protection is appropriate.';
  } else if (dependents >= 3 && risk === 'Medium') {
    recommendation = 'Term Life – $1,000,000 for 30 years';
    reason = 'Higher coverage due to multiple dependents.';
  }

  try {
    const submission = new Submission({
      age,
      income,
      dependents,
      risk,
      recommendation,
      reason,
    });

    await submission.save();
    res.json({ recommendation, reason });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
