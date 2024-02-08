// models/Meal.js
const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  summary: { type: String, required: true },
  instructions: { type: String, required: true },
  creator: { type: String, required: true },
  creator_email: { type: String, required: true },
});

// Prevent recompilation of the model if it already exists
const Meal = mongoose.models.Meal || mongoose.model('Meal', mealSchema);

module.exports = Meal;
