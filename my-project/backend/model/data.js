const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true, // 👈 adds createdAt and updatedAt
  }
);

const Details = mongoose.model("Details", dataSchema);

module.exports = Details;
