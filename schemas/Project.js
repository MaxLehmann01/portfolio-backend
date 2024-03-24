/* Dependencies */
import mongoose from "mongoose";

/* Default-Export */
export default mongoose.model('Project', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  descriptions: [{
    lang: {
      type: String,
      required: true,
      enum: ['en', 'de']
    },
    content: {
      type: String,
      required: true
    }
  }],
  repositories: [{
    type: String,
    required: true
  }],
  version: {
    type: String,
    required: true
  },
  urls: [{
    type: String,
    required: true
  }],
  timestamp: {
    type: Date,
    required: true
  }
}));