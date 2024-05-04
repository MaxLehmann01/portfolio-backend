/* Dependencies */
import mongoose from "mongoose";

/* Default-Export */
export default mongoose.model('Visit', new mongoose.Schema({
  ip: String,
  hostname: String,
  city: String,
  region: String,
  country: String,
  loc: String,
  org: String,
  postal: String,
  timezone: String,
  timestamp: {
    type: Date,
    required: true
  }
}));