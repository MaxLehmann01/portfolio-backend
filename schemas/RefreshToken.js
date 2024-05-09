/* Dependencies */
import mongoose from "mongoose";

/* Default-Export */
export default mongoose.model('RefreshToken', new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
}));