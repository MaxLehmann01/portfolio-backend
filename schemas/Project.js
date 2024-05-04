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
  banner: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Buffer,
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