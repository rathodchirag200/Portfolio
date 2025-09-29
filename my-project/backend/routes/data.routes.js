const express = require('express');
const router = express.Router();
const Details = require('../model/data');

// POST /contact → save new message
router.post('/', async (req, res) => {
  console.log("👉 Incoming body:", req.body); // Debug
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newDetail = new Details({ name, email, message });
    await newDetail.save();
    res.status(200).json({ message: 'Message send successfully!' });
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /contact → fetch all messages
router.get('/', async (req, res) => {
  try {
    const details = await Details.find().sort({ createdAt: -1 });
    res.json(details);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
