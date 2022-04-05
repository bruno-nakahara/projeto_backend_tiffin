import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    text: true,
  },
  description: {
    type: String,
    text: true,
  },
  price: {
    type: String,
  },
  date: {
    type: String,
    text: true,
  },
  category: {
    type: String,
    text: true,
  },
  local: {
    type: String,
    text: true,
  },
  imageUrl: {
    type: String,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
});

module.exports = mongoose.model('events', EventSchema);
