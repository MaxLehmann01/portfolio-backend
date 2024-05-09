/* Dependencies */
import mongoose from "mongoose";

/* Default-Export */
export default mongoose.model('Project', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  descriptions: {
    en: {
      type: String,
      required: true
    },
    de: {
      type: String,
      required: true
    }
  },
  banner: { 
    filename: {
      type: String,
      required: true
    }, 
    base64: {
      type: String,
      required: true
    }, 
    type: {
      type: String,
      required: true
    } 
  },
  repositories: [{
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }],
  version: {
    type: String,
    required: true
  },
  urls: [{
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }],
  techs: [mongoose.Schema.ObjectId],
  timestamp: {
    type: Date,
    required: true
  }
}));